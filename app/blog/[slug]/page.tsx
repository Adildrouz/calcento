import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComponentType } from "react";
import BlogPost from "@/components/BlogPost";
import { getPost, posts } from "@/lib/posts";
import { SITE_URL } from "@/lib/jsonld";

// Calculator guides
import HowToCalculateSalaryIncreasePercentage from "@/content/posts/how-to-calculate-salary-increase-percentage";
import HowToCalculateOvertimePay from "@/content/posts/how-to-calculate-overtime-pay";
import HowToCalculateEmployeeTurnoverRate from "@/content/posts/how-to-calculate-employee-turnover-rate";
import HowToCalculateCostOfEmployeeTurnover from "@/content/posts/how-to-calculate-cost-of-employee-turnover";
import HowToCalculatePtoAccrual from "@/content/posts/how-to-calculate-pto-accrual";
// Pay & benchmarks
import WhatIsAGoodPayRaise from "@/content/posts/what-is-a-good-pay-raise";
import PercentageVsDollarRaise from "@/content/posts/percentage-vs-dollar-raise";
import WhatIsCostOfLivingAdjustment from "@/content/posts/what-is-cost-of-living-adjustment";
// HR metrics
import HealthyTurnoverRateByIndustry from "@/content/posts/healthy-turnover-rate-by-industry";
import RetentionRateVsTurnoverRate from "@/content/posts/retention-rate-vs-turnover-rate";
import AccruedVsLumpSumPto from "@/content/posts/accrued-vs-lump-sum-pto";

// Maps each post slug to its body component.
const bodies: Record<string, ComponentType> = {
  "how-to-calculate-salary-increase-percentage":
    HowToCalculateSalaryIncreasePercentage,
  "how-to-calculate-overtime-pay": HowToCalculateOvertimePay,
  "how-to-calculate-employee-turnover-rate": HowToCalculateEmployeeTurnoverRate,
  "how-to-calculate-cost-of-employee-turnover":
    HowToCalculateCostOfEmployeeTurnover,
  "how-to-calculate-pto-accrual": HowToCalculatePtoAccrual,
  "what-is-a-good-pay-raise": WhatIsAGoodPayRaise,
  "percentage-vs-dollar-raise": PercentageVsDollarRaise,
  "what-is-cost-of-living-adjustment": WhatIsCostOfLivingAdjustment,
  "healthy-turnover-rate-by-industry": HealthyTurnoverRateByIndustry,
  "retention-rate-vs-turnover-rate": RetentionRateVsTurnoverRate,
  "accrued-vs-lump-sum-pto": AccruedVsLumpSumPto,
};

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Calcento`,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Calcento`,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: "Calcento",
      type: "article",
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  const Body = bodies[params.slug];
  if (!post || !Body) notFound();

  return (
    <BlogPost slug={post.slug}>
      <Body />
    </BlogPost>
  );
}
