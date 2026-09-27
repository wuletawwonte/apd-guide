# The Institution dashboard

The **Institution dashboard** shows the performance of every active academy in your university. APD
opens it when you sign in. To come back to it, click your university name or **Institution dashboard**
in the top bar.

![The Institution dashboard with four summary cards and the academy table](/screenshots/presidents/institution-dashboard.png)

## The summary cards

At the top there are four cards. They add up all academies together.

![The four summary cards: Academies, Courses, Avg hourly and Avg qualitative](/screenshots/presidents/stat-cards.png)

| Card | Big number | Small line under it |
|------|-----------|---------------------|
| **Academies** | How many active academies your university has in APD. | How many departments they have in total. |
| **Courses** | All courses in all academies. | How many of them are running today (**ongoing**). |
| **Avg hourly** | The average teaching progress of all **ongoing** courses. | "Across ongoing courses". |
| **Avg qualitative** | The average student survey score of all **ongoing** courses. | How many staff signed in to APD in the last 30 days, out of all staff. |

::: info What "hourly progress" means
Every week, selected students (called **informants**) report whether each class was held and for how
long. APD compares the reported hours with the hours that were planned up to today.
If a course planned 40 hours so far and 30 hours were reported, its progress is 75%.
:::

::: info What "qualitative score" means
At set points in a course (for example at 25%, 50% and 75% of the course), students answer a short
survey about the teaching. The qualitative score is the average of their answers, from 0 to 100%.
:::

## The academy table

Below the cards is a table with one row per academy.

![The academy table on the Institution dashboard](/screenshots/presidents/academies-table.png)

| Column | What it means |
|--------|---------------|
| **Academy** | The academy name. Click it to see its departments. |
| **Depts** | Number of departments in the academy. |
| **Courses** | All courses in the academy. |
| **Ongoing** | Courses running today. |
| **Avg hourly %** | Average teaching progress of the academy's ongoing courses. |
| **Avg qualitative %** | Average student survey score of the academy's ongoing courses. |
| **Performance (hourly)** | How many courses are **High** (80% or more), **Med** (50–79%) and **Low** (below 50%) by teaching progress. |
| **Staff active** | The share of the academy's staff who signed in to APD in the last 30 days. |

## How to use the dashboard

- **Find academies that are behind.** A low **Avg hourly %** means many planned classes are not being
  held, or not being reported. Ask the dean of that academy.
- **Look at the Low count.** Many **Low** courses in one academy point to a wider problem.
- **Check Staff active.** A low percentage means staff are not using APD. Numbers from an academy that
  rarely uses APD may not be reliable.
- **Compare teaching and feedback.** High hourly progress with a low qualitative score means classes
  happen, but students are not satisfied with them.

## Buttons at the top

Two buttons sit on the right, next to the university name:

![The Export button and the More options (⋯) button](/screenshots/presidents/toolbar-buttons.png)

- **Export** — download the figures as Excel, PDF or CSV.
- **⋯ (More options)** — your preferences, such as the weekly email.

Both are explained in [Reports and weekly email](./reports-and-weekly-email).

## Common questions

**Why is an academy missing?**
The table shows only **active** academies. The APD super administrator activates academies.

**Are finished courses part of the averages?**
No. Averages use only ongoing courses. Each course counts once, so a big department with many courses
has more weight than a small one.

**Why does an academy show 0.0% qualitative?**
No student has answered the survey yet in its ongoing courses, for example early in the term.

**How fresh are the numbers?**
APD calculates them again every time you open the page.
