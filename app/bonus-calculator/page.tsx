import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import BonusCalculator from "@/components/BonusCalculator";
import { BonusContent, bonusFaqs } from "@/content/bonus";
import { getCalculator } from "@/lib/calculators";
import { SITE_URL } from "@/lib/jsonld";
import { adSlots } from "@/lib/ads";

const meta = getCalculator("bonus-calculator")!;
const description =
  "Free bonus calculator. Calculate your performance bonus as a percentage of salary or a flat amount, see your total annual compensation, and benchmark your bonus against typical ranges.";

export const metadata: Metadata = {
  title: `${meta.title} for Employees & Managers — Performance Bonus & Total Compensation | Calcento`,
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
      tagline="Enter your base salary and bonus percentage — or a flat amount — to see your gross bonus, total annual compensation, and how your bonus compares to typical market ranges."
      audienceLine="For employees evaluating offers · managers budgeting bonus pools · anyone benchmarking pay"
      metaDescription={description}
      content={<BonusContent />}
      faqs={bonusFaqs}
      adSlotId={adSlots.bonus}
    >
      <BonusCalculator />
    </CalculatorPage>
  );
}
