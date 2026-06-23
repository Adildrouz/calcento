import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import WorkingHoursCalculator from "@/components/WorkingHoursCalculator";
import { WorkingHoursContent, workingHoursFaqs } from "@/content/workingHours";
import { getCalculator } from "@/lib/calculators";
import { SITE_URL } from "@/lib/jsonld";
import { adSlots } from "@/lib/ads";

const meta = getCalculator("working-hours-calculator")!;
const description =
  "Free working hours calculator. Enter your start time, end time, and break for each day of the week to get your total hours worked — with overtime highlighted and optional gross pay estimate.";

export const metadata: Metadata = {
  title: `${meta.title} — Weekly Timesheet Calculator with Overtime | Calcento`,
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
      tagline="Toggle each day, enter start and end times plus break minutes, and see your total weekly hours instantly — with overtime flagged and an optional pay estimate."
      audienceLine="For employees filling timesheets · managers verifying hours · anyone tracking a work week"
      metaDescription={description}
      content={<WorkingHoursContent />}
      faqs={workingHoursFaqs}
      adSlotId={adSlots.workingHours}
    >
      <WorkingHoursCalculator />
    </CalculatorPage>
  );
}
