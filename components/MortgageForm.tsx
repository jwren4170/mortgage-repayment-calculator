"use client";

import { useForm } from "react-hook-form";
import { mortgageFormSchema } from "@/zod-schema";
import { z } from "zod";
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
import RadioButtons from "@/components/RadioButtons";
import {
  PiCalculatorFill,
  PiCurrencyDollarBold,
  PiPercentBold,
} from "react-icons/pi";

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
          <FormItem className="relative">
            <FormLabel className="text-xs rounded-sm border-slate-700 text-slate-500">
              Mortgage Amount
            </FormLabel>
            <FormControl>
              <Input
                className="pl-10 rounded-sm mortgage-amount border-slate-700"
                type="text"
                {...field}
              />
            </FormControl>
            <PiCurrencyDollarBold className="absolute left-2 top-9 text-slate-700" />
          </FormItem>
        )}
      />

      <div className="flex gap-2 mt-4">
        <FormField
          control={mortgageForm.control}
          name="term"
          render={({ field }) => (
            <FormItem className="relative w-1/2">
              <FormLabel className="text-xs text-slate-500">
                Mortgage Term
              </FormLabel>
              <FormControl>
                <Input
                  className="rounded-sm border-slate-700"
                  type="text"
                  {...field}
                />
              </FormControl>
              <span className="absolute right-2 top-[34px] text-xs text-slate-700">
                yrs
              </span>
            </FormItem>
          )}
        />

        <FormField
          control={mortgageForm.control}
          name="rate"
          render={({ field }) => (
            <FormItem className="relative w-1/2">
              <FormLabel className="text-xs text-slate-500 font-custom-700">
                Interest Rate
              </FormLabel>
              <FormControl>
                <Input
                  className="rounded-sm border-slate-700"
                  type="text"
                  {...field}
                />
              </FormControl>
              <PiPercentBold className="absolute right-2 top-9 text-slate-700" />
            </FormItem>
          )}
        />
      </div>

      {/* Radio Group */}
      <FormField
        control={mortgageForm.control}
        name="type"
        render={({ field }) => (
          <FormItem className="my-4">
            <FormLabel className="text-xs text-slate-500 font-custom-700">
              Mortgage Type
            </FormLabel>
            <RadioButtons />
          </FormItem>
        )}
      />

      <Button
        type="submit"
        className="mt-4 w-full text-lg rounded-full md:text-xs lg:w-3/4 bg-lime text-slate-900 font:custom-700 hover:bg-lime/70"
      >
        <PiCalculatorFill />
        &nbsp; Calculate Repayments
      </Button>
    </Form>
  );
};

export default MortgageForm;
