import type { FaqItem } from "@/lib/jsonld";

export const bonusFaqs: FaqItem[] = [
  {
    question: "How is a performance bonus calculated?",
    answer:
      "The most common method is a percentage of your base salary. A 10% bonus on a $75,000 salary equals $7,500. Some employers use flat amounts, profit-sharing pools, or tiered targets instead. Check your offer letter or compensation plan for the exact method.",
  },
  {
    question: "What is a typical bonus percentage?",
    answer:
      "For individual contributors, annual bonuses of 5–15% of base salary are common in the US. Manager and director roles often range from 10–25%, and senior executives from 20–50% or more. Bonuses below 5% are generally considered below market; above 20% for non-executive roles is considered strong.",
  },
  {
    question: "Is a bonus included in total compensation?",
    answer:
      "Yes. Total compensation (TC) includes base salary, target bonus, equity, and benefits. When comparing job offers, use total comp rather than base salary alone — a lower base with a 20% bonus may exceed a higher base with no bonus.",
  },
  {
    question: "Is a bonus taxed differently from regular salary?",
    answer:
      "Bonuses are taxed as ordinary income, but employers often withhold at a flat 22% supplemental rate for federal taxes (or up to 37% for bonuses over $1 million). This can make it look like bonuses are taxed more heavily, but when you file your tax return, any over-withholding is refunded. All figures in this calculator are pre-tax gross amounts.",
  },
  {
    question: "What is the difference between a target bonus and an actual bonus?",
    answer:
      "A target bonus is what you would receive if you met 100% of your performance goals. The actual payout may be higher or lower depending on individual and company performance. Many plans pay out anywhere from 0% to 200% of target. This calculator uses your target percentage as the input.",
  },
  {
    question: "How do I calculate my total annual compensation including bonus?",
    answer:
      "Add your base salary to your expected bonus amount. If your base is $75,000 and your target bonus is 10%, your total comp is $75,000 + $7,500 = $82,500. The calculator shows this automatically in the readout.",
  },
];

export function BonusContent() {
  return (
    <>
      <h2>How to calculate a performance bonus</h2>
      <p>
        A bonus calculator helps you see exactly what a bonus offer means in
        dollar terms, how it compares to your salary as a percentage, and what
        your total annual compensation looks like.
      </p>

      <h3>Percentage-based bonus</h3>
      <p>The most common calculation:</p>
      <ul>
        <li>
          <strong>Bonus amount</strong> = Base salary × (Bonus % ÷ 100)
        </li>
        <li>
          <strong>Total comp</strong> = Base salary + Bonus amount
        </li>
      </ul>
      <p>
        A $75,000 salary with a 10% target bonus gives a bonus of $7,500 and a
        total annual compensation of <strong>$82,500</strong>.
      </p>

      <h3>Flat bonus</h3>
      <p>
        If your employer offers a fixed dollar amount rather than a percentage,
        switch to the "Flat amount" tab. The calculator will work backwards to
        show you what percentage that represents of your base salary, which is
        useful for benchmarking against market data.
      </p>

      <h3>What counts as a good bonus?</h3>
      <p>
        Context matters — industry, seniority, and company size all affect bonus
        norms. As a rough guide for individual contributors in the US:
      </p>
      <ul>
        <li>
          <strong>Below 5%</strong> — below average
        </li>
        <li>
          <strong>5–10%</strong> — average for most professional roles
        </li>
        <li>
          <strong>10–20%</strong> — strong, typical for senior individual
          contributors and some management
        </li>
        <li>
          <strong>20%+</strong> — exceptional or executive-level
        </li>
      </ul>
      <p>
        The calculator shows a tier indicator based on your bonus percentage so
        you can benchmark instantly.
      </p>

      <h3>Target bonus vs actual payout</h3>
      <p>
        Most variable pay plans are based on a target that reflects 100% plan
        attainment. Actual payouts depend on individual and company performance
        and can range from zero to 200% of target. This calculator uses the
        target figure — treat it as your expected outcome, not a guarantee.
      </p>

      <h3>Bonus and total compensation</h3>
      <p>
        Always evaluate job offers on total compensation, not base salary alone.
        A $70,000 base with a 20% bonus ($14,000) offers $84,000 in target cash
        compensation — more than an $80,000 base with no bonus. The breakdown
        strip below the calculator shows how the bonus spreads across quarters,
        months, and pay periods if distributed throughout the year.
      </p>

      <p className="text-sm text-muted">
        All figures are pre-tax gross estimates. Actual net pay after income tax
        and other deductions will be lower. Not financial or tax advice.
      </p>
    </>
  );
}
