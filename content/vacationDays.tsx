import type { FaqItem } from "@/lib/jsonld";

export const vacationDaysFaqs: FaqItem[] = [
  {
    question: "How do I calculate how many vacation days I have left?",
    answer:
      "Start with your total annual entitlement, add any days carried over from the previous year, then subtract days already taken and any booked-but-not-yet-taken days. The formula is: Remaining = (Entitlement + Carry-over) − Used − Pending.",
  },
  {
    question: "How is pro-rata vacation calculated for a new hire?",
    answer:
      "Pro-rata vacation is based on what fraction of the year you have worked. The most common method is: Earned days = (Full months worked ÷ 12) × Annual entitlement. So if your entitlement is 20 days and you start in July (7 months to go by December), you earn about 11.7 days for the year.",
  },
  {
    question: "Do I count partial months when calculating pro-rata leave?",
    answer:
      "Most employers count only complete calendar months. If you started on January 15, many policies count February as your first full month. Always check your employment contract or staff handbook — rounding rules differ widely.",
  },
  {
    question: "What happens to unused vacation days at the end of the year?",
    answer:
      "It depends on your employer's policy. Some policies are 'use it or lose it' — unused days expire on December 31. Others allow a carry-over of a set number of days (e.g., 5 days max). Some employers pay out unused vacation on termination. Check your contract or ask HR.",
  },
  {
    question: "Can I include pending (booked but not yet taken) days in my calculation?",
    answer:
      "Yes — the 'Days booked (pending)' field on this calculator lets you factor in approved leave you haven't taken yet. This gives you a more accurate picture of what's truly left to use before year end.",
  },
  {
    question: "Is this calculator for US vacation days or UK annual leave?",
    answer:
      "The calculator works for both. In the US, vacation days are set by employer policy (there is no federal minimum). In the UK, the statutory minimum is 28 days including bank holidays. The math is the same — just enter your entitlement and the calculator handles the rest.",
  },
];

export function VacationDaysContent() {
  return (
    <>
      <h2>How to calculate vacation days remaining</h2>
      <p>
        Knowing your exact vacation balance avoids awkward conversations with HR
        and helps you plan time off without accidentally going over your
        entitlement. The calculation has three parts: what you were given, what
        you have used, and what you have left.
      </p>

      <h3>The formula</h3>
      <ul>
        <li>
          <strong>Total available</strong> = Annual entitlement + carry-over days
        </li>
        <li>
          <strong>Spent</strong> = Days already taken + days booked (pending)
        </li>
        <li>
          <strong>Remaining</strong> = Total available − Spent
        </li>
      </ul>
      <p>
        For example, if you have 20 days entitlement, carried over 3 days from
        last year, taken 8 days, and have 3 more booked: Total available = 23
        days, Spent = 11 days, Remaining = <strong>12 days</strong>.
      </p>

      <h3>How pro-rata vacation works for new hires</h3>
      <p>
        When you join mid-year, your vacation entitlement is usually pro-rated
        based on how much of the leave year remains. The standard method is:
      </p>
      <ul>
        <li>
          <strong>Earned days</strong> = (Full months worked ÷ 12) × Annual
          entitlement
        </li>
      </ul>
      <p>
        If your company gives 20 days and you joined at the start of April (9
        months left in a January–December year), you earn{" "}
        <code>9 ÷ 12 × 20 = 15 days</code> for that year.
      </p>

      <h3>Common rounding and rounding rules</h3>
      <p>
        Some employers round pro-rated entitlements up to the nearest half day,
        others round to the nearest whole day, and some don't round at all.
        Where your contract is silent on rounding, ask your HR team — rounding
        in your favour is common practice but not universal.
      </p>

      <h3>Carry-over limits</h3>
      <p>
        Many employers allow you to carry a limited number of days into the
        following year — typically between 5 and 10 days. Some organisations
        operate a hard "use it or lose it" rule where unused days expire on a
        fixed date. Always check your employee handbook before relying on
        carry-over.
      </p>

      <h3>US vs UK rules</h3>
      <p>
        In the US, there is no federal law requiring paid vacation — entitlement
        is entirely employer-determined, and the average is around 10 days after
        one year of service. In the UK, workers are entitled to a statutory
        minimum of 28 days (including public holidays) under the Working Time
        Regulations. This calculator works for any entitlement; simply enter
        your actual number of days.
      </p>

      <p className="text-sm text-muted">
        Results are estimates based on your inputs. Actual entitlement may vary
        based on your contract, employer policy, and local law. Not legal or HR
        advice.
      </p>
    </>
  );
}
