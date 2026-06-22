import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import CostOfTurnoverCalculator from "@/components/CostOfTurnoverCalculator";
import { CostOfTurnoverContent, costOfTurnoverFaqs } from "@/content/costOfTurnover";
import { getCalculator } from "@/lib/calculators";
import { SITE_URL } from "@/lib/jsonld";
import { adSlots } from "@/lib/ads";

const meta = getCalculator("cost-of-turnover-calculator")!;
const description =
  "Free cost of employee turnover calculator. Estimate what staff turnover costs your business from the number of leavers, average salary, and a replacement-cost percentage.";

export const metadata: Metadata = {
  title: `${meta.title} for HR & Small Business — What Staff Turnover Costs | Calcento`,
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
      tagline="Enter how many people left, their average salary, and an estimated replacement cost to see what turnover is costing your business."
      audienceLine="For HR & finance teams · managers building the case for retention"
      metaDescription={description}
      content={<CostOfTurnoverContent />}
      faqs={costOfTurnoverFaqs}
      adSlotId={adSlots.costOfTurnover}
      guideSlug="how-to-calculate-cost-of-employee-turnover"
      guideTitle="Read: how to calculate the cost of turnover"
    >
      <CostOfTurnoverCalculator />
    </CalculatorPage>
  );
}
