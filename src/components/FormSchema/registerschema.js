
import z from "zod";

export const registerschema = z.object({
  name: z.string().min(3, "Name must contain at least 3 letters"),
  email: z.string().email("Enter valid email"),
  password: z.string().min(8, "Password must contain at least 8 characters")
});
