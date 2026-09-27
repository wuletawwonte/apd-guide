# Statements and answer options

**Statements** are the questions in the qualitative survey. Each statement has **answer options** (for example *Strongly disagree* to *Strongly agree*). Each option has a **weight** from 0 to 100. APD uses the weights to calculate the course's qualitative score.

::: tip Who can do this
Education quality leads. Other staff can read the statements but cannot change them.
:::

## Open the statements

1. In the left menu, under **Extras**, click **Qualitative Analysis**.
2. The **Statements** tab opens. You see the survey title, its description, and every statement with its options.

![Statements tab with the survey title and the first statement](/screenshots/quality-lead/statements.png)

In each statement:

- The number (**1.**, **2.**, …) is its order in the survey.
- A red star (**\***) means the statement is **required**. Students must answer it.
- The number box on the right of each option is its **weight**.

## How weights work

The weight says how "good" an answer is, from **0** (worst) to **100** (best). When students answer, APD averages the weights of the chosen options. That average is the **qualitative score**.

| Option | Weight |
|--------|--------|
| Strongly disagree | 0 |
| Disagree | 25 |
| Neutral | 50 |
| Agree | 75 |
| Strongly agree | 100 |

**Example:** 4 students choose *Agree* (75) and 1 student chooses *Neutral* (50). The score is (75 + 75 + 75 + 75 + 50) ÷ 5 = **70%**.

::: tip Keep weights consistent
Use the same scale for every statement. Then scores can be compared across statements and courses.
:::

## Add a statement

1. On the **Statements** tab, scroll to the bottom and click **New statement**.
2. A new card appears with two options.
3. Click the text **Statement or Question** and type your question.
4. Click each **Option item** text and type the answer.
5. Set each option's weight. Type a number from 0 to 100, or use the **−** and **+** buttons (they move by 10).
6. To add more options, click the **+** at the bottom left of the card.
7. To remove an option, point at it and click the red **minus** icon on its left.
8. To make the statement required, click **Required**. A red star appears.
9. Click **Save**. Or click **Cancel** to throw it away.

![New statement card with the question, two options and their weights](/screenshots/quality-lead/new-statement-form.png)

The new statement is added at the end of the list.

## Edit a statement

The tools of a statement appear when you **point at the card** with your mouse.

![A statement card with its tools showing: drag handle, add option, Save, Required and delete](/screenshots/quality-lead/statement-card-actions.png)

| To do this | Do this |
|------------|---------|
| Change the question or an option | Click the text and type. Then click **Save**. |
| Change a weight | Type a new number or use **−** / **+**. Then click **Save**. |
| Add an option | Click **+** at the bottom left. Type the text and weight. Click **Save**. |
| Remove an option | Point at the option and click the red **trash** icon on its left. The text turns red and crossed out. Click **Save**. |
| Reorder options | Drag an option by the dotted handle on its left. Click **Save**. |
| Make it required / not required | Click **Required**. This saves at once. |
| Move the statement up or down | Drag the card by the dotted handle at the top middle. The new order saves at once. |

::: warning Always click Save
Text, weight and option changes are **not** saved until you click **Save** on that card. If you leave the page first, your changes are lost.
:::

## Delete a statement

1. Point at the statement card.
2. Click the red **trash** icon at the bottom right.
3. A window asks **Are you sure?** Click **Yes**. Click **Close** to keep the statement.

![Delete confirmation window with Close and Yes buttons](/screenshots/quality-lead/statement-delete-confirm.png)

::: danger Deleting removes answers
When you delete a statement, APD also deletes **all student answers** to it. Past scores will change. Do not delete statements in the middle of a term. If a question is no longer useful, plan the change for the next term.
:::

## Download all statements (export)

You can save all statements and options as a CSV file. Use it as a backup, or to edit many statements in Excel.

1. On the **Statements** tab, click the **download** icon at the top right (**Export all (CSV)**).
2. Your browser saves `survey_statements_export.csv`.

![The Export all (CSV) and Import from Excel icons on the Statements tab](/screenshots/quality-lead/statements-header.png)

## Upload statements from Excel (import)

Use import to add many statements at once.

1. On the **Statements** tab, click the **import** icon at the top right (**Import from Excel**).
2. Click **Download example template (.xlsx)** to get a sample file.
3. Fill in the file. Each row is **one answer option**. Use these columns:

| Column | Required | What to put |
|--------|----------|-------------|
| `statement_position` | Yes | The same number on every row of one question (1, 2, 3…). |
| `statement_content` | Yes | The question text. |
| `statement_required` | No | `true`/`false`, `yes`/`no`, or `1`/`0`. |
| `option_position` | Yes | The order of the answer (1, 2, 3…). |
| `option_content` | Yes | The answer text students see. |
| `weight` | Yes | A whole number from 0 to 100. |

4. Back in APD, under **Spreadsheet file**, click **Choose file** and pick your file (`.xlsx`, `.xlsm` or `.csv`, up to 5 MB).
5. Choose whether to tick **Replace all existing statements (and options) before import**:
   - **Ticked:** all current statements are removed and replaced by the file.
   - **Not ticked:** the new statements are added after the current ones.
6. Click **Import**.
7. A message says how many statements and options were imported. If there is a problem, a red box lists what to fix. Fix the file and try again.

![Import statements page with the column table, template button and file field](/screenshots/quality-lead/import-statements.png)

::: info When "Replace" is greyed out
If students have already answered the survey, you cannot replace the statements. New rows are always added after the current ones. This protects the answers already given.
:::

::: tip Edit many statements at once
1. Export all statements (CSV).
2. Change the file in Excel.
3. Import it with **Replace all existing statements** ticked.

This works only while the survey has no answers yet.
:::

## Tips for good statements

- Ask about **one thing** per statement.
- Use simple words that every student understands.
- Write statements so that "agree" is the good answer. Then high weights always mean good teaching.
- Keep the survey short. Six to ten statements is usually enough.
- Mark a statement **required** only when you really need every student to answer it.

Back: [Survey settings and checkpoints](./qualitative-survey-setup) · Next: [View departments and curriculum](./viewing-departments)
