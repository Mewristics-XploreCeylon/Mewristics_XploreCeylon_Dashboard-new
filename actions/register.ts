"use server";

import * as z from "zod";
import { SignUpSchema } from "@/schemas";

export const signup = async (values: z.infer<typeof SignUpSchema>) => {

  const validateFields = SignUpSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid Fields!" };
  }

  return { success: "Account Created Successfully!" };
};
