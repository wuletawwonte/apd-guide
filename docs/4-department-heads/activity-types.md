# Activity types

An **activity type** is a kind of teaching session your department runs — for example **Lecture**, **Laboratory** or **Tutorial**. Activity types are the first thing to set up in a new department, because curriculum activities and course activities are built from them.

::: tip Who can do this
Department heads, for the departments they lead. The quality office can also manage activity types in every department.
:::

## See your activity types

1. In the menu, click **Activity Types**.
2. The list shows each type's **Name** and **Code**.
3. To find a type, type part of its name or code in the search box. Long lists are split into pages.

![Activity types list with Laboratory, Lecture and Tutorial, and the New activity type button marked in red](/screenshots/department-heads/p-activity-types-list.png)

Each row has **Open**, **Edit** and **Delete** buttons in the **Action** column.

## Add an activity type

1. On the **Activity types** page, click **New activity type**.
2. Type a **Name**, for example *Seminar*. Each name can be used only once in your department.
3. Type a short **Code**, for example *SEM*. Use capital letters and keep it short.
4. Click **Save**.

![New activity type form with name "Guide Seminar" and code "GSEM"](/screenshots/department-heads/p-activity-type-form.png)

APD shows the new activity type with the message **Activity type successfully created.**

![Activity type page showing name, code, created by and created at](/screenshots/department-heads/p-activity-type-saved.png)

::: info Why the code matters
APD uses the code to build activity codes, such as `SE-SWE-3101-LEC` (department, course, type). You also use the code in the curriculum import file. See [Curriculum courses](./curriculum-courses).
:::

## Edit an activity type

1. Click **Edit** in the list, or open the type and click **Edit**.
2. Change the **Name** or **Code**.
3. Click **Save**.

## Delete an activity type

1. Click **Delete** in the list, or open the type and click **Delete**.
2. Read the window. It says what goes with the type: its curriculum activities, and the course activities, weeks and informants built on them.
3. Click **Delete** to confirm.

::: info You can only delete what has no recorded history
When you click **Delete**, APD checks what would go with the record.

- If nothing was reported, rated or answered yet, the window lists what will also be deleted (for example **3 activities, 36 weeks and 12 informants**). Click **Delete** to confirm. This cannot be undone.
- If students already reported sessions, you gave weekly feedback, or students answered the survey, APD refuses: **This can't be deleted: it holds recorded history.** The window says what the record holds and what to do instead. Click **OK** to close it.
- APD also refuses when a course built from it is **submitted** to the quality office or **approved** (archived), even if nothing was reported. The window counts them as **submitted or approved courses**.

When a record can only be refused, its page does not show a **Delete** button at all.
:::

If the type is in use, keep it. You can rename it with **Edit** instead.

## Common questions

**What activity types should I create?**
Create one for each kind of session in your curriculum. Most departments need **Lecture**, **Laboratory** and **Tutorial**. Some add **Seminar**, **Practicum** or **Field work**.

**Can another department use my activity types?**
No. Each department has its own list.

## Next step

[Add curriculum courses](./curriculum-courses)
