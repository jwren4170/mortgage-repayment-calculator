import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FormControl, FormLabel } from "./ui/form";

const RadioButtons = () => {
  return (
    <FormControl>
      <RadioGroup className="items-center w-full md:flex-col">
        <div className="flex items-center px-5 py-2 space-x-2 h-9 rounded-sm outline-slate-700 outline-1 outline">
          <FormControl>
            <RadioGroupItem
              value="Repayment"
              id="repayment"
              aria-label="Repayment"
            />
          </FormControl>
          <Label htmlFor="general-enquiry">Repayment</Label>
        </div>

        <div className="flex items-center px-5 py-2 space-x-2 h-9 rounded-sm outline-slate-700 outline-1 outline">
          <FormControl>
            <RadioGroupItem
              value="Interest Only"
              id="interest-only"
              aria-label="Interest Only"
            />
          </FormControl>
          <Label htmlFor="support-request">Interest Only</Label>
        </div>
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtons;
