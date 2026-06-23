import type { FaqItem } from "@/lib/jsonld";

export const salaryToHourlyFaqs: FaqItem[] = [
  {
    question: "How do I convert an annual salary to an hourly rate?",
    answer:
      "Divide your annual salary by the total hours you work per year. For a standard 40-hour week across 52 weeks, that is 2,080 hours. A $65,000 salary ÷ 2,080 = $31.25 per hour. If you work fewer weeks (e.g., you get 2 weeks unpaid leave), use 50 weeks × 40 hours = 2,000 hours instead.",
  },
  {
    question: "How many hours are in a work year?",
    answer:
      "The standard is 2,080 hours — 40 hours per week × 52 weeks. If you receive paid time off, those hours are still counted because you're still paid for them. If you take unpaid leave or work part-time, adjust the weeks-per-year field to match your situation.",
  },
  {
    question: "How do I convert an hourly rate back to an annual salary?",
    answer:
      "Multiply your hourly rate by the number of hours you work per year. At 40 hours per week for 52 weeks: $31.25 × 2,080 = $65,000. Use the 'Hourly → Salary' tab on this calculator to do it instantly.",
  },
  {
    question: "How is the daily rate calculated?",
    answer:
      "The daily rate assumes a 5-day workweek. It is calculated as: hourly rate × (hours per week ÷ 5). For $31.25/hr at 40 hours per week, that is $31.25 × 8 = $250 per day.",
  },
  {
    question: "What if I work part-time hours?",
    answer:
      "Change the 'Hours per week' field to your actual hours — for example, 20 for half-time. The calculator will adjust the hourly rate and all the pay-period breakdowns automatically.",
  },
  {
    question: "Does this calculator include taxes?",
    answer:
      "No. All figures are pre-tax gross amounts. Your actual take-home pay depends on your federal and state tax bracket, Social Security, Medicare, and any other deductions. Use these numbers as a starting point and confirm with a payroll tool or tax professional.",
  },
];

export function SalaryToHourlyContent() {
  return (
    <>
      <h2>How to convert a salary to an hourly rate</h2>
      <p>
        Whether you're comparing a job offer, quoting a freelance project, or
        checking if a raise is meaningful, converting a salary to an hourly rate
        gives you an instant, comparable number.
      </p>
      <p>The formula is straightforward:</p>
      <ul>
        <li>
          <strong>Hourly rate</strong> = Annual salary ÷ (hours per week × weeks
          per year)
        </li>
      </ul>
      <p>
        At a standard 40-hour week for all 52 weeks, you work{" "}
        <strong>2,080 hours</strong> per year. That is the number most payroll
        teams and job postings use as the standard work year.
      </p>

      <h3>Worked example</h3>
      <p>
        Suppose you earn <code>$65,000</code> a year. Divide by 2,080 and you
        get <code>$31.25 per hour</code>. On a daily basis (8-hour day) that
        is <code>$250</code>. Over a biweekly pay period of 80 hours, your gross
        pay is <code>$2,500</code>.
      </p>

      <h3>When the standard 2,080 hours doesn't apply</h3>
      <p>
        If you work fewer than 52 paid weeks — for example you take 2 weeks of
        unpaid leave, or you're on a 10-month school calendar — adjust the
        "Weeks worked per year" field. The calculator recalculates everything
        automatically so your hourly figure reflects real working time, not a
        nominal average.
      </p>

      <h3>Converting hourly back to salary</h3>
      <p>
        The reverse calculation is equally useful when evaluating a contract or
        freelance rate. Multiply the hourly rate by your annual hours. A
        contractor billing <code>$50/hr</code> for 2,000 hours earns{" "}
        <code>$100,000</code> — before self-employment taxes and benefits costs,
        which salaried employees do not pay directly.
      </p>

      <h3>Why this matters for job comparisons</h3>
      <p>
        Job offers are sometimes quoted as annual salaries, sometimes as hourly
        rates. Converting both to the same unit makes the comparison honest. A
        $45/hr contract might sound impressive, but without paid leave or
        benefits, the effective annual value is often lower than a $85,000
        salaried role with health insurance and PTO.
      </p>

      <p className="text-sm text-muted">
        All figures are pre-tax gross estimates for general guidance only — not
        financial, legal, or tax advice.
      </p>
    </>
  );
}
