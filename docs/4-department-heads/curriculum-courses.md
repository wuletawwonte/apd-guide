# Curriculum courses

The **curriculum** is your department's course catalogue. Each **curriculum course** describes a course the way the curriculum defines it: its name, code, year, semester and total hours. It does not belong to any one term.

Each curriculum course is made of **curriculum activities** — for example 48 hours of lecture and 16 hours of lab.

When a new term starts, you create a live **course** from a curriculum course. APD copies the plan from the catalogue. See [Courses](./courses).

::: tip Who can do this
Department heads, for the departments they lead. The quality office can also manage the curriculum of every department in the academy.
:::

::: info Before you start
You need at least one **activity type** (for example Lecture, Laboratory). If you do not have any, create them first. See [Activity types](./activity-types).
:::

## See the catalogue

1. In the menu, click **Curriculum Courses**.
2. The list shows each curriculum course with its **Code**, **Year & term** and **Hours**. The small number after the name is how many curriculum activities it has.
3. To search, type part of a name in the search box.
4. Use **Rows per page** at the bottom to show more rows.

![Curriculum course catalogue with the New Curriculum Course button marked in red](/screenshots/department-heads/p-curriculum-list.png)

The icons at the end of each row are **edit** (pencil), **view** (eye) and **delete** (red bin).

## Add a curriculum course

1. On the **Curriculum Courses** page, click **New Curriculum Course**.
2. Fill in **Curriculum Course data**:
   - **Name** — for example *Database Systems*. It must be unique in your department.
   - **Code** — for example *SWE-3102*. It must also be unique in your department.
   - **Description** — optional.
3. Fill in **Curriculum Course target**:
   - **Year level** — the year of study, for example *2nd year*.
   - **Semester** — **I** or **II**. Leave it empty if it does not apply.
   - **Expected hours** — the total teaching hours for the whole course.
4. Click **Save**.

![New curriculum course form with name, code, description, year level, semester and expected hours](/screenshots/department-heads/p-curriculum-form.png)

APD opens the new curriculum course. It has no activities yet.

## Add curriculum activities

A curriculum course needs at least one curriculum activity. Without them, you cannot add activities to a live course later.

1. Open the curriculum course (click its name, or the eye icon).
2. Under **Curriculum activities**, click **New curriculum activity**.
3. Choose the **Activity type**. You can type to search the list.
4. Type the **Expected hours** for this activity.
5. Click **Save**.
6. Repeat for each kind of activity (lecture, lab, tutorial …).

![New curriculum activity form with the activity type chosen and expected hours filled in; "Remaining Expected Hours" is shown below](/screenshots/department-heads/p-curriculum-activity-form.png)

::: warning The hours must add up
Under the hours box, APD shows **Remaining Expected Hours**. The hours of all activities together cannot be more than the curriculum course's **Expected hours**. If you need more, first edit the curriculum course and raise its expected hours.
:::

APD gives each curriculum activity a code made of your department prefix, the course code and the activity type code — for example `SE-GUIDE-101-LEC`.

![Curriculum course page with details at the top and two curriculum activities listed below](/screenshots/department-heads/p-curriculum-show.png)

To change or remove a curriculum activity, use the pencil or the red bin in its row.

## Edit a curriculum course

1. Click the pencil icon in the list, or open the curriculum course and click **Edit**.
2. Change what you need.
3. Click **Save**.

Changes to the catalogue are the plan for future terms. Talk to your quality office before renaming a course that is already running.

## Import many curriculum courses from a file

If you have your curriculum in Excel, you can import it instead of typing each course.

1. On the **Curriculum Courses** page, click the **Import (CSV / Excel)** button (the icon on the far right, next to the download icon).
2. Choose a tab:
   - **Workbook** — courses **and** their activities in one file (`.xlsx` or `.csv`).
   - **Catalog CSV** — courses only, one row per course, no activities (`.csv`).
