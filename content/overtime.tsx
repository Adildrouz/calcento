import type { FaqItem } from "@/lib/jsonld";

export const overtimeFaqs: FaqItem[] = [
  {
    question: "How is overtime pay calculated?",
    answer:
      "Multiply your regular hourly rate by the overtime multiplier (1.5 for time-and-a-half, 2 for double time) to get your overtime rate, then multiply that by the number of overtime hours. Add it to your regular pay for the week's total. For example, $25/hr × 1.5 = $37.50/hr; five overtime hours pay $187.50 on top of regular wages.",
  },
  {
    question: "What is time-and-a-half?",
    answer:
      "Time-and-a-half means each overtime hour is paid at 1.5 times your normal rate. In the US, federal law (the FLSA) requires non-exempt employees to be paid at least time-and-a-half for hours worked beyond 40 in a workweek.",
  },
  {
    question: "How do I find my hourly rate from an annual salary?",
    answer:
      "Divide your annual salary by 2,080 — the number of work hours in a standard year (40 hours × 52 weeks). A $52,000 salary works out to $25.00 per hour. The calculator does this automatically in the salary tab.",
  },
  {
    question: "Is overtime taxed differently?",
    answer:
      "No. Overtime pay is taxed at the same rates as the rest of your income. It can feel like it is taxed more because a single large paycheck may have more withheld, but the overall rate is the same. All figures here are pre-tax.",
  },
  {
    question: "When does double time apply?",
    answer:
      "Double time (2× your rate) is not required by US federal law but may apply under state rules, union contracts, or company policy — for example California requires it after 12 hours in a day. Use the 2× toggle if your situation calls for it.",
  },
];

export function OvertimeContent() {
  return (
    <>
      <h2>How to calculate overtime pay</h2>
      <p>
        Overtime pay rewards hours worked beyond your normal schedule at a higher
        rate. The two common rates are <strong>time-and-a-half</strong> (1.5× your
        normal hourly pay) and <strong>double time</strong> (2×). The calculator
        above works from either an hourly rate or an annual salary.
      </p>
      <p>The math comes down to four lines:</p>
      <ul>
        <li>
          <strong>Overtime rate</strong> = hourly rate × multiplier
        </li>
        <li>
          <strong>Overtime pay</strong> = overtime hours × overtime rate
        </li>
        <li>
          <strong>Regular pay</strong> = regular hours × hourly rate
        </li>
        <li>
          <strong>Total weekly pay</strong> = regular pay + overtime pay
        </li>
      </ul>

      <h3>A worked example</h3>
      <p>
        Suppose you earn <code>$25</code> an hour, work the usual{" "}
        <code>40</code> hours, then put in <code>5</code> hours of overtime at
        time-and-a-half. Your overtime rate is{" "}
        <code>25 × 1.5 = $37.50</code>. That overtime is worth{" "}
        <code>5 × 37.50 = $187.50</code>, and your regular pay is{" "}
        <code>40 × 25 = $1,000</code>. Add them and your week totals{" "}
        <code>$1,187.50</code> — before tax.
      </p>

      <h3>Working from a salary</h3>
      <p>
        Salaried workers can still estimate overtime. Divide the annual salary by{" "}
        <code>2,080</code> (40 hours × 52 weeks) to get an effective hourly rate,
        then apply the same multipliers. Note that many salaried roles are
        classed as &ldquo;exempt&rdquo; and are not legally owed overtime — check
        your status before relying on the figure.
      </p>

      <h3>Know your local rules</h3>
      <p>
        Overtime law varies. US federal law requires time-and-a-half after 40
        hours a week for non-exempt staff, but states like California add daily
        thresholds and double-time rules. Other countries set their own limits.
        Treat this tool as a quick estimate, not legal advice.
      </p>

      <h3>What about tax?</h3>
      <p>
        The calculator above shows <strong>pre-tax (gross)</strong> overtime pay
        only. Overtime is taxed at the same rates as your regular wages, but a
        large paycheck can have more withheld up front, which sometimes makes it
        feel as though overtime is taxed more heavily. For a fuller explanation,
        see our guide on{" "}
        <a href="/blog/how-overtime-pay-is-taxed">how overtime pay is taxed</a>.
      </p>

      <p className="text-sm text-muted">
        Calcento is for general guidance only and does not provide tax, legal, or
        financial advice. Figures are pre-tax.
      </p>
    </>
  );
}
