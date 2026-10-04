# Statements and answer options

**Statements** are the questions in the qualitative survey. Each statement has **answer options** (for example *Strongly disagree* to *Strongly agree*). Each option has a **weight** from 0 to 100. APD uses the weights to calculate the course's qualitative score.

::: tip Who can do this
Education quality leads. Other staff can read the statements but cannot change them.
:::

## Open the statements

1. In the left menu, under **Quality office**, click **Qualitative analysis**.
2. The **Statements** tab opens. You see the survey title, its description, and every statement with its options.

![Statements tab with the survey title and the first statement](/screenshots/quality-lead/statements.png)

In each statement:

- The number (**1.**, **2.**, …) is its order in the survey.
- A red star (**\***) means the statement is **required**. Students must answer it.
- The number box on the right of each option is its **weight**.
- A note under the options, **"Students have answered this statement …"**, means students have answered it. See [Statements students have answered](#statements-students-have-answered).

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
2. A new card appears with two empty options.
3. Click **Write the statement or question students will rate** and type your question.
4. Click each **Option label** and type the answer.
5. Set each option's weight. Type a number from 0 to 100, or use the **−** and **+** buttons (they move by 10).
6. To add more options, click the **+** at the bottom left of the card.
7. To remove an option, point at it and click the red **minus** icon on its left. A statement needs at least **two** options, so the minus is greyed out when only two are left.
8. To make the statement required, click **Required**. A red star appears.
9. Click **Save**. Or click **Cancel** to throw it away.

![New statement card with the question, two options and their weights](/screenshots/quality-lead/new-statement-form.png)

The page reloads with **"Statement added."** and the new statement at the end of the list. If something is missing (for example the question or an option's text, or a weight above 100), the card stays open, lists what to fix, and keeps what you typed.

## Edit a statement

The tools of a statement appear when you **point at the card** with your mouse, or when you click or tab into it. On a phone or tablet they are always shown.

![A statement card with its tools showing: drag handle, add option, Save, Required and delete](/screenshots/quality-lead/statement-card-actions.png)

| To do this | Do this |
|------------|---------|
| Change the question or an option | Click the text and type. Then click **Save**. A green **"Statement saved."** message confirms it. |
| Change a weight | Type a new number or use **−** / **+**. Then click **Save**. (Not for options students have chosen, see below.) |
| Add an option | Click **+** at the bottom left. Type the text and weight. Click **Save**. |
| Remove an option | Point at the option and click the red **trash** icon on its left. The text turns red and crossed out. Click **Save**. (Not for options students have chosen, and at least two options must stay.) |
| Reorder options | Drag an option by the dotted handle on its left. Click **Save**. |
| Make it required / not required | Click **Required**. This saves at once. |
| Move the statement up or down | Drag the card by the dotted handle at the top middle. The new order saves at once. |

::: warning Always click Save
Text, weight and option changes are **not** saved until you click **Save** on that card. If you leave the page first, your changes are lost.
:::

## Statements students have answered

Students' answers are the survey's history. Once students have answered a statement, APD keeps past scores (including those of approved courses) from changing:

- An option students have chosen shows a **lock** icon instead of the trash icon. You can't remove it.
- Its weight is fixed: the box and the **−** / **+** buttons are greyed out.
- You can still fix the wording of the question and of every option, add new options, and change the weight of options nobody has chosen yet.
- The statement itself can't be deleted (see below).

## Delete a statement

1. Point at the statement card.
2. Click the red **trash** icon at the bottom right.
3. A window opens:
   - If no student has answered the statement, it asks **"Delete statement … ?"** and names the statement and its options. Click **Delete statement**, or **Cancel** to keep it. The page reloads with **"Statement deleted."**
   - If students have answered it, it says **"This statement can't be deleted"** and how many survey answers it has. Click **OK**. Reword the statement instead, or leave it as it is.

![Delete window for a statement nobody has answered yet](/screenshots/quality-lead/statement-delete-confirm.png)

## Download all statements (export)

You can save all statements and options as a CSV, Excel or PDF file. Use the CSV or Excel file as a backup, or to edit many statements at once. Use the PDF to print or share the survey.

1. On the **Statements** tab, click **Export** at the top right. A menu opens.
2. Choose a format:
   - **CSV**: plain text. Opens in Excel, LibreOffice or Google Sheets.
   - **Excel workbook** (`.xlsx`): one sheet, ready to sort and filter.
   - **PDF**: ready to print or share.
3. Your browser saves a file named like `survey-statements-2026-10-05.xlsx`.

The CSV and Excel files have the same columns as the import, so you can upload them again as they are.

![The Export CSV and Import from Excel buttons on the Statements tab](/screenshots/quality-lead/statements-header.png)

## Upload statements from Excel (import)

Use import to add many statements at once.

1. On the **Statements** tab, click **Import from Excel** at the top right.
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

Each statement needs at least two option rows.

4. Back in APD, under **Spreadsheet file**, click **Choose file** and pick your file (`.xlsx`, `.xlsm` or `.csv`, up to 5 MB).
5. Choose whether to tick **Replace all existing statements (and options) before import**:
   - **Ticked:** all current statements are removed and replaced by the file.
   - **Not ticked:** the new statements are added after the current ones.
6. Click **Import**.
7. A message says how many statements and options were imported, for example **"Imported 1 statement and 2 options."** If there is a problem, a red box lists what to fix. Fix the file and try again. If APD can't read the file at all, it asks for an `.xlsx` workbook or a `.csv` file with the columns above.

![Import statements page with the column table, template button and file field](/screenshots/quality-lead/import-statements.png)

::: info When "Replace" is greyed out
If students have already answered the survey, you cannot replace the statements. New rows are always added after the current ones. This protects the answers already given.
:::

::: tip Edit many statements at once
1. Export all statements as **CSV** or **Excel workbook**.
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
