# Academy settings

Academy settings are a few values that apply to your whole academy. They affect your academy only, not other academies of the university.

::: tip Who can do this
Academy admins.
:::

## Open the settings

1. In the left menu, click **Settings**.
2. The page lists each setting with a short explanation, a box for the value, and its own **Save** button. The name of your academy is shown at the top right.

![The Academy settings page](/screenshots/admins/settings.png)

## Change a setting

1. Change the value in the box of **one** setting.
2. Click the **Save** button on the **same row**.
3. APD shows **Settings updated successfully.**

Each row saves on its own. If you change two rows, click **Save** on each of them.

::: warning Change settings with care
Settings affect everyone in your academy. Change one thing at a time, and tell your colleagues when you change something they will notice, such as the date format.
:::

## What each setting means

### Date format

How dates look in most places in APD: on courses, activities, weeks, analytics and lists. The value is a pattern made of codes:

| Code | Means | Example |
|------|-------|---------|
| `%d` | Day of the month, two digits | `07` |
| `%b` | Short month name | `Sep` |
| `%B` | Full month name | `September` |
| `%m` | Month number, two digits | `09` |
| `%Y` | Year, four digits | `2026` |

Other characters (spaces, `/`, `-`, `,`) are shown as they are. Some patterns you can use:

| Pattern | Shows |
|---------|-------|
| `%d %b %Y` (default) | 27 Sep 2026 |
| `%d/%m/%Y` | 27/09/2026 |
| `%B %d, %Y` | September 27, 2026 |
| `%Y-%m-%d` | 2026-09-27 |

::: tip
After you save, open any course list to check that dates look right. If they look strange, set the value back to `%d %b %Y`.
:::

### Default password for new users

A starting password saved for your academy.

::: info
New accounts made by admins and department heads currently get a random temporary password that APD emails to the person, so this value is not used for them. Keep it set to a strong value anyway, and never share it.
:::

### Email domain

Your academy's main email domain, for example `amu.edu.et`. It records which email addresses your staff and students are expected to use.

### Maximum year level

The highest study year in your academy, for example `6` if your longest programme has six years.

Each department also has its own **Maximum year level** (see [Departments](./departments#add-a-department)). The department value is the one used when heads plan curriculum courses.

### Self-registration

Choose **Enabled** or **Disabled**. This records whether students and staff are expected to create their own accounts with the **Sign up** link on the sign-in page, instead of being added by an admin or department head.

::: info
In the current version of APD, the **Sign up** link on the sign-in page is always shown. If your academy does not want self sign-up, tell users to wait for an account from their department head or admin, and check new accounts regularly under [Users](./staff-users) and [Students](./students).
:::

## Common questions

**I don't see any settings.**
Settings are created when the APD support team sets up your academy. If the page says **No settings yet**, contact APD support.

**Can I change the academy's name or web address?**
No. Only the APD support team can change these.
