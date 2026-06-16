import type { FaqItem } from "@/lib/jsonld";

export const ptoFaqs: FaqItem[] = [
  {
    question: "How is PTO accrual calculated?",
    answer:
      "Divide your annual PTO hours by the number of hours you work in a year. If you get 20 days off at 8 hours each (160 PTO hours) and work 2,080 hours a year, your accrual rate is 160 ÷ 2,080 = 0.0769 hours of PTO for every hour worked.",
  },
  {
    question: "How much PTO do I earn per pay period?",
    answer:
      "Multiply your accrual rate by the hours in the pay period. At 0.0769 hours per hour worked and an 80-hour two-week pay period, you earn about 6.15 hours of PTO each pay period — roughly three quarters of a workday.",
  },
  {
    question: "How do I convert PTO hours into days?",
    answer:
      "Divide your accrued PTO hours by the length of your workday. With an 8-hour day, 60 accrued hours equals 7.5 days off. The calculator shows both hours and days in the accrued tab.",
  },
  {
    question: "Does everyone accrue PTO the same way?",
    answer:
      "No. Some employers grant the full year's PTO up front, others accrue it gradually per hour worked, per pay period, or per month. Caps, carryover limits, and waiting periods also differ. Rules vary by employer and country, so always check your own policy.",
  },
  {
    question: "Is unused PTO paid out when I leave?",
    answer:
      "It depends on your employer and local law. Some jurisdictions require unused accrued PTO to be paid out on termination, while others let company policy decide. This calculator estimates what you accrue, not what is payable on exit.",
  },
];

export function PtoContent() {
  return (
    <>
      <h2>How to calculate PTO accrual</h2>
      <p>
        Paid time off (PTO) accrual is the rate at which you earn vacation as you
        work. Instead of receiving all your days at once, an accrual policy adds a
        small amount of PTO for every hour, week, or pay period you put in. The
        calculator above turns your annual entitlement into a clear rate and
        running total.
      </p>
      <p>The core idea is a simple ratio:</p>
      <ul>
        <li>
          <strong>Annual PTO hours</strong> = PTO days × hours per workday
        </li>
        <li>
          <strong>Annual hours worked</strong> = hours per week × 52
        </li>
        <li>
          <strong>Accrual rate</strong> = annual PTO hours ÷ annual hours worked
        </li>
      </ul>

      <h3>A worked example</h3>
      <p>
        Say you get <code>20</code> days of PTO, work an <code>8</code>-hour day
        and a <code>40</code>-hour week. That is{" "}
        <code>20 × 8 = 160</code> PTO hours a year against{" "}
        <code>40 × 52 = 2,080</code> hours worked. Your accrual rate is{" "}
        <code>160 ÷ 2,080 = 0.0769</code> hours of PTO per hour worked — about{" "}
        <code>3.08</code> hours each week, or roughly <code>6.15</code> hours per
        two-week pay period.
      </p>

      <h3>Checking what you have earned so far</h3>
      <p>
        To see your balance partway through the year, multiply the accrual rate by
        the hours you have already worked. After <code>520</code> hours (about a
        quarter of the year) at <code>0.0769</code>, you would have accrued around{" "}
        <code>40</code> hours — five full days at an 8-hour day. Switch to the
        &ldquo;Accrued so far&rdquo; tab to run your own numbers.
      </p>

      <h3>Policies vary — a lot</h3>
      <p>
        Accrual is just one model. Some employers front-load PTO, others cap how
        much you can bank or carry into the next year, and part-time schedules
        change the math. Rules also differ sharply between countries. Treat this
        as a planning estimate and confirm the details in your own policy.
      </p>

      <p className="text-sm text-muted">
        Calcento is for general guidance only. PTO rules vary by employer and
        country.
      </p>
    </>
  );
}
