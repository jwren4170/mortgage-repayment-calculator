import MortgageForm from "@/components/MortgageForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="desktop:p-32 mobile:h-screen mobile:grid mobile:grid-cols-1 desktop:flex desktop:flex-row">
      <Card className="mx-auto w-1/2 rounded-r-none mobile:w-full desktop:w-1/2">
        <CardHeader className="flex flex-row justify-between">
          <h1 className="text-lg font-custom-700 text-slate-900 dark:text-slate-100">
            Mortgage Calculator{" "}
          </h1>
          <p className="text-xs underline text-slate-400 dark:text-slate-100">
            Clear All
          </p>
        </CardHeader>
        <CardContent>
          <MortgageForm />
        </CardContent>
      </Card>
      <Card className="mx-auto w-1/2 rounded-l-none mobile:w-full desktop:w-1/2">
        <CardHeader className="flex flex-row justify-between">
          <h1 className="text-lg font-custom-700 text-slate-900 dark:text-slate-100">
            Mortgage Calculator{" "}
          </h1>
          <p className="text-xs underline text-slate-400 dark:text-slate-100">
            Clear All
          </p>
        </CardHeader>
        <CardContent>
          <MortgageForm />
        </CardContent>
      </Card>
    </main>
  );
}
