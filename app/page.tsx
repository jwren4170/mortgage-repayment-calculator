import MortgageForm from "@/components/MortgageForm";
import MortgageResults from "@/components/MortgageResults";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="md:grid md:min-h-[100vh] md:place-items-center">
      <main className="flex md:flex-row md:w-3/4 flex-col mx-auto shadow-md bg-white">
        <Card className="mx-auto md:w-1/2 rounded-r-none border-r-0 w-[100%]">
          <CardHeader className="flex flex-row justify-between">
            <h2 className="text-lg font-custom-700 text-slate-900 dark:text-slate-100">
              Mortgage Calculator{" "}
            </h2>
            <p className="text-xs underline text-slate-400 dark:text-slate-100">
              Clear All
            </p>
          </CardHeader>
          <CardContent>
            {/* MortgageForm component */}
            <MortgageForm />
          </CardContent>
        </Card>
        <Card className="mx-auto md:w-1/2 rounded-l-none border-l-0 w-[100%] bg-slate-900 md:rounded-bl-[5rem]">
          <CardHeader className="flex flex-row justify-between"></CardHeader>
          <CardContent>
            {/* mortgageForm component */}
            <MortgageResults />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