3. Click **Download example template** (Workbook) or **Download CSV template** (Catalog CSV). Open it and fill it in, keeping the first row (the column names) as it is.
4. Save your file.
5. Click **Choose file**, pick your file, and click **Import workbook** or **Import Curriculum Courses**.

![Import page, Workbook tab, with a table explaining each column and the Download example template button](/screenshots/department-heads/p-curriculum-import-workbook.png)

![The file picker and the Import workbook button](/screenshots/department-heads/p-curriculum-import-workbook-upload.png)

### How to fill in the Workbook file

Each row is one activity of a course. If a course has two activities, it has two rows with the same course details.

| Column | Required | What to write |
|--------|----------|---------------|
| `course_code` | Yes | The course code. Repeat it on every row of the same course. |
| `course_name` | Yes | The course name. Same on every row of the course. |
| `course_description` | No | A short description. |
| `year_level` | Yes | A number: 1, 2, 3 … |
| `semester` | Yes | The semester. |
| `course_expected_hours` | Yes | Total hours of the course. |
| `activity_type_code` | For activity rows | The activity type **code** from your department, for example `LEC` or `LAB`. |
| `activity_type_name` | — | You can use the type **name** instead of the code. |
| `activity_expected_hours` | For activity rows | Hours for this activity. |

Example — one course with a lecture and a lab:

| course_code | course_name | year_level | semester | course_expected_hours | activity_type_code | activity_expected_hours |
|---|---|---|---|---|---|---|
| GUIDE-201 | Guide Imported Course | 2 | 2 | 60 | LEC | 40 |
| GUIDE-201 | Guide Imported Course | 2 | 2 | 60 | LAB | 20 |

::: tip Write the semester as a number
The template shows words like *Fall*. To match the **I / II** semesters used in the rest of APD, write `1` or `2` in the `semester` column.
:::

::: warning Activity types must exist first
The activity type codes in your file must already exist in your department. The import page lists your department's activity types under **Activity types in this department**. Also, the activity hours of a course cannot add up to more than its `course_expected_hours`.
:::

### The Catalog CSV tab

Use this when you only want the course list, without activities. The columns are `name`, `code`, `description`, `year_level`, `semester` and `expected_hours`. You add the curriculum activities by hand afterwards.

![Import page, Catalog CSV tab, with its column table and Download CSV template button](/screenshots/department-heads/p-curriculum-import-csv.png)

### After the import

APD shows a message such as **Imported 1 Curriculum Course (activities included where specified).** The new courses appear in the catalogue. If a row has a problem, APD shows a results table with **Failed** and the reason. Fix the file and import again — the rows that worked are already saved, so remove them from the file first.

![Catalogue after import, with the new course at the top and a green success message](/screenshots/department-heads/p-curriculum-import-result.png)

## Export curriculum courses to a file

1. On the **Curriculum Courses** page, tick the box in front of each course you want. Tick the box in the header to select every course on the page.
2. Click the **Export selected (CSV)** button (the download icon next to **New Curriculum Course**).
3. Your browser saves a `.csv` file.

![Two curriculum courses ticked and the Export selected (CSV) button marked in red](/screenshots/department-heads/p-curriculum-export.png)

## Delete a curriculum course

1. Click the red bin in the row, or open the curriculum course and click **Delete**.
2. Confirm.

::: danger Deleting a curriculum course also deletes its courses
Every live course made from this curriculum course is deleted too — with its activities, weeks, reports and feedback. The same is true when you delete a curriculum activity: the activities made from it are deleted. Only delete catalogue entries that were created by mistake and never used.
:::

## Common questions

**I cannot add an activity to a course. The activity type list is empty.**
The curriculum course has no curriculum activities. Add them here first.

**"Remaining Expected Hours" is 0.**
All the course hours are already used by other activities. Edit the curriculum course to raise its **Expected hours**, or lower the hours of another activity.

**The import says an activity type was not found.**
Check the spelling of the code in your file. Create the activity type first if it does not exist. See [Activity types](./activity-types).

## Related pages

- [Activity types](./activity-types)
- [Courses](./courses)
- [Activities](./activities)
