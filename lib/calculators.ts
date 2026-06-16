// Central registry of every calculator on Calcento.
// Add a new calculator here and it automatically appears on the homepage
// hub and in the "related calculators" strip on every page.

export type CalculatorStatus = "live" | "soon";

export interface CalculatorMeta {
  slug: string; // URL path segment, e.g. "pay-raise-calculator"
  name: string; // short label, e.g. "Pay Raise"
  title: string; // full H1 / SEO title, e.g. "Pay Raise Calculator"
  tagline: string; // one-line description for cards
  status: CalculatorStatus;
}

export const calculators: CalculatorMeta[] = [
  {
    slug: "pay-raise-calculator",
    name: "Pay Raise",
    title: "Pay Raise Calculator",
    tagline: "Work out a raise by percent or amount — or compare two salaries.",
    status: "live",
  },
  {
    slug: "overtime-pay-calculator",
    name: "Overtime Pay",
    title: "Overtime Pay Calculator",
    tagline: "Time-and-a-half and double-time, with weekly totals.",
    status: "live",
  },
  {
    slug: "employee-turnover-calculator",
    name: "Turnover Rate",
    title: "Employee Turnover Rate Calculator",
    tagline: "Turnover and retention rates from headcount and leavers.",
    status: "live",
  },
  {
    slug: "pto-accrual-calculator",
    name: "PTO Accrual",
    title: "PTO Accrual Calculator",
    tagline: "Accrued paid time off by hours worked or pay period.",
    status: "live",
  },
  {
    slug: "cost-of-turnover-calculator",
    name: "Cost of Turnover",
    title: "Cost of Employee Turnover Calculator",
    tagline: "Estimate what staff turnover actually costs your business.",
    status: "live",
  },
];

export const liveCalculators = calculators.filter((c) => c.status === "live");

export function getCalculator(slug: string): CalculatorMeta | undefined {
  return calculators.find((c) => c.slug === slug);
}

// Returns up to `limit` other calculators, for the related-tools strip.
export function relatedCalculators(slug: string, limit = 3): CalculatorMeta[] {
  return calculators.filter((c) => c.slug !== slug).slice(0, limit);
}
