# Browse a department and its courses

As a dean you can open any department in your academy and read its data. This page shows how to move
between departments, read the charts, open one course, and download a course list.

Everything here is **read-only** for you. You will not see buttons to add, edit or delete.

## How to open a department

1. In the sidebar, under **Navigation**, click **Department**.

   ![The Department button in the dean's sidebar](/screenshots/deans/sidebar-department-button.png)

2. The sidebar now shows the department menu. The box at the top shows the department you are in.

   ![The department menu: Home, Overview, Courses, Students, Instructors, Curriculum Courses and Activity Types](/screenshots/deans/sidebar-department-menu.png)

3. To go to another department, click the box with the department name. A list opens.
   Type part of a name in **Search departments…** or click a department in the list.

   ![The department switcher list with a search box](/screenshots/deans/department-switcher.png)

4. To go back to the main menu, click the **back arrow** next to the department name.

::: tip
You can also open a department straight from the [Dean dashboard](./dean-dashboard): use the **house**
or **bar chart** buttons in the **Open** column.
:::

## The department home page

Click **Home** in the department menu. The home page shows:

- **Counters** for instructors, students, courses and curriculum courses.
- **Courses needing feedback**: courses with past weeks that the department head has not reviewed yet.
  The yellow badge shows how many weeks are waiting.
- **Recent instructors** and **Recent students**: the newest people added to the department.
  Click **View all** to see the full list.

![A department home page with counters and the Courses needing feedback list](/screenshots/deans/department-home.png)

::: info Why "Courses needing feedback" matters
Each week, the department head should give **performance feedback** on every activity. Many waiting
weeks means the head is behind with reviews. A course cannot be sent for approval until all its past
weeks have feedback.
:::

## How to see the performance of every course

1. In the department menu, click **Overview**.
2. The **Courses** tab lists every course with two scores:
   - **Qual.** — the average qualitative survey score from students.
   - **Quantitative** — a bar showing progress so far. Green is 80% or more, yellow is 50–79%, red is below 50%.
3. Use the buttons to filter the list:
   - **All**, **Ongoing**, **Upcoming**, **Done** — which courses to show.
   - **Session** or **Hour** — measure progress by number of class sessions held, or by teaching hours.
4. Type in **Search course name or code…** to find one course.
5. Click a course name, or the arrow at the end of the row, to open its analytics.

![The Overview page, Courses tab, with the course list and progress bars](/screenshots/deans/department-overview-courses.png)

The small coloured dot before a course name shows its status: green is **ongoing**, blue is
**upcoming** and red is **finished (passed)**. The small number after the name is how many activities
the course has.

## How to see the department charts

1. On the **Overview** page, click the **Overview** tab.
2. You see two charts:
   - **Performance metrics by course** — for each course, three bars: **Hourly**, **Session based** and
     **Qualitative Performance**.
   - **Course status** — a ring chart showing how many courses are **High (>80)**, **Medium (50-79)**
     and **Low (<50)**.

![The Overview tab with the bar chart and the course status ring chart](/screenshots/deans/department-overview-charts.png)

## How to download the course list (CSV)

1. Open **Overview** and stay on the **Courses** tab.
2. Choose the filters you want (for example **Ongoing** and **Hour**). The download uses the same filters.
3. Click the **download** button on the right, next to the search box.

   ![The download button on the Overview page](/screenshots/deans/overview-export-button.png)

4. Your browser saves a CSV file. Open it with Excel, LibreOffice or Google Sheets.

## How to look at one course

When you open a course from **Overview**, you see **Course analytics** with three tabs. The header shows
the course code, start and end dates, the total number of class-session reports, and how many reports
came in last week compared with how many were expected.

### Performance tab

A table with one row per activity (for example Lecture or Laboratory):

| Column | What it means |
|--------|---------------|
| **Timeline** | How much of the activity's time has passed. |
| **Actual** | Hours (or sessions) reported as held so far. |
| **Expected** | Hours (or sessions) that should have been held by now. |
| **Total** | All planned hours (or sessions) for the whole activity. |
| **Last week** | Progress in the most recent week. |
| **So far** | Actual compared with expected, as a percentage bar. |

The **Course total** row adds up all activities. Use **Session** / **Hour** to change the measure.

![Course analytics, Performance tab, with one row per activity](/screenshots/deans/course-analytics.png)

### Weekly tab

A line chart with one line per activity. Each point is one week's progress. A drop to 0 means no class
was reported as held that week. Change **Performance metric** to switch between hours and sessions.

![Course analytics, Weekly tab, with a line chart per activity](/screenshots/deans/course-analytics-weekly.png)

### Survey tab

Three numbers from the qualitative survey: **Survey submissions**, **Avg. qualitative score** and
**Survey statements**. Click **Qualitative details** to see every statement with its average score and a
chart of how students answered (from **Strongly disagree** to **Strongly agree**).

![Course analytics, Survey tab](/screenshots/deans/course-analytics-survey.png)

![Qualitative details: average score and answer chart for one statement](/screenshots/deans/qualitative-details.png)

## How to see a course's activities and weeks

1. In the department menu, click **Courses**. Use **Search courses…** or the **Status** filter to find a course.
2. Click **Open** (or the course name).

   ![The Courses list with status badges and Open buttons](/screenshots/deans/courses-list.png)
3. The **Activities** tab lists each activity with its expected hours. Click **Weeks** to see every week.
4. The **Course details** tab shows the course title, code, group, year and semester, dates, remaining
   days, status, who created it, and the expected hours.

![Course details tab for a course](/screenshots/deans/course-details-tab.png)

On the **Weeks** page you can see, for each week, the planned sessions and hours, the actual hours
reported, and the performance bar. "Closed to late entries" means students can no longer report for
that week.

![The Weeks page of an activity](/screenshots/deans/activity-weeks.png)

::: info Changed expected hours
Sometimes a department head changes the expected hours of a course (for example after a holiday). When
that happens, **Course details** shows **Override status: Overridden**. Click the **history** icon next
to it to see who changed the hours, when, and why.
:::

## Other department pages

- **Students** — the students in the department and their details.
- **Instructors** — the staff (instructors) who belong to the department.
- **Curriculum Courses** — the department's list of approved courses (the "catalog") that running
  courses are made from.
- **Activity Types** — the kinds of activities the department uses, such as Lecture, Laboratory or Tutorial.

## Common questions

**I see "Course settings" on the course analytics page. Can I change the course?**
No. The button opens the course page, where you can read the details. Only the department head can edit.

**Why is an upcoming course showing an empty progress bar?**
The course has not started, so nothing is expected yet.

**Who do I contact if a course's data is wrong?**
The department head of that department. They manage courses, activities and weeks.
