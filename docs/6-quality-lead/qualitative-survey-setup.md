# Survey settings and checkpoints

APD has one **qualitative survey** for your whole academy. Students use it to rate how their courses are taught. This page shows you how to switch the survey on or off, change its title, and choose **when** students answer it (the **checkpoints**).

To write the questions themselves, see [Statements and answer options](./statements-and-options).

::: tip Who can do this
Education quality leads. Other staff can open **Qualitative Analysis** and read the survey, but they cannot change it.
:::

## How the survey works

1. You write the survey **statements** (questions) and their answer options.
2. You add **checkpoints**. A checkpoint is a point in the life of every course, given as a percentage. For example, **50%** means "halfway through the course".
3. For each course, APD finds the date at that percentage. It then opens the survey for the whole **Monday–Sunday week** that contains that date.
4. On the **Monday** of that week, students enrolled in the course get a reminder. They can answer **once** per course during that week.
5. The results appear in each course's analytics and in the **Avg qualitative %** column of the dashboards.

**Example:** a course runs from 1 March to 30 June. A 50% checkpoint falls around 30 April. Students can answer during the Monday–Sunday week that contains 30 April.

## Open Qualitative Analysis

1. In the left menu, under **Extras**, click **Qualitative Analysis**.
2. You see three tabs: **Statements**, **Checkpoints** and **Settings**.

## See the survey settings

1. In **Qualitative Analysis**, click the **Settings** tab.
2. The **Current configuration** card shows:

| Item | What it means |
|------|---------------|
| **Title** | The survey name students see. |
| **Description** | A short text under the title. |
| **Status** | **Accepting responses** (the survey is on) or **Not accepting responses** (the survey is off). |
| **Submission window** | A number of days saved with the survey. |
| **Last updated** | When the settings were last changed. |

![Survey settings page showing the current configuration](/screenshots/quality-lead/survey-settings.png)

## Change the survey settings

1. On the **Settings** tab, click **Edit settings**.
2. Change the fields you need:
   - **Title** — required.
   - **Description** — optional.
   - **Open days** (under **Submission Window**) — must be a number above 0.
   - **Survey status** — turn the switch **on** to accept responses. Turn it **off** to stop the survey.
3. Click **Save**. Or click **Cancel** to leave without changes.

![Edit survey settings form with title, description, open days and status](/screenshots/quality-lead/survey-settings-edit.png)

::: warning Turning the survey off
When the status is off, students cannot answer at all, even during a checkpoint week, and they get no survey reminders. Turn it off only when you really want to pause the survey, for example while you rewrite the questions.
:::

::: info About "Open days"
The checkpoint week (Monday to Sunday) decides when students can answer. The **Open days** number is saved with the survey, but the checkpoint week is what controls the timing.
:::

::: tip Quick title change
You can also change the title and description on the **Statements** tab. Click the title text, type, then click **Save title & description**.
:::

## See the checkpoints

1. In **Qualitative Analysis**, click the **Checkpoints** tab.
2. The page shows:
   - **How timing works** — a short reminder of the three steps.
   - **Live example** — the dates are calculated using one running course, so you can see real dates.
   - A table of checkpoints. **Milestone** is the percentage. **Survey week (Mon–Sun)** shows the week the survey opens for the example course.

![Checkpoints tab with 25%, 50% and 75% milestones and their survey weeks](/screenshots/quality-lead/checkpoints.png)

## Add a checkpoint

1. On the **Checkpoints** tab, click **Add checkpoint**.
2. In **Completion percentage**, type a whole number from **1** to **100**. For example, `25` for a quarter of the way through each course.
3. Click **Save checkpoint**.

![New survey checkpoint form with the completion percentage field](/screenshots/quality-lead/checkpoint-form.png)

::: info Rules for checkpoints
- Each percentage can be used only once. You cannot have two 50% checkpoints.
- Checkpoints are listed from the smallest to the largest percentage.
- Checkpoints apply to **all** courses in your academy.
:::

## Change or delete a checkpoint

- **Change:** click the **pencil** icon on the checkpoint row. Change the percentage and click **Save checkpoint**.
- **Delete:** click the red **trash** icon, then confirm in the window that opens.

::: warning Change checkpoints between terms
Moving or deleting a checkpoint in the middle of a term changes when students can answer. Students who were about to answer may lose their chance. Plan checkpoint changes before the term starts.
:::

## A good setup

Most academies use three checkpoints: **25%**, **50%** and **75%**. This gives early, middle and late feedback for every course.

## Common questions

**A student says the survey is not open. Why?**
Check these things:
- The survey status is **Accepting responses**.
- Today is inside a checkpoint week for that student's course.
- The student has not already answered for this checkpoint and course.
- The student is enrolled in the course.

**Where do students answer the survey?**
In the student area, under **Qualitative survey**. See the [student guide](../2-students/getting-started).

Back: [Approve or return courses](./course-approvals) · Next: [Statements and answer options](./statements-and-options)
