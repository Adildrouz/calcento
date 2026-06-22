import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import OvertimeCalculator from "@/components/OvertimeCalculator";
import { OvertimeContent, overtimeFaqs } from "@/content/overtime";
import { getCalculator } from "@/lib/calculators";
import { SITE_URL } from "@/lib/jsonld";
import { adSlots } from "@/lib/ads";

const meta = getCalculator("overtime-pay-calculator")!;
const description =
  "Free overtime pay calculator. Work out time-and-a-half and double-time pay from an hourly rate or an annual salary, and see your total weekly pay with the overtime broken out.";

export const metadata: Metadata = {
  title: `${meta.title} for Employees & Managers — Time and a Half & Double Time | Calcento`,
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
      tagline="Enter your hourly rate or salary, your regular and overtime hours, and pick time-and-a-half or double time. See your total weekly pay instantly."
      audienceLine="For employees verifying overtime pay · managers scheduling shifts"
      metaDescription={description}
      content={<OvertimeContent />}
      faqs={overtimeFaqs}
      adSlotId={adSlots.overtimePay}
      guideSlug="how-to-calculate-overtime-pay"
      guideTitle="Read: how to calculate overtime pay"
    >
      <OvertimeCalculator />
    </CalculatorPage>
  );
}
