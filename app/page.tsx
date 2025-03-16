"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldValues } from "react-hook-form";
import { userSchema, TUserSchema } from "@/lib/types";

const timezoneList = ["GMT", "EST", "MST", "CST", "PST"];

const roleList = ["Dealer", "Price Approver", "Product Engineer"];

const themeList = ["Light", "Dark", "System"];

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    getValues,
    setError,
  } = useForm<TUserSchema>({
    resolver: zodResolver(userSchema),
    defaultValues: { roles: [] },
  });

  const onSubmit = async (e: TUserSchema) => {
    const response = await fetch("/api/createuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: e.username, // To test server side validation set username to 'XXX'
        email: e.email,
        password: e.password,
        confirmPassword: e.confirmPassword,
        description: e.description,
        timezone: e.timezone,
        theme: e.theme,
        roles: e.roles,
        joinDate: e.joinDate,
      }),
    });
    const data = await response.json();

    // if (!data.ok) {
    //   alert("Submit failed. Please try again.");
    // }

    if (data.errors) {
      const errorList: { [key: string]: string }[] = data.errors;
      errorList.forEach((error) => {
        if (error.username) {
          setError("username", { type: "server", message: error.username });
        }
      });
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  const handleRoleChange = (role: string, checked: boolean) => {
    console.log(role, checked);
    const currentRoles = getValues("roles") || [];
    const updatedRoles = checked
      ? [...currentRoles, role]
      : currentRoles.filter((r) => r !== role);
    setValue("roles", updatedRoles, { shouldValidate: true });
  };

  return (
    <div className="bg-gray-100">
      <div className="flex justify-center min-h-screen bg-gray-100 p-4 w-[500px] mx-auto">
        <form
          className="flex flex-col gap-4 gap-y-2 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* ===============
              TEXT   
              ===============
          */}
          <input
            {...register("username")}
            type="text"
            placeholder="Username"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />
          {errors.username && (
            <div className="error text-red-500 py-2">
              {`${errors.username.message}`}
            </div>
          )}
          {/* ===============
              EMAIL   
              ===============
          */}
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />
          {errors.email && (
            <div className="error text-red-500 py-2">
              {`${errors.email.message}`}
            </div>
          )}
          {/* ===============
              PASSWORD   
              ===============
          */}
          <input
            {...register("password")}
            type="text"
            placeholder="Password"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />
          {errors.password && (
            <div className="error text-red-500 py-2">
              {`${errors.password.message}`}
            </div>
          )}
          {/* ===============
              CONFIRM PASSWORD   
              ===============
          */}
          <input
            {...register("confirmPassword")}
            type="text"
            placeholder="Confirm Password"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />{" "}
          {errors.confirmPassword && (
            <div className="error text-red-500 py-2">
              {`${errors.confirmPassword.message}`}
            </div>
          )}
          {/* ===============
              TEXTAREA   
              ===============
          */}
          <input
            {...register("description")}
            type="textarea"
            placeholder="Description"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />
          {errors.description && (
            <div className="error text-red-500 py-2">
              {`${errors.description.message}`}
            </div>
          )}
          {/* ===============
              SELECT   
              =============== 
          */}
          <select
            {...register("timezone")}
            defaultValue=""
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          >
            <option value="" className=" bg-white px-4 py-2 rounded">
              Select Timezone
            </option>
            {timezoneList.map((timezone) => (
              <option key={timezone} value={timezone}>
                {timezone}
              </option>
            ))}
          </select>
          {errors.timezone && (
            <div className="error text-red-500 py-2">
              {`${errors.timezone.message}`}
            </div>
          )}
          {/* ===============
              RADIO   
              ===============
          */}
          <div className="flex gap-2">
            <span className="font-semibold w-16">Theme</span>
            {themeList.map((theme) => (
              <label key={theme}>
                <input
                  {...register("theme")}
                  type="radio"
                  value={theme}
                  className="bg-white mr-1"
                />
                {theme}
              </label>
            ))}
          </div>
          {errors.theme && (
            <div className="error text-red-500 py-2">
              {errors.theme.message as string}
            </div>
          )}
          {/* ===============
              CHECKBOX   
              ===============
          */}
          <div className="flex gap-2">
            <span className="font-semibold w-16">Roles</span>
            {roleList.map((role) => (
              <label key={role}>
                <input
                  {...register("roles")}
                  type="checkbox"
                  value={role}
                  className="bg-white mr-1"
                />
                {role}
              </label>
            ))}
          </div>
          {errors.roles && (
            <div className="error text-red-500 py-2">
              {errors.roles.message as string}
            </div>
          )}
          {/* ===============
              DATE 
              ===============
          */}
          <input
            {...register("joinDate")}
            type="date"
            placeholder="Join Date"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />
          {errors.joinDate && (
            <div className="error text-red-500 py-2">
              {`${errors.joinDate.message}`}
            </div>
          )}
          {/* ===============
              BUTTON   
              ===============
          */}
          <button
            className=" text-white bg-blue-500 py-2 rounded disabled:bg-gray-500 disabled:pointer-events-none hover:active:translate-y-[1px]"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
