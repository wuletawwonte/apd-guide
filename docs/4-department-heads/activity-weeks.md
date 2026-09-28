# Plan and manage activity weeks

Every activity is split into **weeks**. Each week has a plan (how many sessions and hours should happen) and a record of what really happened (reported by informant students). You use the **Weeks** tab to adjust the plan, remove or add weeks, and let students report late.

::: tip Who can do this
Department heads can change weeks. Instructors and other staff can look at them.
:::

## Open the Weeks tab

1. Open a course, then click an activity code (or click **Weeks** on its row).
2. The **Weeks** tab opens.

![The Weeks tab of an activity with real reports and feedback](/screenshots/department-heads/c-weeks-real.png)

### What each column means

| Column | Meaning |
|---|---|
| **Week** | Week name and its dates, shown short (for example **10–16 Aug**). Point at the dates to see them in full, in your academy's date format. The coloured dot shows the week's status. |
| **Planned sessions** | How many class sessions should happen that week. |
| **Planned hours** | How many hours of teaching should happen that week. |
| **Reported** | How many planned sessions informants reported, held or not, for example **1/2**. See [Reported sessions](#reported-sessions). |
| **Actual hours** (or **Actual sessions**) | What informant students reported. |
| **Performance** | Actual compared with planned, as a percentage bar. An orange **Over plan** label means more was reported than planned: check the planned figures for that week. |
| **Feedback** | Your weekly rating, or a **Give feedback** button. See [Weekly performance feedback](./performance-feedback). |
| **Actions** | **Remove**, **Restore**, **Allow late entries** or **Stop late entries**. On narrower screens (below about 1280 pixels wide) these show as icons only; point at an icon to see what it does. |

The **Total** row at the bottom adds up the planned sessions and hours. All weeks of the activity are on one page.

### Week colours

| Dot | Status | Meaning |
|---|---|---|
| Green | **Active** | This is the current week. Students can report now. |
| Blue | **Upcoming** | The week has not started. Nobody can report yet. |
| Dark grey | **Passed** | The week is over (the dot's label says **Finished**). It is closed to students unless you allow late entries. |
| Grey, crossed out | **Removed** | You removed the week from the plan. |

### Performance bar colours

| Colour | Performance |
|---|---|
| Red | Below 50% |
| Yellow | 50% to 79% |
| Green | 80% or more |

### Reported sessions

Performance can only count the sessions informants reported. If they forget, a week looks worse than it was. The **Reported** column tells the two apart:

| You see | What it means | What to do |
|---|---|---|
| **2/2** in grey | Every planned session was reported. The performance beside it can be trusted. | Nothing. |
| **1/2** in orange or red | Some sessions were never reported. | Remind the informants, or [allow late entries](#let-students-report-late). |
| A **No reports** label instead of a performance bar | The week ended and nobody reported at all. | Check with the informants before you rate the week. It still counts as 0% in the activity's score. |

Point at a reported number to read what it means. Current weeks show the number too, but reports can still come in until Sunday.

::: tip Low performance with full reports is real
If **Reported** is 2/2 but performance is low, the classes really were missed or short. If performance is low and **Reported** is low too, start by asking the informants.
:::

### Measure by hour or by session

Use the **Measure by** list at the top to switch between **Hour** and **Session**. The **Actual** and **Performance** columns change to match.

## Change the planned sessions and hours

APD fills in the plan when you create the activity. You can change it week by week.

1. On the **Weeks** tab, type new numbers in the **Planned sessions** or **Planned hours** boxes.
2. A yellow bar appears: **Unsaved changes to this plan.**
3. Click **Save changes**. Or click **Discard** to undo your typing.

![The yellow Unsaved changes bar with Discard and Save changes buttons](/screenshots/department-heads/c-weeks-unsaved-bar.png)

::: warning Limits
- The total planned hours cannot be more than the hours set for the curriculum activity.
- The total planned sessions cannot be more than **sessions per week × number of weeks**.

- Planned sessions cannot be lower than the sessions already reported for that week.
- Every box must hold a whole number. A blank or non-number box is reported by week.

If you go over a limit, a red message **Could not save changes** explains the problem and nothing is saved. The numbers you typed stay in the boxes so you can fix them.
:::

If you try to leave the page with unsaved changes, APD warns you first. When you save, the activity's total hours update to match the new plan.

You cannot change the plan after the course has passed.

## Remove a week from the plan

Remove a week when no class will happen, for example during an exam break or a public holiday.

1. On the week's row, click **Remove**.
2. The week turns grey and is crossed out. Its planned sessions and hours become 0.

![A removed week shown crossed out, with the Restore button highlighted](/screenshots/department-heads/c-week-voided.png)

A removed week does not count against performance and does not need feedback.

::: info
You can only remove a week that has **no reported class sessions**. If students already reported for that week, the **Remove** button does not appear, and APD refuses the removal even from a page that was opened earlier.
:::

### Bring a removed week back

Click **Restore** on the grey row. The week returns to the plan with the default sessions and hours for its place in the activity.

## Add a week

Use this when an activity needs one more week at the end.

1. On the **Weeks** tab, click **Add week**.

   ![The Add week button at the top right of the Weeks tab](/screenshots/department-heads/c-add-week-button.png)

2. **Add activity week** opens. The grey box at the top shows the new week's name and dates, and how much of the plan is left, for example **16 of 48 hours and 2 sessions left to plan**.
3. Type the **Sessions in week** and **Expected hours**.
4. Click **Save**. If something is wrong, the window stays open and shows the error under the box.

![The Add activity week window](/screenshots/department-heads/c-add-week-modal.png)

The new week is added after the last week. The activity's duration grows by one week.

::: info Why is Add week greyed out?
The weeks already reach the course end date. You cannot add a week past the end of the course. Point at the button to see the last allowed date. You also cannot add a week once the course has passed.
:::

## Let students report late

When a week ends, students can no longer report for it. If students missed a week for a good reason, you can open it again for a short time.

1. Find the passed week (dark grey dot). Its **Actions** show **Allow late entries**.
2. Click **Allow late entries**.
3. Read the message **Allow late submissions?** and click **Confirm**.

![The Allow late submissions window](/screenshots/department-heads/c-week-allow-late-dialog.png)

The week stays open **until the end of the current week (Sunday)**. The button changes to **Stop late entries**.

![Week 2 open to late entries, with the Stop late entries button highlighted](/screenshots/department-heads/c-week-late-open.png)

To close it earlier, click **Stop late entries**, then **Confirm**. Students can no longer submit for that week.

::: tip
Only the head of **this** department can open or close its weeks, and not after the quality office approves (archives) the course. Everyone else, including heads of other departments, sees a label instead: **Open to late entries** or **Closed to late entries**.
:::

## Common questions

**Why can't I type in the planned boxes?**
The course has passed, the course is archived, or the week was removed. Removed weeks must be restored first.

**Why is performance 0% for this week?**
No informant student has reported a session yet: an ended week then shows **No reports**. Check that the activity has informant students and that the week is open. See [Activities](./activities). Your dashboard also lists these weeks under **Reporting gaps**.

Next: [Weekly performance feedback](./performance-feedback)
