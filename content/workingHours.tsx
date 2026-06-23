import type { FaqItem } from "@/lib/jsonld";

export const workingHoursFaqs: FaqItem[] = [
  {
    question: "How do I calculate total hours worked in a week?",
    answer:
      "For each day, subtract your start time from your end time, then subtract any unpaid break time. Add up the net hours across all days. For example, 9:00 to 17:00 with a 30-minute break = 7.5 hours. Five such days = 37.5 hours for the week.",
  },
  {
    question: "Does the calculator include overtime?",
    answer:
      "Yes. If you enable 'Show estimated pay' and your total weekly hours exceed 40, the calculator applies a 1.5× overtime multiplier to the excess hours, in line with US FLSA requirements for non-exempt employees.",
  },
  {
    question: "How do I enter times in the calculator?",
    answer:
      "Enter hours and minutes as numbers using the 24-hour clock. 9:00 AM is 9 and 00; 5:30 PM is 17 and 30. Midnight is 0:00 and noon is 12:00. The calculator handles the arithmetic instantly as you type.",
  },
  {
    question: "Can I use this as a timesheet?",
    answer:
      "Yes. Toggle each day on or off, fill in your hours, and the weekly total updates in real time. You can also add your hourly rate to get an estimated gross pay figure for the week.",
  },
  {
    question: "What if I work a split shift or night shift that crosses midnight?",
    answer:
      "This calculator assumes all shifts fall within the same calendar day (end time is after start time). For overnight shifts that cross midnight, calculate each portion separately and add the hours manually.",
  },
  {
    question: "How are monthly hours estimated?",
    answer:
      "Monthly hours are estimated as weekly hours × 52 ÷ 12 = weekly hours × 4.333. This gives the average monthly equivalent, which is slightly more than 4 weeks because months are longer than exactly 4 weeks.",
  },
];

export function WorkingHoursContent() {
  return (
    <>
      <h2>How to calculate total hours worked</h2>
      <p>
        Tracking your hours accurately matters whether you're submitting a
        timesheet, checking a paycheck, planning a project budget, or
        understanding when overtime kicks in.
      </p>

      <h3>The basic calculation</h3>
      <p>For any shift:</p>
      <ul>
        <li>
          <strong>Net hours</strong> = End time − Start time − Unpaid break
        </li>
      </ul>
      <p>
        A 9:00–17:30 shift with a 45-minute unpaid break gives{" "}
        <code>8.5 − 0.75 = 7.75 hours</code>. Sum across all days for your
        weekly total.
      </p>

      <h3>Why unpaid breaks matter</h3>
      <p>
        Many employees forget to deduct unpaid lunch breaks from their hours
        worked, which overstates time and creates payroll discrepancies. Paid
        rest breaks (typically short 10-to-15 minute breaks in the US) are
        counted as hours worked; unpaid meal breaks are not.
      </p>

      <h3>Overtime thresholds</h3>
      <p>
        Under US federal law (the Fair Labor Standards Act), non-exempt
        employees must be paid at least <strong>1.5× their regular rate</strong>{" "}
        for hours exceeding 40 in a workweek. Some states (notably California)
        apply daily overtime rules in addition to the weekly threshold — check
        your state's labor department for details.
      </p>

      <h3>Converting hours to pay</h3>
      <p>
        Once you have your weekly hours, multiply by your hourly rate for regular
        pay, and by 1.5× for any overtime hours. Toggle the "Show estimated pay"
        switch in the calculator to see this breakdown automatically.
      </p>

      <h3>Common time tracking mistakes</h3>
      <ul>
        <li>
          Not counting short paid rest breaks (these should be included in hours
          worked)
        </li>
        <li>
          Counting unpaid meal breaks as work time (these should be excluded)
        </li>
        <li>
          Rounding hours too aggressively — always keep at least one decimal
          place for precision
        </li>
        <li>
          Forgetting to account for days worked on public holidays, which may
          attract premium pay under your contract
        </li>
      </ul>

      <p className="text-sm text-muted">
        Pay estimates are pre-tax gross figures. Overtime rules vary by state and
        country — use this as a guide and confirm with your payroll team.
      </p>
    </>
  );
}
