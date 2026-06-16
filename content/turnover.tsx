import type { FaqItem } from "@/lib/jsonld";

export const turnoverFaqs: FaqItem[] = [
  {
    question: "How do you calculate employee turnover rate?",
    answer:
      "Divide the number of employees who left during a period by the average headcount for that period, then multiply by 100. Average headcount is the start count plus the end count, divided by two. For example, 14 leavers against an average of 125 employees is 14 ÷ 125 = 11.2% turnover.",
  },
  {
    question: "What is the difference between turnover and retention?",
    answer:
      "Turnover measures the share of people who left; retention measures the share who stayed. They are related but not exact opposites because they can use different denominators. Retention here is the employees still present at the end (start − leavers) divided by the starting headcount.",
  },
  {
    question: "What is a good employee turnover rate?",
    answer:
      "It depends heavily on the industry. An annual turnover rate around 10% is often considered healthy for many office roles, while retail, hospitality, and call centers routinely run much higher. Compare your number against your own sector rather than a single benchmark.",
  },
  {
    question: "How do I annualize a monthly or quarterly turnover rate?",
    answer:
      "Multiply a monthly rate by 12, or a quarterly rate by 4, to estimate the equivalent annual figure. This makes short-period rates comparable to a yearly benchmark, though it assumes the same pace of departures continues across the year.",
  },
  {
    question: "Should I count every type of departure?",
    answer:
      "That is a policy choice. Total turnover counts everyone who left; voluntary turnover counts only resignations. Many teams track both, since voluntary turnover is the figure they can most influence through pay, management, and culture.",
  },
];

export function TurnoverContent() {
  return (
    <>
      <h2>How to calculate employee turnover rate</h2>
      <p>
        Turnover rate is the share of your workforce that leaves over a given
        period. It is one of the clearest signals of how well an organization
        keeps its people, and it feeds directly into hiring costs and team
        stability.
      </p>
      <p>The formula has three steps:</p>
      <ul>
        <li>
          <strong>Average headcount</strong> = (start of period + end of period)
          ÷ 2
        </li>
        <li>
          <strong>Turnover rate</strong> = (employees who left ÷ average
          headcount) × 100
        </li>
        <li>
          <strong>Retention rate</strong> = ((start − left) ÷ start) × 100
        </li>
      </ul>

      <h3>A worked example</h3>
      <p>
        Imagine a team that began the year with <code>120</code> people, ended
        with <code>130</code>, and saw <code>14</code> employees leave along the
        way. Average headcount is{" "}
        <code>(120 + 130) ÷ 2 = 125</code>. Turnover is{" "}
        <code>14 ÷ 125 = 0.112</code>, or <code>11.2%</code>. Retention is{" "}
        <code>(120 − 14) ÷ 120 = 88.3%</code>.
      </p>

      <h3>Why average headcount matters</h3>
      <p>
        Using the average of the start and end counts — rather than just one
        snapshot — keeps the rate fair when a team is growing or shrinking
        quickly. A company that doubles in size would otherwise understate or
        overstate its turnover depending on which number it picked.
      </p>

      <h3>Annualizing short periods</h3>
      <p>
        If you measure over a month or a quarter, multiply by 12 or 4 to estimate
        the annual rate. This makes a single month comparable to a yearly
        benchmark, but remember it assumes the same departure pace holds for the
        rest of the year — useful for spotting trends, not a guarantee.
      </p>

      <p className="text-sm text-muted">
        Calcento is for general guidance only. Turnover benchmarks vary widely by
        industry and region.
      </p>
    </>
  );
}
