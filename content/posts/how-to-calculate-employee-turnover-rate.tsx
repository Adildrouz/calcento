export default function HowToCalculateEmployeeTurnoverRate() {
  return (
    <>
      <p>
        Employee turnover rate is one of the most-watched numbers in any HR
        dashboard, and for good reason: it tells you, in a single percentage, how
        many people are leaving your organization. Whether you are a manager, a
        founder, or just curious about your own team, the calculation is
        straightforward once you know which numbers to use.
      </p>

      <h2>Why it matters</h2>
      <p>
        Every departure carries a cost — recruiting, onboarding, lost knowledge,
        and the dip in productivity while a role sits empty. Tracking turnover over
        time turns those scattered costs into a trend you can act on. A rising rate
        is an early warning; a steady or falling one is a sign that pay,
        management, and culture are working.
      </p>

      <h2>The formula, in plain words</h2>
      <p>
        Turnover compares the number of people who left to the typical size of your
        team during the same window. It takes three steps:
      </p>
      <ul>
        <li>
          <strong>Average headcount</strong> = (employees at the start + employees
          at the end) ÷ 2
        </li>
        <li>
          <strong>Turnover rate</strong> = (employees who left ÷ average headcount)
          × 100
        </li>
        <li>
          <strong>Retention rate</strong> = ((start headcount − leavers) ÷ start
          headcount) × 100
        </li>
      </ul>
      <p>
        Using the <em>average</em> headcount, rather than a single snapshot, keeps
        the rate fair when your team is growing or shrinking during the period.
      </p>

      <h2>A step-by-step example</h2>
      <p>
        Picture a team that started the year with 120 people, ended with 130, and
        saw 14 people leave along the way.
      </p>
      <ol>
        <li>Average headcount: (120 + 130) ÷ 2 = 125.</li>
        <li>Turnover rate: 14 ÷ 125 = 0.112, then × 100 = 11.2%.</li>
        <li>Retention rate: (120 − 14) ÷ 120 = 0.883, then × 100 = 88.3%.</li>
        <li>
          If those 14 departures happened in a single quarter, annualize by
          multiplying the quarterly rate by 4 to estimate the yearly pace.
        </li>
      </ol>
      <p>
        So this team has an 11.2% turnover rate and an 88.3% retention rate — a
        healthy result for many office environments, though context matters.
      </p>

      <h2>Common mistakes to avoid</h2>
      <ul>
        <li>
          <strong>Using only the starting headcount as the denominator.</strong>
          For turnover, divide by the average; a growing team otherwise looks more
          stable than it is.
        </li>
        <li>
          <strong>Mixing up turnover and retention.</strong> They are related but
          use different denominators, so they will not always sum neatly to 100%.
        </li>
        <li>
          <strong>Comparing across very different industries.</strong> A 15% rate
          is high for some sectors and low for retail or hospitality. Benchmark
          against your own field.
        </li>
        <li>
          <strong>Lumping all departures together.</strong> Separating voluntary
          resignations from layoffs and retirements tells you far more about what
          you can change.
        </li>
      </ul>

      <h2>Try it yourself</h2>
      <p>
        Once you have your start count, end count, and number of leavers, the
        employee turnover calculator does the rest — including the average
        headcount, retention rate, and an annualized figure for short periods.
      </p>
    </>
  );
}
