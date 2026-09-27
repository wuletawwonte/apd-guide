# Departments

Departments are the main building blocks of your academy. Courses, activities, instructors and students all belong to a department. Each department needs a **department head** to run its courses.

::: tip Who can do this
Academy admins.
:::

## See all departments

1. In the left menu, click **Departments**.
2. The list shows each department's **Name**, whether it **Is active**, and its **Head**.
3. To find a department, type part of its name in **Search by department name** and press **Enter**.

![The list of departments](/screenshots/admins/departments-list.png)

In the **Action** column:

- The **pencil** icon opens the edit form.
- The **eye** icon opens the department page.

If a department has a label such as **1 head access request**, someone is waiting for you to confirm them as head. See [Head access requests](./head-access-requests).

## Add a department

1. Click **Departments** in the left menu.
2. Click **New Department**.
3. Fill in the form:
   - **Name** — the official department name, for example *Software Engineering*. Each name must be unique in your academy.
   - **Maximum year level** — the highest study year in this department. For a 5-year programme, enter `5`.
   - **Maximum semester** — how many semesters one year has. Usually `2`.
4. Leave **If active the Department will be active for use** turned on.
5. Click **Save**.

![The New Department form](/screenshots/admins/department-new.png)

APD opens the new department's page. It has no head yet, so your next step is to attach one.

::: info Why year level and semester matter
When a department head adds a curriculum course, APD offers year levels and semesters up to these numbers. Set them correctly so heads can place every course in the right year and semester.
:::

## Open a department

Click the department name (or the **eye** icon) in the list. The page shows:

- The department details: name, status, maximum year level, maximum semester, who created it and when.
- **Department head** — the person who runs the department, with their email and roles.
- **Head access requests** — only shown when someone is waiting for a decision.

![A department page with its department head](/screenshots/admins/department-show.png)

## Edit a department

1. Open the department, then click **Edit**. (Or click the **pencil** icon in the list.)
2. Change the name, year level, semester or status.
3. Click **Save**.

## Make a department inactive

APD does not delete departments, because courses and reports belong to them. When a department closes or merges:

1. Open the department and click **Edit**.
2. Turn off **If active the Department will be active for use**.
3. Click **Save**.

An inactive department disappears from menus and pickers (for example, the department switcher and the announcement audience list). Its data stays in APD. Turn the switch back on at any time to use it again.

## Attach a department head

The department head runs the department in APD: curriculum, courses, activities, weeks, students and instructors. A department with no head cannot run courses.

1. Open the department.
2. Under **Department head**, click **Attach department head**.
3. In **Choose head**, click the list and pick the person. Type part of a name to search.
4. Click **Attach**.

![The Choose head window with a staff member picked](/screenshots/admins/department-attach-head.png)

The person now shows under **Department head**, and gets the **Department head** role. APD sends them a notification.

![The department page after a head is attached](/screenshots/admins/department-after-attach.png)

::: tip Who can be a head?
Any **active staff member** of your academy, except the president. Deactivated accounts, students and people from other academies are not in the list.

One person can head more than one department. They switch between departments from the department switcher in the left menu.
:::

**The person does not have an account yet?** Click **New department head** to open the [new user form](./staff-users#add-a-staff-user). Create the account, then come back and attach them.

## Change or remove the head

When the head changes, detach the old head first, then attach the new one.

1. Open the department.
2. Under **Department head**, click **Detach head**.
3. In the **Are you sure?** window, click **Yes**.

![The window that asks you to confirm removing the head](/screenshots/admins/department-detach-head.png)

APD tells the person they are no longer head. They lose the **Department head** role, unless they still head another department.

Then follow [Attach a department head](#attach-a-department-head) for the new head.

::: tip
A new head can also ask for access themselves. You then only need to click **Grant access**. See [Head access requests](./head-access-requests).
:::

## Common questions

**Why can't I find a person in the Choose head list?**
They may be deactivated, be the president, or have a student account instead of a staff account. Check their account under [Users](./staff-users).

**Can I delete a department I created by mistake?**
No. Rename it, or make it inactive.

**Where do I add courses to a department?**
Courses are added by the department head, not the admin. See the department head guide.
