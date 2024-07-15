"use client";

import { useForm } from "react-hook-form";
import { mortgageFormSchema } from "@/zod-schema";
import { nullable, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormField,
} from "@/components/ui/form";

const MortgageForm = () => {
  const mortgageForm = useForm<z.infer<typeof mortgageFormSchema>>({
    resolver: zodResolver(mortgageFormSchema),
    defaultValues: {
      amount: "",
      term: "",
      rate: "",
      type: "repayment",
    },
  });
  return (
    <Form {...mortgageForm}>
      <FormField
        control={mortgageForm.control}
        name="amount"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xs text-slate-500 dark:text-slate-100">
              Mortgage Amount
            </FormLabel>
            <FormControl>
              <Input type="text" placeholder="Amount" {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      <div className="gap-2 desktop:grid desktop:grid-cols-2 mobile:grid mobile:grid-cols-1">
        <FormField
          control={mortgageForm.control}
          name="term"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs text-slate-500 dark:text-slate-100">
                Mortgage Term
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder="Term" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={mortgageForm.control}
          name="rate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs text-slate-500 dark:text-slate-100 font-custom-700">
                Interest Rate
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder="Rate" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </Form>
  );
};

export default MortgageForm;
