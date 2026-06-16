export default function RetentionRateVsTurnoverRate() {
  return (
    <>
      <p>
        Retention rate and turnover rate are two of the most quoted numbers in HR,
        and they are often treated as if they are simply opposites — if turnover is
        15%, retention must be 85%, right? Not quite. The two metrics measure
        related but distinct things, and using them interchangeably can lead to the
        wrong conclusions.
      </p>

      <h2>What each metric measures</h2>
      <p>
        <strong>Turnover rate</strong> captures how many people left over a period,
        relative to the typical size of your team. <strong>Retention rate</strong>{" "}
        captures how many people stayed, relative to who you started with. They look
        at the same workforce from opposite ends — departures versus survivors — but
        they are usually calculated with different denominators, which is why they
        do not always add up to a tidy 100%.
      </p>

      <h2>The formulas side by side</h2>
      <ul>
        <li>
          <strong>Turnover rate</strong> = (employees who left ÷ average headcount)
          × 100
        </li>
        <li>
          <strong>Retention rate</strong> = ((employees at start − employees who
          left) ÷ employees at start) × 100
        </li>
      </ul>
      <p>
        Notice the denominators. Turnover typically divides by the{" "}
        <em>average</em> headcount over the period, while retention divides by the{" "}
        <em>starting</em> headcount. That difference is exactly why the two figures
        rarely sum to 100.
      </p>

      <h2>A worked example</h2>
      <p>
        Suppose a team starts the year with 100 people, ends with 120, and 12 people
        leave along the way.
      </p>
      <ol>
        <li>Average headcount: (100 + 120) ÷ 2 = 110.</li>
        <li>Turnover rate: 12 ÷ 110 = 10.9%.</li>
        <li>Retention rate: (100 − 12) ÷ 100 = 88%.</li>
      </ol>
      <p>
        Turnover is 10.9% and retention is 88% — and 10.9 + 88 does not equal 100,
        because the two ratios are built on different bases. Both are correct; they
        just answer slightly different questions.
      </p>

      <h2>A key difference: new hires</h2>
      <p>
        Retention rate, measured against the starting headcount, deliberately
        ignores people you hired during the period — it asks how well you kept the
        team you began with. Turnover, using average headcount, folds growth into
        the denominator. That makes retention a cleaner measure of whether your
        existing people are staying, and turnover a better measure of overall churn
        in a changing organization.
      </p>

      <h2>When to use which</h2>
      <ul>
        <li>
          <strong>Use retention rate</strong> when you want to know how well you are
          holding on to existing employees, especially a specific cohort or your
          top performers.
        </li>
        <li>
          <strong>Use turnover rate</strong> when you want an overall measure of
          churn that accounts for a team that is growing or shrinking, and to
          compare against industry benchmarks.
        </li>
      </ul>

      <h2>Track both together</h2>
      <p>
        The two metrics are most powerful side by side: retention shows loyalty,
        turnover shows movement. The employee turnover calculator reports both at
        once — turnover rate, retention rate, and an annualized figure — so you can
        watch them together instead of guessing how one implies the other.
      </p>
    </>
  );
}
