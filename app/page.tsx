"use client";
import Image from "next/image";
import { useState } from "react";

const timezoneList = ["GMT", "EST", "MST", "CST", "PST"];

const roleList = ["Dealer", "Price Approver", "Product Engineer"];

const themeList = ["Light", "Dark", "System"];

export default function Home() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [description, setDescription] = useState("");
  const [timezone, setTimezone] = useState("");
  const [theme, setTheme] = useState("");
  const [roles, setRoles] = useState<string[]>([]);
  const [joiningDate, setJoiningDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !username ||
      !email ||
      !password ||
      !confirmPassword ||
      !description ||
      !timezone ||
      !theme ||
      !roles.length ||
      !joiningDate
    ) {
      setErrors("Please fill out all the fields");
      return;
    }

    if (password !== confirmPassword) {
      setErrors("Password and Confirm Password should match");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);

    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setDescription("");
    setTimezone("");
    setTheme("");
    setRoles([]);
    setJoiningDate("");
    setErrors("");
  };

  return (
    <div className="bg-gray-100">
      <div className="flex justify-center min-h-screen bg-gray-100 p-4 w-[500px] mx-auto">
        <form
          className="flex flex-col gap-4 gap-y-2 w-full"
          onSubmit={handleSubmit}
        >
          {/* TEXT   */}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />
          {/* EMAIL   */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />
          {/* PASSWORD   */}
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />
          {/* CONFIRM PASSWORD   */}
          <input
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />
          {/* TEXTAREA   */}
          <input
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />

          {/* SELECT   */}
          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          >
            <option value="" className=" bg-white px-4 py-2 rounded" disabled>
              Select Timezone
            </option>
            {timezoneList.map((timezone) => (
              <option key={timezone} value={timezone}>
                {timezone}
              </option>
            ))}
          </select>

          {/* RADIO   */}
          <div className="flex gap-2">
            <span className="font-semibold w-16">Theme</span>
            {themeList.map((themeValue) => (
              <label key={themeValue}>
                <input
                  type="radio"
                  value={themeValue}
                  onChange={(e) => setTheme(e.target.value)}
                  name="theme"
                  className="bg-white mr-1"
                />
                {themeValue}
              </label>
            ))}
          </div>

          {/* CHECKBOX   */}
          <div className="flex gap-2">
            <span className="font-semibold w-16">Role</span>
            {roleList.map((roleValue) => (
              <label key={roleValue}>
                <input
                  type="checkbox"
                  className="bg-white mr-1"
                  value={roleValue}
                  onChange={(e) => {
                    const { value, checked } = e.target;
                    setRoles((prev) =>
                      checked
                        ? [...prev, value]
                        : prev.filter((f) => f !== value),
                    );
                  }}
                />
                {roleValue}
              </label>
            ))}
          </div>

          {/* DATE */}
          <input
            type="date"
            value={joiningDate}
            onChange={(e) => setJoiningDate(e.target.value)}
            placeholder="Joining Date"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />

          {/* BUTTON   */}
          <button
            className=" text-white bg-blue-500 py-2 rounded disabled:bg-gray-500 disabled:pointer-events-none hover:active:translate-y-[1px]"
            disabled={isSubmitting}
          >
            Submit
          </button>
          {errors && <div className="error text-red-500 py-2">{errors}</div>}
        </form>
      </div>
    </div>
  );
}
