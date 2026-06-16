import type { FaqItem } from "@/lib/jsonld";

export const payRaiseFaqs: FaqItem[] = [
  {
    question: "How do you calculate a pay raise percentage?",
    answer:
      "Subtract your old salary from your new salary, divide the result by your old salary, then multiply by 100. For example, going from $60,000 to $64,000 is a $4,000 increase; $4,000 ÷ $60,000 = 0.0667, or a 6.7% raise.",
  },
  {
    question: "How much is a 3% raise on $60,000?",
    answer:
      "A 3% raise on $60,000 is $1,800 per year, bringing the new salary to $61,800. That works out to about $150 more per month, or roughly $69 more per two-week paycheck before tax.",
  },
  {
    question: "Is the result before or after tax?",
    answer:
      "All figures are gross (before tax). Your take-home increase will be smaller because the raise is taxed at your marginal rate, and may also change deductions like retirement contributions. Use the per-period figures as a pre-tax guide.",
  },
  {
    question: "What is considered a good annual raise?",
    answer:
      "It depends on the year and your market, but a typical merit increase in the US, UK, and Australia tends to land in the 3–5% range, with stronger raises for promotions or for matching a competing offer. A raise that simply matches inflation keeps your pay flat in real terms.",
  },
  {
    question: "How do I convert a raise into my hourly or weekly pay?",
    answer:
      "Divide the annual increase by the number of pay periods: 12 for monthly, 26 for two-weekly, or 52 for weekly. The calculator shows all of these automatically once you enter your numbers.",
  },
];

export function PayRaiseContent() {
  return (
    <>
      <h2>How to calculate a pay raise</h2>
      <p>
        A pay raise can be described two ways: as a <strong>percentage</strong> of
        your current salary, or as a fixed <strong>dollar amount</strong>. The
        calculator above handles both, and also works in reverse — enter two
        salaries and it tells you the percentage change between them.
      </p>
      <p>The underlying math is simple:</p>
      <ul>
        <li>
          <strong>New salary</strong> = current salary + increase
        </li>
        <li>
          <strong>Increase</strong> = current salary × (raise % ÷ 100)
        </li>
        <li>
          <strong>Raise %</strong> = (increase ÷ current salary) × 100
        </li>
      </ul>

      <h3>A worked example</h3>
      <p>
        Say you earn <code>$60,000</code> and you are offered a{" "}
        <code>4%</code> raise. The increase is{" "}
        <code>60,000 × 0.04 = $2,400</code>, so your new salary is{" "}
        <code>$62,400</code>. Spread across the year that is{" "}
        <code>$200</code> more per month, or about <code>$92</code> per two-week
        paycheck — before tax.
      </p>

      <h3>Percent raise vs. dollar raise</h3>
      <p>
        A percentage raise scales with your salary, so the same percentage is
        worth more to a higher earner. A flat dollar raise is the opposite — it is
        a bigger percentage boost for lower salaries. When you compare a raise to
        a colleague&apos;s, or to last year&apos;s, converting both to a
        percentage is the only fair way to read them.
      </p>

      <h3>Don&apos;t forget inflation</h3>
      <p>
        A raise only increases your buying power if it beats the rate of
        inflation. A 3% raise in a year of 3% inflation leaves you flat in real
        terms. When you negotiate, it can help to frame the number against the
        cost of living, not just last year&apos;s salary.
      </p>

      <p className="text-sm text-muted">
        Calcento is for general guidance only and does not provide tax or
        financial advice. Figures are pre-tax.
      </p>
    </>
  );
}
