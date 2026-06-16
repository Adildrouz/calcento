export default function HowToCalculateCostOfEmployeeTurnover() {
  return (
    <>
      <p>
        Most organizations track how many people leave, but far fewer put a price
        on it. Yet turnover is one of the largest hidden costs a business carries:
        every departure triggers spending on hiring, onboarding, and lost
        productivity. Knowing how to estimate that cost turns a vague worry into a
        number you can actually manage.
      </p>

      <h2>Why it matters</h2>
      <p>
        A turnover rate alone does not tell leadership much — 12% sounds fine until
        you learn it represents half a million dollars a year. Converting
        departures into dollars makes the case for retention spending, helps you
        prioritize which roles to protect, and gives you a baseline to measure
        improvements against.
      </p>

      <h2>The formula, in plain words</h2>
      <p>The estimate has two simple steps:</p>
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
      <p>
        The replacement-cost percentage is the heart of the calculation. It bundles
        together everything you spend to replace someone — advertising, recruiter
        fees, interview time, onboarding, and the productivity lost while the role
        is vacant or the new hire is ramping up — expressed as a share of the
        salary.
      </p>

      <h2>A step-by-step example</h2>
      <p>
        Imagine 10 employees left over the year, earning an average of $55,000, and
        you use a mid-range replacement cost of 33%.
      </p>
      <ol>
        <li>Cost per departure: 55,000 × 0.33 = $18,150.</li>
        <li>Total cost: 10 × 18,150 = $181,500 for the year.</li>
        <li>Per month: 181,500 ÷ 12 ≈ $15,125.</li>
        <li>
          Run it again at a higher 100% replacement cost for senior roles and the
          total jumps to $550,000 — which is why the percentage you pick matters so
          much.
        </li>
      </ol>

      <h2>Choosing a realistic replacement percentage</h2>
      <p>
        Published estimates range widely. Entry-level and high-volume roles often
        sit around 30% of salary, mid-level roles closer to 50–75%, and senior,
        technical, or specialist positions can reach 150–200% once long vacancies
        and ramp-up time are counted. Because the figure is uncertain, it helps to
        model a low and a high scenario rather than relying on one number.
      </p>

      <h2>Common mistakes to avoid</h2>
      <ul>
        <li>
          <strong>Counting only direct costs.</strong> Job ads and agency fees are
          the visible part; lost productivity and knowledge often cost far more.
        </li>
        <li>
          <strong>Using one percentage for every role.</strong> A warehouse hire
          and a lead engineer do not cost the same to replace — segment if you can.
        </li>
        <li>
          <strong>Ignoring vacancy time.</strong> The longer a seat stays empty,
          the higher the real cost, regardless of recruiting spend.
        </li>
        <li>
          <strong>Treating the estimate as exact.</strong> This is a planning
          figure to guide decisions, not a precise accounting entry.
        </li>
      </ul>

      <h2>Try it yourself</h2>
      <p>
        Plug your number of leavers, average salary, and a replacement percentage
        into the cost of employee turnover calculator. It shows the cost per
        departure, the annual total, and a monthly figure — the version that tends
        to get attention in a budget meeting.
      </p>
    </>
  );
}
