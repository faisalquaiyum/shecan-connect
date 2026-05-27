import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  email: z.string().trim().email("Enter a valid email"),
  message: z.string().trim().min(2, "Message is required"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
