import { Card, CardHeader } from "./ui/card";
import IllistrationEmpty from "./ui/illistration-empty";

const MortgageResults = () => {
  return (
    <div className="grid place-items-center mt-12">
      <div className="">
        <IllistrationEmpty />
      </div>
      <div className="text-white flex flex-col items-center space-y-4">
        <h2 className="text-lg text-white">Results shown here</h2>
        <p className="text-xs text-slate-500 text-center">
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>
      </div>
    </div>
  );
};

export default MortgageResults;
