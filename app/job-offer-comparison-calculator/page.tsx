import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import JobOfferCalculator from "@/components/JobOfferCalculator";
import { JobOfferContent, jobOfferFaqs } from "@/content/jobOffer";
import { getCalculator } from "@/lib/calculators";
import { SITE_URL } from "@/lib/jsonld";
import { adSlots } from "@/lib/ads";

const meta = getCalculator("job-offer-comparison-calculator")!;
const description =
  "Free job offer comparison calculator. Compare two job offers side by side on salary, bonus, PTO days, commute cost, and health insurance premiums to find the offer with the higher net value.";

export const metadata: Metadata = {
  title: `${meta.title} — Compare Salary, Bonus, PTO & Benefits | Calcento`,
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
      tagline="Enter the salary, bonus, PTO days, commute cost, and health premium for each offer. The calculator shows total compensation, net effective value, and which offer is worth more."
      audienceLine="For job seekers deciding between offers · anyone evaluating a salary negotiation"
      metaDescription={description}
      content={<JobOfferContent />}
      faqs={jobOfferFaqs}
      adSlotId={adSlots.jobOffer}
    >
      <JobOfferCalculator />
    </CalculatorPage>
  );
}
