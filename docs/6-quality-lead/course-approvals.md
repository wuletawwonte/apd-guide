# Approve or return courses

When a course ends, the department head **closes** it and **submits** it to the quality office. You then check the course and decide:

- **Approve** — the course is correct. APD **archives** it and its records become read-only.
- **Return** — something is missing or wrong. The course goes back to the department with your reason.

::: tip Who can do this
Education quality leads.
:::

## How a course moves through review

| Step | Who | What happens |
|------|-----|--------------|
| 1. Open | Department head | The course is running. Weeks get reports and performance feedback. |
| 2. Submitted | Department head | The head closes the course and clicks submit. You get a notification (and a Telegram message if connected; **/approvals** in the bot lists the queue). While the course waits for you, the head can't change it: no new activities, weeks, feedback or students. |
| 3a. Approved | You | The course is archived. Nobody can change it any more. The head is notified. |
| 3b. Returned | You | The course opens again. The head sees your reason and fixes the problem, then submits again. |

A head can only submit a course that has **ended**, has at least one activity with delivered weeks, and has performance feedback for **every** past week. APD checks the same rules again when you approve.

## Open the approval list

1. In the left menu, under **Quality office**, click **Course approvals**. The number beside it shows how many courses are waiting.
2. The **Awaiting review** tab lists every submitted course. The oldest submission is at the top.

![Course approvals list with one submitted course](/screenshots/quality-lead/course-approvals.png)

| Column | What it means |
|--------|---------------|
| **Course** | The course name and group. Click it to open the course's performance (analytics). **Course details** under it opens the course page. |
| **Department** | The department that owns the course. |
| **Ends** | The course end date. An orange **Still running** badge means the course has not ended yet. |
| **Weeks reviewed** | How many past weeks have performance feedback, for example **12 of 12**. Green means every week has feedback; orange means some are missing. An orange **No delivered weeks** badge means the course has no activity with past weeks, so there is nothing to review. |
| **Submitted** | The department head who submitted it, and the date. |
| **Decision** | **Approve** or **Return**. |

If the list is empty, you see **"No courses awaiting approval"**. Nothing is waiting for you.

On a phone, each course shows as a card with the same information and buttons.

## Check the course before you decide

1. Click the course name in the list. The course's analytics open.
2. A blue bar at the top says **Awaiting your review**, with who submitted it and when. The **Approve** and **Return** buttons are in that bar too, so you can decide from here.
3. Look at the three tabs:
   - **Performance** — how much of the plan was delivered. The **Reported** column shows how much informants reported; a low figure means the numbers rest on incomplete reports.
   - **Weekly** — week by week delivery.
   - **Survey** — what students said in the feedback survey.
4. Click **Course details** at the top to check the dates and expected hours. The course page has the same blue bar with **Approve** and **Return**.

![A submitted course's analytics with the Awaiting your review bar](/screenshots/quality-lead/submitted-course-details.png)

## Approve a course

1. In **Course approvals** (or in the blue bar on the course), click the green **Approve** button.
2. APD asks: **"Approve and archive … ? Its records become read-only."** Click **Approve and archive**.
3. A green message says the course was **approved and archived**. The course moves to the **Decided** tab.

The department head gets a notification that the course was approved.

::: warning Approval cannot be undone
After approval, nobody can edit the course, its activities or its weekly records. This keeps the final results safe. Approve only when everything is complete.
:::

### When Approve is grey

**Approve** is greyed out when the course does not meet the rules, for example it has not ended yet or some past weeks have no feedback. Point at the button to see why. Return the course instead, so the head can fix it.

## Return a course

1. In **Course approvals** (or in the blue bar on the course), click **Return** (red text).
2. A window opens: **Return … ?** It names the head who will be notified.
3. Under **What must be fixed before resubmission?**, type what the head must do. Be clear. For example: *"Weeks 6 and 7 still have no performance feedback. Please add it and submit again."*

   If the course does not meet the rules, the window lists the problems and fills them in as the reason. You can change the text.
4. Click **Return to department**.

![The Return course window with a reason typed in](/screenshots/quality-lead/reject-dialog.png)

What happens next:

- The course leaves the **Awaiting review** tab and opens again for the department.
- The department head gets a notification with your reason.
- Your reason shows on the course page and on the head's dashboard under **Returned by the quality office**.
- When the head fixes it and submits again, the course comes back to your list.

::: info You must write a reason
**Return to department** does not work while the reason box is empty.
:::

## See your past decisions

Click the **Decided** tab. It lists the courses you approved and the courses you returned, newest first.

- **Approved** courses show who approved them and when.
- **Returned** courses show the reason you gave.

Click a course name to open its analytics.

## Common questions

**Can I approve a course that is still running?**
No. **Approve** stays grey until the course has ended and every past week has feedback. Return it with a note instead.

**Two people from the quality office clicked at the same time. What happens?**
Only the first decision counts. The second person sees a message that the course **is not awaiting approval**.

**Can the head change the course while it waits for me?**
No. Once a course is submitted, its activities, weeks, feedback and students are locked until you approve or return it. So what you review is what gets archived.

**Where do I see courses I approved before?**
In the **Decided** tab. They are also still listed on the department's **Courses** page and **Overview** as read-only.

Back: [Quality lead overview](./overview) · Next: [Survey settings and checkpoints](./qualitative-survey-setup)
