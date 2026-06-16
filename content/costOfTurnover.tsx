import type { FaqItem } from "@/lib/jsonld";

export const costOfTurnoverFaqs: FaqItem[] = [
  {
    question: "How do you calculate the cost of employee turnover?",
    answer:
      "Multiply the average salary of the roles you lost by an estimated replacement cost (expressed as a percentage of salary), then multiply by the number of people who left. For example, 10 leavers earning $55,000 on average at a 33% replacement cost is 55,000 × 0.33 × 10 = $181,500.",
  },
  {
    question: "What percentage of salary does it cost to replace an employee?",
    answer:
      "Published estimates vary widely — commonly from around 30% of annual salary for entry-level roles up to 150–200% or more for senior, technical, or hard-to-fill positions. The right figure depends on recruiting fees, training time, and how long the role sits vacant.",
  },
  {
    question: "What costs are included in employee turnover?",
    answer:
      "Direct costs like advertising, recruiter fees, and onboarding, plus indirect costs that are harder to see: lost productivity while the seat is empty, the ramp-up time before a new hire is fully effective, and the loss of institutional knowledge and team morale.",
  },
  {
    question: "Is turnover cost a pre-tax or after-tax figure?",
    answer:
      "This tool estimates pre-tax business cost — the gross outlay and lost value associated with replacing staff. It is a planning estimate, not an accounting figure, so treat it as a guide rather than a precise ledger entry.",
  },
  {
    question: "How can I reduce the cost of turnover?",
    answer:
      "Because the cost scales with both how many people leave and how expensive they are to replace, the biggest levers are retention of senior staff and faster, cheaper hiring. Tracking your turnover rate alongside this cost helps you see where to focus.",
  },
];

export function CostOfTurnoverContent() {
  return (
    <>
      <h2>How to calculate the cost of employee turnover</h2>
      <p>
        Turnover is not just an HR statistic — it is a real expense. Every time
        someone leaves, the business pays to advertise the role, screen and
        interview candidates, onboard a replacement, and absorb the lost
        productivity while the seat sits empty. This calculator turns those costs
        into a single, comparable number.
      </p>
      <p>The estimate rests on two lines of math:</p>
      <ul>
        <li>
          <strong>Cost per departure</strong> = average salary × (replacement cost
          % ÷ 100)
        </li>
        <li>
          <strong>Total turnover cost</strong> = number of leavers × cost per
          departure
        </li>
      </ul>

      <h3>A worked example</h3>
      <p>
        Say <code>10</code> people left over the year, earning an average of{" "}
        <code>$55,000</code>, and you use a mid-range replacement cost of{" "}
        <code>33%</code>. Each departure costs about{" "}
        <code>55,000 × 0.33 = $18,150</code>, so ten of them add up to{" "}
        <code>$181,500</code> — roughly <code>$15,125</code> a month. Seeing the
        monthly figure often makes the case for investing in retention.
      </p>

      <h3>Choosing a replacement percentage</h3>
      <p>
        The replacement percentage is where most of the uncertainty lives.
        Entry-level roles often land near 30% of salary, while senior, technical,
        or specialist positions can reach 150–200% once you count long vacancies
        and ramp-up time. If you are unsure, run the calculator twice — once with a
        low estimate and once with a high one — to see the realistic range.
      </p>

      <h3>Pair it with your turnover rate</h3>
      <p>
        Cost and rate work best together. Your turnover rate tells you how many
        people are leaving; this calculator tells you what that movement is worth
        in dollars. Lowering either one — fewer departures, or cheaper and faster
        hiring — brings the total down.
      </p>

      <p className="text-sm text-muted">
        Calcento is for general guidance only and does not provide financial
        advice. Figures are pre-tax estimates.
      </p>
    </>
  );
}
