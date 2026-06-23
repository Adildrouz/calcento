import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import VacationDaysCalculator from "@/components/VacationDaysCalculator";
import { VacationDaysContent, vacationDaysFaqs } from "@/content/vacationDays";
import { getCalculator } from "@/lib/calculators";
import { SITE_URL } from "@/lib/jsonld";
import { adSlots } from "@/lib/ads";

const meta = getCalculator("vacation-days-calculator")!;
const description =
  "Free vacation days calculator. Find out how many vacation days you have left, or calculate a pro-rata entitlement for a new hire joining mid-year. Works for US PTO and UK annual leave.";

export const metadata: Metadata = {
  title: `${meta.title} for Employees & HR — Days Remaining & Pro-Rata Leave | Calcento`,
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
      tagline="Enter your annual entitlement, days taken, and any booked leave to see exactly how many vacation days you have left — or calculate a pro-rata balance for a mid-year starter."
      audienceLine="For employees tracking leave · HR teams calculating new-hire entitlements"
      metaDescription={description}
      content={<VacationDaysContent />}
      faqs={vacationDaysFaqs}
      adSlotId={adSlots.vacationDays}
    >
      <VacationDaysCalculator />
    </CalculatorPage>
  );
}
