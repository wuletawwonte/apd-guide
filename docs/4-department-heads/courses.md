# Manage courses

A **course** is one run of a curriculum course for one term. For example, "Database Systems" in your catalogue becomes a course when you give it start and end dates for this semester. Each course holds its **activities**, **weeks** and **students**.

This page shows you how to find, create, edit and delete courses.

::: tip Who can do this
Department heads, for the departments they head. Other staff can open courses but cannot change them.
:::

## Open the course list

1. In the left menu, under your department, click **Courses**.
2. You see every course in the department. The newest running courses come first.

![The Courses page with search box, Status filter and New Course button](/screenshots/department-heads/c-courses-list.png)

- Type in **Search courses…** to find a course by name.
- Use the **Status** list to show only **Ongoing**, **Upcoming** or **Passed** courses.
- The small number next to a course name is how many activities it has.
- Click **Open** to see a course. **Edit** and **Delete** appear only when you are allowed to change the course.

### What the status means

The status comes from the course dates. You do not set it yourself.

| Status | Colour | Meaning |
|---|---|---|
| **Ongoing** | Green | Today is between the start date and the end date. |
| **Upcoming** | Blue | The course has not started yet. |
| **Passed** | Red | The end date is over. |

A grey **Inactive** badge means someone turned off the course's **active** switch.

## Create a course

Before you start, the course must exist in your **Curriculum Courses** catalogue. If the catalogue is empty, the form asks you to **Add a curriculum course** first. See [Curriculum courses](./curriculum-courses).

1. Go to **Courses** and click **New Course**.
2. Under **Course curriculum**, choose the curriculum course from the list.
3. **Group identifier** is optional. Use it when you run the same course more than once in a term, for example `A` and `B`. It appears after the course name, like "Database Systems (A)".
4. Under **Course schedule**, pick the **start date** and the **end date**. Include the whole last week.
5. **Expected hours** fills in by itself from the curriculum. You normally leave it as it is.
6. Leave the switch **If active the Course will be active for use** turned on.
7. Click **Save**.

![The new course form, filled in with a curriculum course, group identifier and dates](/screenshots/department-heads/c-course-form-filled.png)

After saving, the course page opens. Your next step is to [add activities](./activities).

::: warning Dates
- The end date must be **later than today**. You cannot create a course that has already ended.
- The end date must be after the start date.
- Two running courses from the same curriculum course cannot share the same group identifier.
:::

### Change the expected hours when you create a course

Sometimes a course needs more or fewer hours than the curriculum says (for example, because of holidays).

1. On the new course form, click **Override** next to **Expected hours**.
2. Type the new number of hours.
3. In **Reason for override**, explain why. Write at least 10 characters.
4. Click **Save**.

![The Override button turned on, showing the Reason for override box](/screenshots/department-heads/c-course-form-override.png)

The change is saved in a history log that the quality office and the dean can see.

## Understand the course page

When you open a course, you see three tabs:

| Tab | What it shows |
|---|---|
| **Activities** | The lectures, labs and other activities of the course. See [Activities](./activities). |
| **Students** | Students enrolled in the course. See [Students and enrollments](./students-and-enrollments). |
| **Course details** | Title, code, year and semester, dates, status and expected hours. |

The buttons at the top are **Go back**, **Edit**, **Close & submit** and **Delete**. You only see the buttons you are allowed to use.

![The Course details tab of a course](/screenshots/department-heads/c-course-details.png)

## Adjust the expected hours later

1. Open the course and click the **Course details** tab.
2. Next to **Expected hours**, click the small pencil.
3. A window called **Adjust Expected Hours** opens. It shows the curriculum hours and the current course hours.
4. Type the **New Expected Hours**.
5. Type a **Reason for Override** (at least 10 characters).
6. Click **Save Override**.

![The Adjust Expected Hours window with a new value and a reason](/screenshots/department-heads/c-adjust-expected-hours.png)

The new number must be different from the current one.

### See the override history

After an override, the details tab shows an **Overridden** badge next to **Override status**. You can compare the new **Expected hours** with the **Curriculum hours**.

![Expected hours 96, Curriculum hours 102 and the Overridden badge](/screenshots/department-heads/c-course-details-overridden.png)

Click the small clock next to the badge to see every change: the date, old value, new value, reason and who made it.

![The Expected Hour Override History window](/screenshots/department-heads/c-override-history.png)

## Edit a course

1. Open the course and click **Edit** (or click **Edit** in the course list).
2. Change the group identifier, dates or active switch.
3. Click **Save**.

![The edit course form](/screenshots/department-heads/c-course-edit.png)

You cannot change the curriculum course of an existing course. To change expected hours, use the pencil on the **Course details** tab (see above).

::: info When a course can no longer be edited
- A **Passed** course cannot be edited. Its activities cannot be added, changed or deleted either.
- An **Archived** course (approved by the quality office) is read-only for everyone.
:::

## Delete a course

1. Open the course and click **Delete**.
2. Read the message **Delete this course?** and click **Delete course** to confirm.

::: danger
Deleting cannot be undone. The course's activities, weeks and records go with it. Only delete a course that was created by mistake.
:::

## Course states and banners

Besides the date status, a course moves through an approval process with the quality office. A coloured banner at the top of the course page tells you where it is.

| Banner | What it means | What you do |
|---|---|---|
| *(no banner)* | The course is **open**. You are still running it. | Keep giving weekly feedback. |
| Grey **Not ready to close yet** | Some past weeks still have no performance feedback. | Give feedback on those weeks. |
| Blue **Submitted for approval** | You closed the course. It is waiting for the quality office. | Wait for their decision. |
| Yellow **Returned by the quality office** | The quality office sent it back. The banner shows their reason. | Fix the problem, then submit again. |
| Green **Archived** | The quality office approved it. It is now read-only. | Nothing. The record is final. |

Read the full steps in [Close and submit a course](./submit-for-approval).

## Common questions

**Why can't I see the New Course button?**
You are not the head of this department. Check the department name at the top of the left menu, or switch department.

**Why is the Edit button missing?**
The course has passed or it is archived. Passed and archived courses are locked to protect the records.

**Why is Expected hours grey on the form?**
It comes from the curriculum. Click **Override** only if you really need a different number.

Next: [Activities](./activities)
