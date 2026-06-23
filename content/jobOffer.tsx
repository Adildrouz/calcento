import type { FaqItem } from "@/lib/jsonld";

export const jobOfferFaqs: FaqItem[] = [
  {
    question: "How do I compare two job offers fairly?",
    answer:
      "Don't compare base salaries alone. Calculate total compensation (base + bonus), then subtract recurring costs like commute and health insurance premiums that differ between offers. The offer with the higher net effective value is the stronger financial choice, before factoring in non-financial considerations like career growth, culture, and flexibility.",
  },
  {
    question: "How is the net effective value calculated?",
    answer:
      "Net effective value = Total comp (base + target bonus) minus annualized commute cost minus annualized health insurance premium. This gives you an apples-to-apples comparison that accounts for the real cost of each role, not just the headline salary.",
  },
  {
    question: "Should I include equity (stock options or RSUs) in the comparison?",
    answer:
      "Equity is valuable but uncertain — its value depends on vesting schedules, stock price, and whether the company is public or private. This calculator focuses on guaranteed cash compensation. Factor equity in separately using your own estimate of expected value, and be conservative with early-stage startup equity.",
  },
  {
    question: "How is PTO valued in the comparison?",
    answer:
      "The calculator values PTO at your daily pay rate (base salary ÷ 260 working days). More PTO days mean more paid time away from work, which has real monetary value. A job offering 25 days vs. 15 days at a $75,000 salary represents about $2,885 in additional paid time.",
  },
  {
    question: "What counts as a commute cost?",
    answer:
      "Include any out-of-pocket monthly transport costs: fuel, transit passes, parking, tolls, or ride-share spending. If one job is fully remote and the other requires commuting, the commute cost difference can easily add up to $2,000–$5,000 per year — a meaningful amount that often goes unaccounted for.",
  },
  {
    question: "Should I negotiate even if one offer is clearly better?",
    answer:
      "Yes. If one offer already wins on net effective value but you prefer the other employer, use the numbers as negotiating leverage. Show the gap and ask the preferred employer to close it. Most hiring managers expect negotiation, and knowing your exact figures makes the conversation much easier.",
  },
];

export function JobOfferContent() {
  return (
    <>
      <h2>How to compare two job offers</h2>
      <p>
        Comparing job offers on salary alone is one of the most common financial
        mistakes job seekers make. A complete comparison looks at total
        compensation, recurring costs that vary between roles, and the value of
        non-salary benefits like paid time off.
      </p>

      <h3>Step 1 — Calculate total compensation</h3>
      <p>
        Start with base salary and add your target bonus. This is your total
        cash compensation. Do not include equity at this stage unless you have
        high confidence in its value.
      </p>
      <ul>
        <li>
          <strong>Total comp</strong> = Base salary + (Base × Bonus %)
        </li>
      </ul>

      <h3>Step 2 — Subtract recurring costs</h3>
      <p>
        Some costs are directly tied to the role and vary between offers. Annual
        commute cost and employee health insurance premiums are the two biggest.
        A fully remote role with a $5,000/year health contribution versus an
        in-office role with $3,000/year in commute and $2,000/year in health
        costs is already $5,000 different before you even look at salary.
      </p>
      <ul>
        <li>
          <strong>Net effective value</strong> = Total comp − Annual commute − Annual health
          premium
        </li>
      </ul>

      <h3>Step 3 — Value the PTO difference</h3>
      <p>
        Paid time off has monetary value because you get paid while not working.
        Calculate the daily pay rate (base ÷ 260 working days) and multiply by
        the number of extra days. Ten additional PTO days at a $80,000 salary is
        worth approximately <strong>$3,077</strong> in paid time.
      </p>

      <h3>Step 4 — Factor in non-financial differences</h3>
      <p>
        Once you know which offer has the higher net cash value, you can make an
        informed choice about whether non-financial factors — career trajectory,
        management quality, team culture, flexibility, and learning opportunities
        — justify choosing the financially weaker offer.
      </p>

      <h3>Using the result to negotiate</h3>
      <p>
        If you prefer a lower-value offer, use the calculator output to show the
        gap precisely. "Offer B is $4,200 better on net cash compensation after
        accounting for commute and benefits. Can you close that gap?" is a much
        stronger negotiating position than "I got a higher offer elsewhere."
      </p>

      <p className="text-sm text-muted">
        All figures are pre-tax estimates for guidance only. Actual take-home
        pay depends on your tax situation, state, and other deductions. Not
        financial or legal advice.
      </p>
    </>
  );
}
