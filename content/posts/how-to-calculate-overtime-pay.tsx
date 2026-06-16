export default function HowToCalculateOvertimePay() {
  return (
    <>
      <p>
        Overtime is one of those things that feels like it should be obvious until
        you sit down to add it up. What exactly is &ldquo;time-and-a-half&rdquo;?
        How do you handle it when you are on a salary instead of an hourly wage?
        This guide walks through the whole calculation in plain language so you
        can check a paycheck or estimate a big week with confidence.
      </p>

      <h2>Why it matters</h2>
      <p>
        Overtime pay exists to compensate you fairly for extra hours, and small
        errors add up. If your employer uses the wrong rate or forgets a few
        hours, you could be missing real money over a year. Understanding the math
        means you can spot a mistake instead of assuming the number on the payslip
        is always right.
      </p>

      <h2>The formula, in plain words</h2>
      <p>
        Overtime is paid at a higher rate than your normal hours. The two common
        rates are <strong>time-and-a-half</strong> (1.5 times your usual rate) and{" "}
        <strong>double time</strong> (2 times). The full week comes together like
        this:
      </p>
      <ul>
        <li>
          <strong>Overtime rate</strong> = hourly rate × multiplier (1.5 or 2)
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

      <h2>A step-by-step example</h2>
      <p>
        Imagine you earn $25 an hour, work your usual 40 hours, then add 5 hours of
        overtime at time-and-a-half.
      </p>
      <ol>
        <li>Find the overtime rate: 25 × 1.5 = $37.50 per overtime hour.</li>
        <li>Multiply by overtime hours: 5 × 37.50 = $187.50 of overtime pay.</li>
        <li>Work out regular pay: 40 × 25 = $1,000.</li>
        <li>Add them together: 1,000 + 187.50 = $1,187.50 for the week, before tax.</li>
      </ol>
      <p>
        If your overtime were double time instead, step one would use 25 × 2 =
        $50, and those same 5 hours would pay $250 — bringing the week to $1,250.
      </p>

      <h2>Turning a salary into an hourly rate</h2>
      <p>
        On a salary, you first need an hourly figure. The standard shortcut is to
        divide your annual salary by 2,080 — that is 40 hours a week across 52
        weeks. A $52,000 salary becomes 52,000 ÷ 2,080 = $25.00 an hour, and from
        there the overtime steps are exactly the same. One caveat: many salaried
        roles are classed as &ldquo;exempt&rdquo; and are not legally owed
        overtime, so check your status before counting on it.
      </p>

      <h2>Common mistakes to avoid</h2>
      <ul>
        <li>
          <strong>Applying the multiplier to the wrong hours.</strong> Only the
          overtime hours get the 1.5× or 2× rate; your first 40 stay at the normal
          rate.
        </li>
        <li>
          <strong>Assuming overtime is taxed more.</strong> It is taxed at the same
          rate as the rest of your pay — a big paycheck can just have more withheld
          up front.
        </li>
        <li>
          <strong>Ignoring local rules.</strong> US federal law requires
          time-and-a-half after 40 hours a week, but states like California add
          daily thresholds and double-time rules. Other countries differ again.
        </li>
        <li>
          <strong>Using the wrong hours-per-year figure.</strong> 2,080 assumes a
          standard full-time schedule; part-time or compressed weeks need a
          different number.
        </li>
      </ul>

      <h2>Try it yourself</h2>
      <p>
        Rather than running these steps by hand each week, drop your rate or
        salary and your hours into the overtime pay calculator. It applies the
        multiplier, separates regular and overtime pay, and shows your total
        weekly figure in one go.
      </p>
    </>
  );
}
