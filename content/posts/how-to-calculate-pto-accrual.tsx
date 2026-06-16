export default function HowToCalculatePtoAccrual() {
  return (
    <>
      <p>
        If your employer says you &ldquo;accrue&rdquo; paid time off, it means you
        earn your vacation gradually as you work rather than receiving it all at
        once. That raises a practical question: how much have you actually banked
        right now? This guide breaks down PTO accrual into a simple rate you can
        apply to any number of hours worked.
      </p>

      <h2>Why it matters</h2>
      <p>
        Knowing your accrual rate helps you plan time off without nasty surprises.
        It tells you when you will have enough hours for a long weekend or a full
        week away, and it lets you check that your balance on payday matches what
        you have earned. For anyone paid hourly or working an irregular schedule,
        it is the only reliable way to track vacation.
      </p>

      <h2>The formula, in plain words</h2>
      <p>
        Accrual is just a ratio: the PTO you earn in a year divided by the hours
        you work in a year. Build it in three steps:
      </p>
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
      <p>
        The result is the amount of PTO you earn for every single hour you work — a
        small decimal that you can multiply by any stretch of time.
      </p>

      <h2>A step-by-step example</h2>
      <p>
        Suppose you get 20 days of PTO, work 8-hour days, and put in 40 hours a
        week.
      </p>
      <ol>
        <li>Annual PTO hours: 20 × 8 = 160 hours.</li>
        <li>Annual hours worked: 40 × 52 = 2,080 hours.</li>
        <li>Accrual rate: 160 ÷ 2,080 = 0.0769 hours of PTO per hour worked.</li>
        <li>
          Per two-week pay period (80 hours): 0.0769 × 80 ≈ 6.15 hours of PTO —
          a little over three quarters of a day each pay period.
        </li>
      </ol>
      <p>
        To check a mid-year balance, multiply the rate by the hours you have worked
        so far. After 520 hours, that is 0.0769 × 520 ≈ 40 hours — five full days
        at an 8-hour day.
      </p>

      <h2>Common mistakes to avoid</h2>
      <ul>
        <li>
          <strong>Mixing up days and hours.</strong> Decide on one unit and stay
          consistent; convert by multiplying or dividing by your hours-per-day.
        </li>
        <li>
          <strong>Assuming everyone accrues the same way.</strong> Some employers
          grant PTO up front, others accrue per pay period or per month, and many
          set caps or waiting periods.
        </li>
        <li>
          <strong>Forgetting part-time schedules.</strong> Fewer hours worked means
          a different annual figure, so re-run the math with your real weekly
          hours.
        </li>
        <li>
          <strong>Ignoring carryover and payout rules.</strong> Accruing PTO and
          being able to keep or cash it out are separate questions governed by
          policy and local law.
        </li>
      </ul>

      <h2>Try it yourself</h2>
      <p>
        Instead of working the decimals by hand, enter your entitlement and
        schedule into the PTO accrual calculator. It shows your accrual rate, what
        you earn per week and pay period, and how many hours — and days — you have
        accrued so far.
      </p>
    </>
  );
}
