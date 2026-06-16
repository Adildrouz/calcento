export default function HowToCalculateSalaryIncreasePercentage() {
  return (
    <>
      <p>
        When you get a raise, the dollar figure is only half the story. A $3,000
        bump means something very different on a $40,000 salary than on a $120,000
        one. The way to compare any raise fairly — to last year, to a colleague, or
        to inflation — is to express it as a percentage. The good news is that the
        math is genuinely simple once you see it laid out.
      </p>

      <h2>Why it matters</h2>
      <p>
        Employers talk about pay in two different languages: percentages and flat
        dollar amounts. A percentage scales with your salary, so the same percent
        is worth more the more you earn. A fixed dollar raise is the opposite — it
        is a bigger boost, in percentage terms, for a smaller salary. Converting
        everything to a percentage puts every offer on the same footing.
      </p>

      <h2>The formula, in plain words</h2>
      <p>There are three relationships worth remembering:</p>
      <ul>
        <li>
          <strong>Increase</strong> = new salary − old salary
        </li>
        <li>
          <strong>Salary increase percentage</strong> = (increase ÷ old salary) ×
          100
        </li>
        <li>
          <strong>New salary</strong> = old salary × (1 + percentage ÷ 100)
        </li>
      </ul>
      <p>
        The key detail people get wrong: you always divide by the{" "}
        <em>old</em> salary, not the new one. The percentage describes how much
        your pay grew from where it started.
      </p>

      <h2>A step-by-step example</h2>
      <p>Suppose you earned $60,000 and your new salary is $64,000.</p>
      <ol>
        <li>Find the increase: 64,000 − 60,000 = $4,000.</li>
        <li>Divide by the old salary: 4,000 ÷ 60,000 = 0.0667.</li>
        <li>Multiply by 100: 0.0667 × 100 = 6.7%. That is your raise.</li>
        <li>
          To sanity-check it, run it forward: 60,000 × 1.067 = $64,020 — within
          rounding of the new salary.
        </li>
      </ol>
      <p>
        It works in reverse too. If you are offered a 4% raise on $60,000, multiply
        60,000 × 0.04 = $2,400, so your new salary is $62,400. Same formula, used
        the other way around.
      </p>

      <h2>Turning it into per-paycheck money</h2>
      <p>
        A four-figure annual number can feel abstract. To see it per paycheck,
        divide the annual increase by your number of pay periods: 12 for monthly,
        26 for two-weekly, or 52 for weekly. A $2,400 raise paid every two weeks is
        about $92 more per check before tax — a more concrete way to picture it.
      </p>

      <h2>Common mistakes to avoid</h2>
      <ul>
        <li>
          <strong>Dividing by the new salary.</strong> The percentage is always
          relative to your old pay; using the new figure understates the raise.
        </li>
        <li>
          <strong>Comparing take-home to gross.</strong> Raises are quoted pre-tax.
          Your net increase is smaller because the extra income is taxed at your
          marginal rate.
        </li>
        <li>
          <strong>Forgetting inflation.</strong> A 3% raise in a year of 3%
          inflation leaves your buying power flat. To get ahead, the raise has to
          beat the cost of living.
        </li>
        <li>
          <strong>Rounding too early.</strong> Keep the decimals until the final
          step; rounding mid-calculation can throw the percentage off.
        </li>
      </ul>

      <h2>Try it yourself</h2>
      <p>
        Once the steps make sense, you rarely need to do them by hand. Enter your
        old and new salary — or a raise percentage — into the pay raise calculator
        and it will show the increase, the percentage, the new salary, and the
        per-paycheck figure instantly.
      </p>
    </>
  );
}
