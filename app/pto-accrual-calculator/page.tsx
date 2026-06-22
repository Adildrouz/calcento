import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import PtoCalculator from "@/components/PtoCalculator";
import { PtoContent, ptoFaqs } from "@/content/pto";
import { getCalculator } from "@/lib/calculators";
import { SITE_URL } from "@/lib/jsonld";
import { adSlots } from "@/lib/ads";

const meta = getCalculator("pto-accrual-calculator")!;
const description =
  "Free PTO accrual calculator. Turn an annual paid-time-off entitlement into an accrual rate per hour worked, see PTO earned per week, pay period, and month, or how much you have accrued so far.";

export const metadata: Metadata = {
  title: `${meta.title} for Employees & HR — Accrual Rate & Balance | Calcento`,
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
      tagline="Turn your annual PTO entitlement into an accrual rate, or work out how much paid time off you have earned from the hours you have worked so far."
      audienceLine="For employees checking their balance · HR teams explaining PTO policies"
      metaDescription={description}
      content={<PtoContent />}
      faqs={ptoFaqs}
      adSlotId={adSlots.ptoAccrual}
      guideSlug="how-to-calculate-pto-accrual"
      guideTitle="Read: how to calculate PTO accrual"
    >
      <PtoCalculator />
    </CalculatorPage>
  );
}
