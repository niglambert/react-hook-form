import { z } from "zod";

export const userSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  description: z.string(),
  timezone: z.string(),
  theme: z.string(),
  roles: z.string(),
  joinDate: z.string(),
});
