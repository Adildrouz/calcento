import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import SalaryToHourlyCalculator from "@/components/SalaryToHourlyCalculator";
import { SalaryToHourlyContent, salaryToHourlyFaqs } from "@/content/salaryToHourly";
import { getCalculator } from "@/lib/calculators";
import { SITE_URL } from "@/lib/jsonld";
import { adSlots } from "@/lib/ads";

const meta = getCalculator("salary-to-hourly-calculator")!;
const description =
  "Free salary to hourly calculator. Convert an annual salary to an hourly rate — or an hourly rate back to an annual salary. See daily, weekly, biweekly, and monthly pay breakdowns instantly.";

export const metadata: Metadata = {
  title: `${meta.title} for Employees & Job Seekers — Annual Salary to Hourly Rate | Calcento`,
  description,
  alternates: { canonical: `${SITE_URL}/${meta.slug}` },
  openGraph: {
    title: `${meta.title} | Calcento`,
    description,
    url: `${SITE_URL}/${meta.slug}`,
    siteName: "Calcento",
    type: "website",
  },
};

export default function Page() {
  return (
    <CalculatorPage
      slug={meta.slug}
      title={meta.title}
      tagline="Enter your annual salary and weekly hours to see your hourly rate — or flip it and convert an hourly rate to an annual salary. Full pay breakdown included."
      audienceLine="For employees comparing offers · freelancers quoting rates · anyone evaluating pay"
      metaDescription={description}
      content={<SalaryToHourlyContent />}
      faqs={salaryToHourlyFaqs}
      adSlotId={adSlots.salaryToHourly}
    >
      <SalaryToHourlyCalculator />
    </CalculatorPage>
  );
}
