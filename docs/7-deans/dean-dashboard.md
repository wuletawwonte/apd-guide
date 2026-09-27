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
| **Avg reported %** | The share of planned class sessions that informants reported at all (held or not), averaged over the **ongoing** courses. Orange or red (below 80%) means the hourly figure rests on incomplete reports. Point at it for an explanation. |
| **Avg qualitative %** | The average score students gave the **ongoing** courses in the qualitative survey. Higher is better. 0.0% usually means no student has answered the survey yet. |
| **Performance (hourly)** | How many of the department's courses are **High** (80% or more), **Med** (50–79%) or **Low** (below 50%) by hourly progress. |
| **Open** | Two buttons: **Home** (house icon) opens the department home page. **Analytics** (bar chart icon) opens the department's course performance list. |

::: info What "hourly progress" means
Students who are **informants** report every week whether each class was held and for how long.
APD adds up these hours and compares them with the planned hours. If a course planned 40 hours so far and
students reported 30 hours, the course is at 75%.
:::

## How to read the numbers

- **Look at Avg hourly % first, then Avg reported %.** A low hourly number with a high reported number means
  classes really are being missed. A low hourly number with a low reported number means informants are not
  reporting: the department head should check the informants before anyone judges the teaching.
- **Look at the Low count.** A department with many **Low** courses has several courses falling behind.
- **Compare hourly and qualitative.** A course can hold all its classes (high hourly) but still get poor
  student feedback (low qualitative). That is a teaching-quality question, not a scheduling one.
- **Check for a missing head.** A dash in **Head** means nobody is managing the department in APD.
  Ask your academy administrator to assign a head.

## How to open a department from the dashboard

1. Find the department row.
2. In the **Open** column, click the **house** icon to open the department home page, or the **bar chart**
   icon to open its course performance list.

![The Open column with the Home and Analytics buttons](/screenshots/deans/dashboard-open-buttons.png)

To learn what you see next, read [Browse a department and its courses](./browsing-departments).

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
