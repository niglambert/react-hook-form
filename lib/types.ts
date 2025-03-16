import { z } from "zod";

export const userSchema = z
  .object({
    username: z.string().min(3, "Username min length 3"),
    email: z.string().min(3, "Email min length 3"),
    password: z.string().min(3, "Password min length 3"),
    confirmPassword: z.string().min(3, "Confirm Password min length 3"),
    description: z.string().min(3, "Description min length 3"),

    // SINGLE SELECT (Dropdown)
    timezone: z.string().min(1, "Timezone is required"),

    // RADIO BUTTON (Single selection)
    theme: z.enum(["Light", "Dark", "System"], {
      message: "Theme is required",
    }),

    // CHECKBOX GROUP (Multiple selections)
    roles: z.array(z.string()).min(1, "At least one role is required"),

    joinDate: z.string().refine(
      (date) => !isNaN(Date.parse(date)), // Ensures it's a valid date string
      { message: "Join Date must be a valid date" },
    ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type TUserSchema = z.infer<typeof userSchema>;
