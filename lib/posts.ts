// Registry of every blog / tutorial article on Calcento. Articles are grouped
// into categories on the index, and many pair with a calculator so the guide
// and the tool cross-link both ways.

export type PostCategory =
  | "Calculator guides"
  | "Pay & benchmarks"
  | "HR metrics";

export const postCategories: PostCategory[] = [
  "Calculator guides",
  "Pay & benchmarks",
  "HR metrics",
];

export interface PostMeta {
  slug: string; // URL path segment under /blog
  title: string;
  description: string;
  calculatorSlug?: string; // the matching calculator's slug, if any
  category: PostCategory;
  date: string; // ISO date string
  readingMinutes: number;
}

export const posts: PostMeta[] = [
  // ── Calculator guides ──────────────────────────────────────────────
  {
    slug: "how-to-calculate-salary-increase-percentage",
    title: "How to Calculate a Salary Increase Percentage",
    description:
      "Turn any raise into a percentage — and back again — with a clear formula, a worked example, and the mistakes to avoid.",
    calculatorSlug: "pay-raise-calculator",
    category: "Calculator guides",
    date: "2026-06-01",
    readingMinutes: 5,
  },
  {
    slug: "how-to-calculate-overtime-pay",
    title: "How to Calculate Overtime Pay (Time and a Half & Double Time)",
    description:
      "Work out time-and-a-half and double-time pay from an hourly rate or salary, step by step.",
    calculatorSlug: "overtime-pay-calculator",
    category: "Calculator guides",
    date: "2026-06-04",
    readingMinutes: 6,
  },
  {
    slug: "how-to-calculate-employee-turnover-rate",
    title: "How to Calculate Employee Turnover Rate (Formula + Example)",
    description:
      "The turnover formula explained simply, why average headcount matters, and how to read your number.",
    calculatorSlug: "employee-turnover-calculator",
    category: "Calculator guides",
    date: "2026-06-07",
    readingMinutes: 6,
  },
  {
    slug: "how-to-calculate-cost-of-employee-turnover",
    title: "How to Calculate the Cost of Employee Turnover",
    description:
      "Put a dollar figure on staff turnover using salary and a replacement-cost percentage, with a real example.",
    calculatorSlug: "cost-of-turnover-calculator",
    category: "Calculator guides",
    date: "2026-06-10",
    readingMinutes: 6,
  },
  {
    slug: "how-to-calculate-pto-accrual",
    title: "How to Calculate PTO and Holiday Accrual",
    description:
      "Turn an annual PTO or holiday entitlement into an accrual rate, and check what you have earned so far.",
    calculatorSlug: "pto-accrual-calculator",
    category: "Calculator guides",
    date: "2026-06-12",
    readingMinutes: 6,
  },

  // ── Pay & benchmarks ───────────────────────────────────────────────
  {
    slug: "what-is-a-good-pay-raise",
    title: "What Is a Good Annual Pay Raise? Typical Ranges Explained",
    description:
      "Typical raise ranges, how to judge an offer against inflation, and what counts as a strong increase.",
    calculatorSlug: "pay-raise-calculator",
    category: "Pay & benchmarks",
    date: "2026-06-02",
    readingMinutes: 6,
  },
  {
    slug: "percentage-vs-dollar-raise",
    title: "Percentage Raise vs. Dollar Raise: Which Is Better?",
    description:
      "Why the same raise can look big or small depending on how it is framed — and how to compare them fairly.",
    calculatorSlug: "pay-raise-calculator",
    category: "Pay & benchmarks",
    date: "2026-06-06",
    readingMinutes: 5,
  },
  {
    slug: "what-is-cost-of-living-adjustment",
    title: "What Is a Cost-of-Living Adjustment (COLA) and How Is It Calculated?",
    description:
      "How COLAs work, the role of inflation indexes like the CPI, and how to tell a COLA from a merit raise.",
    calculatorSlug: "pay-raise-calculator",
    category: "Pay & benchmarks",
    date: "2026-06-08",
    readingMinutes: 6,
  },

  // ── HR metrics ─────────────────────────────────────────────────────
  {
    slug: "healthy-turnover-rate-by-industry",
    title: "What Is a Healthy Employee Turnover Rate by Industry?",
    description:
      "Why a healthy turnover rate depends on your sector, with typical ranges and how to benchmark your own.",
    calculatorSlug: "employee-turnover-calculator",
    category: "HR metrics",
    date: "2026-06-03",
    readingMinutes: 6,
  },
  {
    slug: "retention-rate-vs-turnover-rate",
    title: "Employee Retention Rate vs. Turnover Rate: What's the Difference?",
    description:
      "Two related metrics that are not exact opposites — what each measures and when to use which.",
    calculatorSlug: "employee-turnover-calculator",
    category: "HR metrics",
    date: "2026-06-05",
    readingMinutes: 5,
  },
  {
    slug: "accrued-vs-lump-sum-pto",
    title: "Accrued vs. Lump-Sum PTO: How Paid Time Off Policies Work",
    description:
      "The difference between accruing PTO over time and getting it all at once, with the pros and cons of each.",
    calculatorSlug: "pto-accrual-calculator",
    category: "HR metrics",
    date: "2026-06-11",
    readingMinutes: 6,
  },
];

export function getPost(slug: string): PostMeta | undefined {
  return posts.find((p) => p.slug === slug);
}

export function postsByCategory(category: PostCategory): PostMeta[] {
  return posts.filter((p) => p.category === category);
}

// Returns up to `limit` other posts, for the related-guides strip.
export function relatedPosts(slug: string, limit = 3): PostMeta[] {
  return posts.filter((p) => p.slug !== slug).slice(0, limit);
}
