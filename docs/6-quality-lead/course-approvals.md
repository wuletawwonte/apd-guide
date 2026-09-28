# Approve or return courses

When a course ends, the department head **closes** it and **submits** it to the quality office. You then check the course and decide:

- **Approve** — the course is correct. APD **archives** it and its records become read-only.
- **Reject** — something is missing or wrong. The course goes back to the department with your reason.

::: tip Who can do this
Education quality leads.
:::

## How a course moves through review

| Step | Who | What happens |
|------|-----|--------------|
| 1. Open | Department head | The course is running. Weeks get reports and performance feedback. |
| 2. Submitted | Department head | The head closes the course and clicks submit. You get a notification (and a Telegram message if connected; **/approvals** in the bot lists the queue). |
| 3a. Approved | You | The course is archived. Nobody can change it any more. The head is notified. |
| 3b. Returned | You | The course opens again. The head sees your reason and fixes the problem, then submits again. |

## Open the approval list

1. In the left menu, under **Extras**, click **Course approvals**.
2. You see all submitted courses. The oldest submission is at the top.

![Course approvals list with one submitted course](/screenshots/quality-lead/course-approvals.png)

| Column | What it means |
|--------|---------------|
| **Course** | The course name and group. Click it to open the course. |
| **Department** | The department that owns the course. |
| **Ends** | The course end date. An orange **Still running** badge means the course has not ended yet (it was submitted before the end-date rule existed). |
| **Weeks reviewed** | How many past weeks have performance feedback, for example **12 of 12**. Green means every week has feedback; orange means some are missing. |
| **Submitted by** | The department head who submitted it. |
| **Submitted on** | The date it was submitted. |
| **Actions** | **Approve** or **Reject**. |

If the list is empty, you see **"No courses awaiting approval"**. Nothing is waiting for you.

## Check the course before you decide

1. Click the course name in the list.
2. The course page opens. A blue bar says **Submitted for approval** and shows the date.
3. Look at the **Activities** tab and the **Course details** tab. Check that:
   - every past week has a class report and performance feedback,
   - the dates and expected hours are correct.
4. To see how well the course was reported, open its analytics (department **Overview** → the course): the **Reported** column shows how much of the plan informants reported. A low figure means the performance numbers rest on incomplete reports.
5. Use your browser's back button to return to the list.

![A submitted course with the "Submitted for approval" bar](/screenshots/quality-lead/submitted-course-details.png)

::: tip Look at the students' view too
Open **Overview** for the department and click the course. The **Survey** tab shows the student feedback for that course. See [View departments and curriculum](./viewing-departments#see-student-feedback-for-a-course).
:::

## Approve a course

1. In **Course approvals**, find the course.
2. Click the green **Approve** button.
3. Your browser asks: **"Approve and archive … ? Its records become read-only."** Click **OK**.
4. A green message says the course was **approved and archived**. The course leaves the list.

The department head gets a notification that the course was approved.

::: warning Approval cannot be undone
After approval, nobody can edit the course, its activities or its weekly records. This keeps the final results safe. Approve only when everything is complete.
:::

## Return (reject) a course

1. In **Course approvals**, find the course.
2. Click **Reject** (red text).
3. A window opens: **Return … ?**
4. Type what must be fixed. Be clear, so the head knows exactly what to do. For example: *"Weeks 6 and 7 still have no performance feedback. Please add it and submit again."*
5. Click **Reject submission**.

![The Return course window with a reason typed in](/screenshots/quality-lead/reject-dialog.png)

What happens next:

- The course leaves your list and opens again for the department.
- The department head gets a notification with your reason.
- Your reason shows on the course page and on the head's dashboard under **Returned by the quality office**.
- When the head fixes it and submits again, the course comes back to your list.

::: info You must write a reason
The **Reject submission** button does not work while the reason box is empty.
:::

## Common questions

**Can I approve a course that is still running?**
Yes, if the head submitted it. Check the dates carefully first. After approval the course cannot get new reports.

**Two people from the quality office clicked at the same time. What happens?**
Only the first decision counts. The second person sees a message that the course **is not awaiting approval**.

**Where do I see courses I approved before?**
Open the department's **Courses** page or **Overview**. Archived courses are still listed there as read-only.

Back: [Quality lead overview](./overview) · Next: [Survey settings and checkpoints](./qualitative-survey-setup)
