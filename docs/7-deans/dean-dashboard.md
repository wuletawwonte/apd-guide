# The Dean dashboard

The **Dean dashboard** shows every active department in your academy on one page. Use it to see quickly
which departments are on track and which need help.

APD opens this page when you sign in. You can also open it at any time from **Extras → Dean dashboard** in
the sidebar.

![The Dean dashboard with the Academy performance overview table](/screenshots/deans/dean-dashboard.png)

## What each column means

The page has one table called **Academy performance overview**. Each row is one department.

| Column | What it means |
|--------|---------------|
| **Department** | The department name. |
| **Head** | The department head. A dash (—) means the department has no head yet. |
| **Courses** | All courses in the department: ongoing, upcoming and finished. |
| **Ongoing** | Courses that are running today (today is between the start and end date). |
| **Avg hourly %** | The average progress of the **ongoing** courses. For each course, APD compares the teaching hours students reported with the hours that were planned up to today. 100% means all planned hours so far were taught. |
| **Last 6 weeks** | A small line showing the department's weekly delivery over the last six weeks: the hours delivered against the hours planned in the weeks that ended each week. The last point is last week. Point at a point to see that week's numbers. The figure beside the line compares last week with the week before, for example **▲ +8 pts** (green, better) or **▼ −12 pts** (red, worse). A gap in the line means nothing was planned that week. Shown on wider screens only. |
| **Avg reported %** | The share of planned class sessions that informants reported at all (held or not), averaged over the **ongoing** courses. Orange or red (below 80%) means the hourly figure rests on incomplete reports. Point at it for an explanation. |
| **Avg qualitative %** | The average score students gave the **ongoing** courses in the qualitative survey. Higher is better. 0.0% usually means no student has answered the survey yet. |
| **Performance (hourly)** | How many of the department's courses are **High** (80% or more), **Med** (50–79%) or **Low** (below 50%) by hourly progress. Shown on very wide screens only. |
| **Open** | Three buttons: **Home** (house icon) opens the department home page. **Follow up** (flag icon) asks the department head to look into something. **Analytics** (bar chart icon) opens the department's course performance list. |

::: info What "hourly progress" means
Students who are **informants** report every week whether each class was held and for how long.
APD adds up these hours and compares them with the planned hours. If a course planned 40 hours so far and
students reported 30 hours, the course is at 75%.
:::

## How to read the numbers

- **Look at Avg hourly % first, then Avg reported %.** A low hourly number with a high reported number means
  classes really are being missed. A low hourly number with a low reported number means informants are not
  reporting: the department head should check the informants before anyone judges the teaching.
- **Look at the trend.** **Last 6 weeks** shows whether a department is getting better or worse. A falling line for two or three weeks is a reason to [ask for a follow-up](#ask-a-department-head-to-follow-up), even when the average still looks fine.
- **Look at the Low count.** A department with many **Low** courses has several courses falling behind.
- **Compare hourly and qualitative.** A course can hold all its classes (high hourly) but still get poor
  student feedback (low qualitative). That is a teaching-quality question, not a scheduling one.
- **Check for a missing head.** A dash in **Head** means nobody is managing the department in APD.
  Ask your academy administrator to assign a head.

## How to open a department from the dashboard

1. Find the department row.
2. In the **Open** column, click the **house** icon to open the department home page, or the **bar chart**
   icon to open its course performance list. The **flag** icon asks for a follow-up (see below).

![The Open column with the Home and Analytics buttons](/screenshots/deans/dashboard-open-buttons.png)

To learn what you see next, read [Browse a department and its courses](./browsing-departments).

## Ask a department head to follow up

When the numbers show a problem, you can ask the department head to look into it, inside APD. This is called a **follow-up**.

1. In the department's row, click the **flag** icon (**Follow up**) in the **Open** column. To ask about one course, open the course's analytics and click **Follow up** at the top instead.
2. The **Ask for a follow-up** page opens. It shows the department.
3. Under **Course**, leave **The whole department**, or choose one course.
4. In **What should the head look into?**, say what you noticed and what you want to know. For example: *"Delivery has dropped for three weeks and only half the sessions are reported. What is happening, and what will you do?"*
5. Click **Send follow-up**.

![The Ask for a follow-up form with The whole department chosen and a note](/screenshots/deans/follow-up-form.png)

The department head gets a notification in APD, by email and on Telegram. The request waits at the top of their dashboard until they resolve it with a reply. When they do, you get their reply as a notification and by email.

### See your follow-ups and the replies

1. At the top right of the dashboard, click **Follow-ups**. A yellow badge shows how many are still open, for example **2 open**.
2. The **Follow-ups** page lists every follow-up in your academy, open ones first. Each shows the department or course, who asked and when, the note, and an **Open** or **Resolved** badge.
3. A resolved follow-up shows who resolved it and their reply in a grey box.

![The Follow-ups page with an open and a resolved follow-up](/screenshots/deans/follow-ups-page.png)

The quality office and the president also send follow-ups. You see theirs on the same page.

## Common questions

**Why is a department missing from the table?**
Only **active** departments are shown. If a department was deactivated by the academy administrator, it
does not appear.

**Why does a department show 0.0% qualitative?**
Students answer the qualitative survey only at set times (checkpoints) during a course. Before the first
checkpoint, or if no student has answered yet, the score is 0.

**Are finished courses included in the averages?**
No. **Avg hourly %** and **Avg qualitative %** use only **ongoing** courses. The **Performance (hourly)**
counts use all the department's courses.

**How often do the numbers change?**
Every time you open the page, APD calculates the numbers again from the latest reports.

**Why does Last 6 weeks show a dash?**
Nothing was planned for the department in the last six weeks, for example between terms. A dash in place of the change figure means one of the last two weeks had nothing planned.

**Why is the Last 6 weeks column missing?**
It is hidden on narrow screens. Use a wider window, or turn a tablet sideways.
