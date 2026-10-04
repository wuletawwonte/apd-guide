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
2. The list shows each curriculum course with its code under the name, its **Year & term** and its **Hours**. The small number after the name is how many curriculum activities it has.
3. To search, type part of a name in the search box.
4. Long lists are split into pages. Use the page numbers at the bottom to see the rest.

![Curriculum course list with the search box, the export and import buttons and New curriculum course](/screenshots/department-heads/p-curriculum-list.png)

Each row has **Open**, **Edit** and **Delete** buttons in the **Action** column.

## Add a curriculum course

1. On the **Curriculum Courses** page, click **New curriculum course**.
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

1. Open the curriculum course (click its name, or **Open**).
2. Under **Curriculum activities**, click **New curriculum activity**.
3. Choose the **Activity type**. You can type to search the list.
4. Type the **Expected hours** for this activity.
5. Click **Save**.
6. Repeat for each kind of activity (lecture, lab, tutorial …).

![New curriculum activity form with the activity type chosen and expected hours filled in; the hours left are shown below](/screenshots/department-heads/p-curriculum-activity-form.png)

::: warning Activities share the course's hours
Under the hours box, APD shows how many hours are left, for example **38 of the course's 102 hours left for this activity** — the course hours not yet given to another activity. The activities together can't go over the curriculum course's **Expected hours**. If you type more than is left, APD says **"Expected hours can't be more than the … hours left"** and nothing is saved. If the curriculum really changed, raise the curriculum course's **Expected hours** first (**Edit**), then add the activity.
:::

APD gives each curriculum activity a code made of your department prefix, the course code and the activity type code — for example `SE-GUIDE-101-LEC`.

![Curriculum course page with details at the top and two curriculum activities listed below](/screenshots/department-heads/p-curriculum-show.png)

The **Hours** line on the curriculum course page shows the budget at a glance, for example **102 expected · 64 allocated · 38 left**. Each activity type can be used only once per curriculum course.

To change or remove a curriculum activity, use the pencil or the red bin in its row.

## Edit a curriculum course

1. Click **Edit** in the list, or open the curriculum course and click **Edit**.
2. Change what you need.
3. Click **Save**.

You cannot lower **Expected hours** below the hours its curriculum activities already use. Lower an activity's hours first.

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
The activity type codes in your file must already exist in your department. The import page lists your department's activity types under **Activity types in this department**.
:::

### The Catalog CSV tab

Use this when you only want the course list, without activities. The columns are `name`, `code`, `description`, `year_level`, `semester` and `expected_hours`. You add the curriculum activities by hand afterwards.

![Import page, Catalog CSV tab, with its column table and Download CSV template button](/screenshots/department-heads/p-curriculum-import-csv.png)

### After the import

APD shows a message such as **Imported 1 Curriculum Course (activities included where specified).** The new courses appear in the catalogue. If a row has a problem, APD shows a results table with **Failed** and the reason. The import is all or nothing: if any row has a problem, APD shows **Nothing was imported: fix the rows marked with errors and upload the file again.** and a results table with each row's error. Fix the file and upload the whole file again.

![Catalogue after import, with the new course at the top and a green success message](/screenshots/department-heads/p-curriculum-import-result.png)

## Export curriculum courses to a file

1. On the **Curriculum Courses** page, click the **Export** button (the download icon next to the import button). A menu opens.
2. Choose a format:
   - **CSV**: plain text. Opens in Excel, LibreOffice or Google Sheets.
   - **Excel workbook** (`.xlsx`): one sheet, ready to sort and filter.
   - **PDF**: ready to print or share.
3. Your browser saves a file with every curriculum course of the department.

::: tip Import the file again
The **CSV** file has the same columns as the catalog CSV import, so you can change it and upload it again. The Excel file can't be imported: the Excel import uses its own workbook template.
:::

![The Export all (CSV) button marked in red](/screenshots/department-heads/p-curriculum-export.png)

## Delete a curriculum course

1. Click **Delete** in the row, or open the curriculum course and click **Delete**.
2. Read the window. It says what goes with the curriculum course: its curriculum activities, and every live course made from it with their activities, weeks and enrolled students.
3. Click **Delete** to confirm.

::: info You can only delete what has no recorded history
When you click **Delete**, APD checks what would go with the record.

- If nothing was reported, rated or answered yet, the window lists what will also be deleted (for example **3 activities, 36 weeks and 12 informants**). Click **Delete** to confirm. This cannot be undone.
- If students already reported sessions, you gave weekly feedback, or students answered the survey, APD refuses: **This can't be deleted: it holds recorded history.** The window says what the record holds and what to do instead. Click **OK** to close it.
- APD also refuses when a course built from it is **submitted** to the quality office or **approved** (archived), even if nothing was reported. The window counts them as **submitted or approved courses**.

When a record can only be refused, its page does not show a **Delete** button at all.
:::

The same check applies when you delete a curriculum activity. If a curriculum course is in use, keep it; courses already built from it keep their records.

## Common questions

**I cannot add an activity to a course. The activity type list is empty.**
The curriculum course has no curriculum activities. Add them here first.

**It says "0 of the course's … hours left".**
All the course hours are already given to other activities, so a new activity can't be saved. Lower the hours of another activity, or, if the curriculum changed, **Edit** the curriculum course and raise its **Expected hours** first.

**The import says an activity type was not found.**
Check the spelling of the code in your file. Create the activity type first if it does not exist. See [Activity types](./activity-types).

## Related pages

- [Activity types](./activity-types)
- [Courses](./courses)
- [Activities](./activities)
