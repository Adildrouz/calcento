import type { FaqItem } from "@/lib/jsonld";

export const bradfordFactorFaqs: FaqItem[] = [
  {
    question: "What is the Bradford Factor?",
    answer:
      "The Bradford Factor is a formula used by HR and managers to measure the impact of employee absence patterns. It weights frequent short absences more heavily than a single long absence, because intermittent unplanned absences are generally more disruptive to operations. The formula is B = S² × D, where S is the number of absence spells and D is the total days absent.",
  },
  {
    question: "How is the Bradford Factor calculated?",
    answer:
      "Bradford Score = S² × D. S is the number of separate absence occasions (spells) within a rolling 52-week period. D is the total number of days absent in the same period. Three separate sick days (3 spells, 3 days total) gives a score of 3² × 3 = 27. One continuous 3-day illness (1 spell, 3 days) gives 1² × 3 = 3.",
  },
  {
    question: "What is a high Bradford Factor score?",
    answer:
      "Thresholds vary by employer, but common bands are: 0–49 (low/acceptable), 50–99 (monitor), 100–199 (formal review), 200–499 (high concern), and 500+ (critical). Many organisations trigger a formal absence review at 100 and consider disciplinary action above 500. Always combine the score with qualitative context.",
  },
  {
    question: "What counts as an absence spell?",
    answer:
      "A spell is any separate, distinct period of absence. A single 3-day illness is one spell. Three separate one-day absences over three months are three spells. This distinction is central to the Bradford Factor — the formula penalises frequent short absences far more than one long absence of the same total length.",
  },
  {
    question: "Is the Bradford Factor a fair measure of absence?",
    answer:
      "It is a useful management tool for identifying absence patterns, but it has limitations. It does not distinguish between justified and unjustified absences, and can inadvertently penalise employees with chronic conditions or disabilities. Best practice is to use it as a starting point for a conversation, not as a standalone disciplinary measure.",
  },
  {
    question: "Can the Bradford Factor be used for disciplinary action?",
    answer:
      "Some employers use it as part of a formal absence management policy, with defined trigger points for informal discussions, return-to-work interviews, and formal warnings. Any disciplinary use must be applied consistently, communicated in advance, and used alongside a fair process — not as the sole basis for a decision.",
  },
];

export function BradfordFactorContent() {
  return (
    <>
      <h2>What is the Bradford Factor and how is it calculated?</h2>
      <p>
        The Bradford Factor is an HR tool that puts a single number on an
        employee's absence pattern over a rolling 52-week period. It was
        developed at Bradford University School of Management and is widely used
        by HR teams and line managers across the UK, Australia, and beyond.
      </p>

      <h3>The formula</h3>
      <p>
        <strong>B = S² × D</strong>
      </p>
      <ul>
        <li>
          <strong>S</strong> = Number of separate absence spells (occasions) in
          the rolling 52-week period
        </li>
        <li>
          <strong>D</strong> = Total number of days absent in the same period
        </li>
        <li>
          <strong>B</strong> = Bradford Score
        </li>
      </ul>
      <p>
        The key insight is the squaring of S. Two employees can have the same
        total days absent but very different Bradford Scores depending on how
        those days are distributed.
      </p>

      <h3>A worked example</h3>
      <p>
        Two employees are each absent for 10 days in a year:
      </p>
      <ul>
        <li>
          <strong>Employee A</strong> had 1 continuous absence of 10 days.
          Score: 1² × 10 = <strong>10</strong>
        </li>
        <li>
          <strong>Employee B</strong> had 10 single-day absences throughout the
          year. Score: 10² × 10 = <strong>1,000</strong>
        </li>
      </ul>
      <p>
        Same total days, dramatically different operational impact — and a
        Bradford Score 100 times higher for Employee B.
      </p>

      <h3>Common score thresholds</h3>
      <p>
        Employers set their own thresholds, but a widely cited framework is:
      </p>
      <ul>
        <li>
          <strong>0–49</strong> — Low. Normal absence range; no action typically
          required.
        </li>
        <li>
          <strong>50–99</strong> — Medium. Monitor; consider an informal
          check-in.
        </li>
        <li>
          <strong>100–199</strong> — Warning. A formal absence review meeting is
          advisable.
        </li>
        <li>
          <strong>200–499</strong> — High. HR intervention typically warranted.
        </li>
        <li>
          <strong>500+</strong> — Critical. Many policies trigger formal
          disciplinary proceedings.
        </li>
      </ul>

      <h3>Limitations and fair use</h3>
      <p>
        The Bradford Factor is a useful pattern-detection tool, not a standalone
        verdict. It does not account for the reason for absence — a high score
        may reflect a serious medical condition or a disability covered by
        employment law. Best practice is to use the score as a prompt for a
        supportive return-to-work conversation, not as the sole basis for
        disciplinary action.
      </p>
      <p>
        If you manage absence formally using the Bradford Factor, your policy
        should be written down, communicated to employees in advance, and applied
        consistently across all staff.
      </p>

      <p className="text-sm text-muted">
        This calculator provides general HR guidance only and is not legal or
        employment law advice. Absence management processes must comply with
        applicable employment legislation in your jurisdiction.
      </p>
    </>
  );
}
