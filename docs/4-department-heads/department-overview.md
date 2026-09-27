# Department overview (analytics)

The **Overview** page shows how every course in your department is doing. You can filter the courses, compare them in charts and download the numbers as a spreadsheet file.

::: tip Who can do this
Department heads, for the departments they lead. Deans, the quality office and academy admins can also open this page for any department.
:::

## Open the Overview page

1. In the menu, click **Overview** (under your department name).
2. The page opens on the **Courses** tab. Click **Overview** at the top to see the charts.

![Overview page, Courses tab: a list of courses with qualitative score and a coloured progress bar](/screenshots/department-heads/p-analytics-courses.png)

## Read the Courses tab

Each row is one course.

| Part of the row | What it means |
|-----------------|---------------|
| Coloured dot before the name | **Green** = ongoing. **Blue** = upcoming (not started). **Red** = done (ended). |
| Small number after the name | How many activities the course has. |
| Code under the name | The course code, for example `SWE-3101`. |
| **Qual.** | The average score students gave in the qualitative survey for this course. |
| **Quantitative** bar | How much of the planned teaching has happened so far. |

The colour of the **Quantitative** bar tells you quickly how the course is going:

| Colour | Score | Meaning |
|--------|-------|---------|
| Green | 80% or more | On track |
| Yellow | 50% – 79% | Falling behind |
| Red | Below 50% | Needs attention |

Click a course name, or the arrow at the end of the row, to open the full analytics for that course. See [Course analytics](./course-analytics).

## Filter and change the measure

Use the buttons above the list.

![Status filter, Session/Hour switch and the Export CSV button, marked in red](/screenshots/department-heads/p-analytics-filters.png)

1. **Filter by status.** Click **All**, **Ongoing**, **Upcoming** or **Done**.
2. **Choose the measure.** Click **Session** or **Hour**.
   - **Hour** compares the hours taught so far with the hours planned so far.
   - **Session** compares the class sessions held so far with the sessions planned so far.
3. **Search.** Type part of a course name or code in the search box on the right.

::: info Where do these numbers come from?
Students who are **informants** report every week if each class was held and how long it was. APD adds these reports up. If informants do not report, the score stays low. See [Students and enrollments](./students-and-enrollments).
:::

## Download the list (Export CSV)

1. Set the filters you want (status, measure and search).
2. Click the **Export CSV** button (the small download icon at the right).
3. Your browser saves a `.csv` file. Open it in Excel, LibreOffice or Google Sheets.

The file lists the courses you see on screen, with these columns: course name, code, status, number of activities, qualitative score, progress for the measure you chose, start date and end date.

## See the charts (Overview tab)

1. Click the **Overview** tab at the top of the page.
2. Wait a moment. The charts load on their own.

![Overview tab with a bar chart of performance by course and a donut chart of course status](/screenshots/department-heads/p-analytics-overview.png)

- **Performance metrics by course** compares every course in three colours: **Hourly**, **Session based** and **Qualitative Performance**. Taller bars are better.
- **Course status** is a donut chart. It shows how many courses are **High (>80)**, **Medium (50-79)** and **Low (<50)** by hourly score.

Move your mouse over a bar or a slice to see the exact number.

## Common questions

**A new course shows 0% and an empty bar.**
The course has not started, or no week has ended yet. The score starts to grow after informants report.

**The qualitative score is 0%.**
No student has answered the qualitative survey for that course yet.

**Why is the score low when classes are happening?**
Most often, informants are not reporting. Check the weeks of the activity and remind the informant students. See [Activity weeks](./activity-weeks).

## Related pages

- [Department heads — start here](./overview)
- [Course analytics](./course-analytics)
- [Performance feedback](./performance-feedback)
