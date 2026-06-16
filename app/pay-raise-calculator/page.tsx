import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import PayRaiseCalculator from "@/components/PayRaiseCalculator";
import { PayRaiseContent, payRaiseFaqs } from "@/content/payRaise";
import { getCalculator } from "@/lib/calculators";
import { SITE_URL } from "@/lib/jsonld";

const meta = getCalculator("pay-raise-calculator")!;
const description =
  "Free pay raise calculator. Work out a raise by percentage or dollar amount, or compare two salaries to find the percentage increase. See the change per year, month, and paycheck.";

export const metadata: Metadata = {
  title: `${meta.title} — Percent or Amount | Calcento`,
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
      tagline="Enter your salary and a raise — by percent or dollar amount — and see your new pay instantly. Or compare two salaries to find the percentage increase."
      metaDescription={description}
      content={<PayRaiseContent />}
      faqs={payRaiseFaqs}
      adSlotId={undefined}
      guideSlug="how-to-calculate-salary-increase-percentage"
      guideTitle="Read: how to calculate a salary increase percentage"
    >
      <PayRaiseCalculator />
    </CalculatorPage>
  );
}
