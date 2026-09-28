# Manage activities

An **activity** is one part of a course that meets every week, such as the **Lecture** or a **Laboratory** group. Students report class sessions against activities, and you track performance week by week.

This page shows you how to add an activity, give it an instructor and choose the students who report for it.

::: tip Who can do this
Department heads, for the departments they head.
:::

## Before you start

- The course must exist. See [Manage courses](./courses).
- The course's curriculum course must have at least one **curriculum activity** (for example Lecture or Laboratory). If it has none, the course page shows **Add curriculum activities first**. See [Curriculum courses](./curriculum-courses).

## Add an activity

1. Open the course. The **Activities** tab opens.
2. Click **New activity**.
3. Under **Curriculum activity**, choose the type, for example **Lecture** or **Laboratory**. You can type to search the list.

   ![The Curriculum activity list open, showing Lecture and Laboratory](/screenshots/department-heads/c-activity-type-dropdown.png)

4. **Group number** is optional. Use it when a type is split into groups, for example Laboratory group 1 and group 2. It must be a positive number, and you need it when the course already has an activity of the same type.
5. Pick the **Start date**. It must be inside the course dates.
6. Type the **Duration in weeks**. The note under the box tells you the maximum allowed. All the weeks must fit before the course end date.
7. Type the **Sessions per week** (how many times the class meets each week), from 1 to 50.
8. **Expected total hours** fills in from the curriculum. Leave it unless your department agreed on a change. It cannot be more than the hours the curriculum activity has left; the form shows how many.
9. Click **Save**. If a box is wrong, its message appears right under it.

![The new activity form filled in](/screenshots/department-heads/c-activity-form-filled.png)

APD now creates the **weeks** of the activity for you, one row per week, with planned sessions and hours. The **Weeks** tab opens so you can check them.

![A new activity with its weeks created automatically](/screenshots/department-heads/c-activity-created.png)

::: info Activity codes
APD gives every activity a code made of the department code, course code and type code, plus the group number. For example `SE-SWE-3102-LEC` or `SE-SWE-3101-LAB-2`. Students and instructors see this code too.
:::

## See all activities of a course

Open the course. The **Activities** tab lists each activity with its code, type and expected hours. A coloured dot shows its status:

| Dot | Status | Meaning |
|---|---|---|
| Green | **Active** | The activity is running this week. |
| Blue | **Upcoming** | It starts later. |
| Dark grey | **Passed** | It has ended. Point at the dot: it says **Finished**. |

Use **Weeks**, **Edit** and **Delete** on each row to work with the activity.

![The Activities tab of a course with three activities](/screenshots/department-heads/c-course-activities-tab.png)

## The activity page

The page title is the activity's type (and group), for example **Lecture** or **Laboratory · Group 2**. Point at the **ⓘ** beside it to see the activity code, course and department. The breadcrumb above it shows the course and the activity code, and links back to the course.

An activity has three tabs:

| Tab | What you do there |
|---|---|
| **Weeks** | Plan sessions and hours, allow late entries, give weekly feedback. See [Activity weeks](./activity-weeks). |
| **Students** | Choose the **informant students** who report class sessions. |
| **Activity details** | See dates, status and hours. Assign or remove the instructor. |

## Assign an instructor

Every activity should have an instructor so the right person gets the performance feedback. Your dashboard lists running activities that have none under **Activities with no instructor**.

1. Open the activity and click the **Activity details** tab.
2. Next to **Instructor** (it says **Not assigned**), click the **+** button.
3. In the **Assign instructor** window, choose a staff member. Type to filter by name.
4. Click **Assign instructor**.

![The Assign instructor window with an instructor selected](/screenshots/department-heads/c-assign-instructor-dialog.png)

The instructor's name now shows on the details tab.

![Activity details with the instructor assigned and the remove button highlighted](/screenshots/department-heads/c-activity-instructor-assigned.png)

::: tip
Only staff of this department appear in the list. If a person is missing, add them first on the **Instructors** page. See [Instructors](./instructors).
:::

### Remove or change the instructor

1. On the **Activity details** tab, click the red **−** button next to the instructor's name.
2. Click **Unassign** to confirm.
3. To give the activity to someone else, click **+** again and choose the new person.

## Choose the informant students

**Informant students** are the students who report whether each class was held, and for how long. Choose a few reliable students for each activity.

1. Open the activity and click the **Students** tab.
2. Click **Assign student**.
3. In **Select student**, search for and pick one or more students.
4. Click **Assign**.

![The Select student window with a student chosen](/screenshots/department-heads/c-activity-assign-informant-picked.png)

The students appear in the **Informant students** list with their ID number, and how each one is reporting:

| Column | What it shows |
|---|---|
| **Reports** | How many sessions this student has reported for this activity. |
| **Last report** | How long ago they last reported, or **Never**. |
| **Quiet** label | No report from this student in 14 days while the activity has unreported sessions. Check in with them, or assign someone else. |

Informants share each week, so one student may report little while another covers everything. APD only shows **Quiet** when sessions are actually missing.

![The Informant students list with one student](/screenshots/department-heads/c-activity-informants.png)

- Click the eye icon to open a student's profile.
- Click the red **−** to remove a student from the activity.
- **New student** lets you create a student who is not in APD yet.

::: tip Keep an eye on reporting
**My dashboard** lists activities with no informants, and activities whose last week got no reports, under **Reporting gaps**. See [Department heads — start here](./overview#my-dashboard-—-what-needs-you).
:::

More about students: [Students and enrollments](./students-and-enrollments).

## Edit or delete an activity

- To change dates, duration, sessions per week, hours or group number, click **Edit** on the activity page, change the values and click **Save**. When you change the schedule (start date, duration or sessions per week), APD rebuilds the activity's weeks. Once students reported sessions or you gave feedback, the schedule can no longer change; use the [Weeks tab](./activity-weeks) instead.
- To delete, click **Delete**. The window lists what goes with the activity (its weeks and informants). Click **Delete** to confirm. It cannot be undone.
- You cannot delete an activity once informants reported sessions or you gave weekly feedback on it. Remove the weeks that will not run instead (see [Activity weeks](./activity-weeks#remove-a-week-from-the-plan)), or leave the activity as it is.

::: warning
You cannot add, edit or delete activities in a course that has **passed**, is **submitted** for approval, or is **archived**.
:::

## Common questions

**Why is the New activity button missing?**
The course has no curriculum activities yet, or the course has passed. Add curriculum activities first, or check the course status.

**A student says they cannot report for this activity. Why?**
Check two things: the student is on the activity's **Students** tab, and the week is open. See [Activity weeks](./activity-weeks).

Next: [Activity weeks](./activity-weeks)
