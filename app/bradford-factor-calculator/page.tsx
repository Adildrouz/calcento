import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import BradfordFactorCalculator from "@/components/BradfordFactorCalculator";
import { BradfordFactorContent, bradfordFactorFaqs } from "@/content/bradfordFactor";
import { getCalculator } from "@/lib/calculators";
import { SITE_URL } from "@/lib/jsonld";
import { adSlots } from "@/lib/ads";

const meta = getCalculator("bradford-factor-calculator")!;
const description =
  "Free Bradford Factor calculator. Enter the number of absence spells and total days absent to get a Bradford Score, with interpretation bands and guidance on what the score means for absence management.";

export const metadata: Metadata = {
  title: `${meta.title} for HR Teams & Managers — Absence Score & Bands | Calcento`,
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
      tagline="Enter the number of absence spells and total days absent over a 52-week period. Get an instant Bradford Score with score-band interpretation and guidance on next steps."
      audienceLine="For HR teams managing absence · line managers tracking attendance patterns"
      metaDescription={description}
      content={<BradfordFactorContent />}
      faqs={bradfordFactorFaqs}
      adSlotId={adSlots.bradfordFactor}
    >
      <BradfordFactorCalculator />
    </CalculatorPage>
  );
}
