import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import TurnoverCalculator from "@/components/TurnoverCalculator";
import { TurnoverContent, turnoverFaqs } from "@/content/turnover";
import { getCalculator } from "@/lib/calculators";
import { SITE_URL } from "@/lib/jsonld";

const meta = getCalculator("employee-turnover-calculator")!;
const description =
  "Free employee turnover rate calculator. Enter your starting and ending headcount and the number of leavers to get turnover rate, retention rate, and an annualized figure.";

export const metadata: Metadata = {
  title: `${meta.title} for HR Teams & Managers — Turnover & Retention Rate | Calcento`,
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
      tagline="Enter your headcount at the start and end of the period and how many people left. See turnover rate, retention rate, and the annualized figure instantly."
      audienceLine="For HR teams tracking attrition · managers measuring team stability"
      metaDescription={description}
      content={<TurnoverContent />}
      faqs={turnoverFaqs}
      adSlotId={undefined}
      guideSlug="how-to-calculate-employee-turnover-rate"
      guideTitle="Read: how to calculate turnover rate"
    >
      <TurnoverCalculator />
    </CalculatorPage>
  );
}
