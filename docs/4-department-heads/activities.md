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

4. **Group number** is optional. Use it when a type is split into groups, for example Laboratory group 1 and group 2.
5. Pick the **Start date**. It must be inside the course dates.
6. Type the **Duration in weeks**. The note under the box tells you the maximum allowed.
7. Type the **Sessions per week** (how many times the class meets each week).
8. **Expected total hours** fills in from the curriculum. Leave it unless your department agreed on a change.
9. Click **Save**.

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
| Red | **Passed** | It has ended. |

Use **Weeks**, **Edit** and **Delete** on each row to work with the activity.

![The Activities tab of a course with three activities](/screenshots/department-heads/c-course-activities-tab.png)

## The activity page

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

The students appear in the **Informant students** list with their ID number.

![The Informant students list with one student](/screenshots/department-heads/c-activity-informants.png)

- Click the eye icon to open a student's profile.
- Click the red **−** to remove a student from the activity.
- **New student** lets you create a student who is not in APD yet.

More about students: [Students and enrollments](./students-and-enrollments).

## Edit or delete an activity

- To change dates, duration, sessions per week, hours or group number, click **Edit** on the activity page, change the values and click **Save**.
- To delete, click **Delete**, then **Delete activity**. This removes its weeks, sessions and enrollments. It cannot be undone.

::: warning
You cannot add, edit or delete activities in a course that has **passed** or is **archived**.
:::

## Common questions

**Why is the New activity button missing?**
The course has no curriculum activities yet, or the course has passed. Add curriculum activities first, or check the course status.

**A student says they cannot report for this activity. Why?**
Check two things: the student is on the activity's **Students** tab, and the week is open. See [Activity weeks](./activity-weeks).

Next: [Activity weeks](./activity-weeks)
