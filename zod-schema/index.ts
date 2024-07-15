import { z } from "zod";

export const mortgageFormSchema = z.object({
  amount: z.string({
    required_error: "Amount is required",
    invalid_type_error: "Amount must be a number",
  }),
  term: z.string({
    required_error: "Amount is required",
    invalid_type_error: "Amount must be a number",
  }),
  rate: z.string({
    required_error: "Amount is required",
    invalid_type_error: "Amount must be a number",
  }),
  type: z.enum(["repayment", "interest"]),
});
