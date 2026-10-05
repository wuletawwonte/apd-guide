# Staff users

Staff users are everyone who is not a student: instructors, department heads, quality leads, deans and admins. On this page you add staff accounts, give roles, reset passwords, give temporary passwords and close accounts.

::: tip Who can do this
Academy admins. (Department heads can also add instructors to their own department.)
:::

## See all staff users

1. In the left menu, click **Users**.
2. The list shows each person's **Name** and email, **Department**, and whether the account **Is active**.

![The list of staff users](/screenshots/admins/users-list.png)

To find people:

- Type a name or email in **Search by name or email** and press **Enter**.
- Pick a department in **All departments**, or a role in **All roles**.
- Click the **filter** button on the right to show **All users**, **Active only** or **Inactive only**. The same menu also filters by department and role.

![The filter menu with status, department and role options](/screenshots/admins/users-filter.png)

In the **Action** column, the **pencil** edits the account, the **eye** opens it, the red **bin** deactivates it, and the green **arrow** restores a deactivated account.

::: info
Your own account is not in this list. To change your own name, photo or password, use **My Profile** in the menu under your name (top right).
:::

## Add a staff user

1. Click **Users** in the left menu.
2. Click **New User**.
3. **Department** — pick the department the person works in. This is optional, but instructors need a department so a head can give them activities to teach. Type to search the list.
4. **User data** — enter the **First name**, **Last name** and **Email**. Use the person's work email. They will sign in with it.
5. **Roles & permissions** — tick any extra role the person needs. See [Roles explained](#roles-explained) below.
6. Click **Save**.

![The New User form, top part](/screenshots/admins/user-new-filled.png)

![The Roles & permissions part of the form](/screenshots/admins/user-new.png)

What happens next:

1. APD creates the account with a **temporary password**.
2. APD emails the person their email address, their temporary password and their roles.
3. The first time they sign in, APD asks them to choose a new password.

People you give an academy-wide role (**Education quality lead**, **Academy dean** or **Academy admin**) also get a notification in APD, for example **You have been granted the Dean role in APD.** The same happens when you add one of these roles to an existing account later. Existing accounts also get an email and, if connected, a Telegram message.

::: tip The person did not get the email?
Ask them to check their spam folder. Then open their account and use **Account → Email reset link** to send a new link, or [give them a temporary password](#give-someone-a-temporary-password).

If the email could not be sent at all, APD still creates the account and tells you: **… was created, but the sign-in email to … could not be sent. Use Set temporary password to give them a password.**
:::

::: info Email addresses
An email needs a full domain, for example `name@amu.edu.et`. An address like `name@amu` is refused with **Email is invalid**.
:::

## Roles explained

Every staff user has the **Regular user** role. You can add one or more of the other roles.

| Role | What the person can do | How to give it |
|------|------------------------|----------------|
| **Regular user** | Basic staff access: see their department's courses and activities, their own teaching activities, and send feedback. Instructors only need this role. | Always on. It cannot be removed. |
| **Department head** | Runs one or more departments: curriculum, courses, activities, weeks, students and instructors. | Not ticked here. Attach the person as head on the [department page](./departments#attach-a-department-head). |
| **Education quality lead** | Owns the qualitative survey (statements, checkpoints), approves courses, and can manage announcements. Works across the whole academy. | Tick it on the user form. |
| **Academy dean** | Sees the dean dashboard with every department's performance, and can view each department. Works across the whole academy. | Tick it on the user form. |
| **Academy admin** | Full control of the academy: departments, users, students, settings and announcements. Marked **Elevated**. | Tick it on the user form. |

::: warning Rules for roles
- **Education quality lead** and **Academy dean** cannot be given to the same person. Pick one.
- Give **Academy admin** only to people who really need it. They can change every account in the academy.
- The **President** role is given only by the APD support team. See [President accounts](#president-accounts).
:::

## Open a staff user

Click a name in the list. The page shows:

- Name, email, status (**Active** or **Inactive**), department and roles.
- **Last sign-in**, **Total logins** and **Member since**.
- **Departments headed**, if the person is a department head.

![A staff user's page with the Account menu open](/screenshots/admins/user-account-menu.png)

## Edit a staff user

Use this to fix a name or email, change the department, or change roles.

1. Open the user, then click **Edit**. (Or click the **pencil** in the list.)
2. Make your changes.
3. Click **Save**.

![The Edit user form](/screenshots/admins/user-edit.png)

If the person is a department head, the **Department head** box is ticked and greyed out. To remove it, [detach them from the department](./departments#change-or-remove-the-head).

## Reset a password

Use this when someone forgets their password or never received the welcome email.

1. Open the user.
2. Click **Account**, then **Email reset link**.
3. Click **Confirm**.

APD emails the person a link to choose a new password. You never see their password.

::: tip
People can also reset their own password with **Forgot your password?** on the sign-in page.
:::

## Give someone a temporary password

Use this when the person cannot get the reset email, for example because their email does not work. You see a new password once and share it with them yourself.

1. Open the user.
2. Click **Account**, then **Set temporary password**.
3. Read the message and click **Confirm**. The person's current password stops working, and they are signed out on every device.
4. APD shows the window **Temporary password for** the person. Click **Copy** to copy the password.
5. Give the password to the person in person or by phone. Then click **Done**.

![The Temporary password window with the Copy button](/screenshots/admins/temporary-password.png)

The password is shown **only once**. When the person signs in with it, APD asks them to choose their own password.

::: info
- You cannot set a temporary password for your own account, a deactivated account, or a president's account.
- Setting a temporary password also confirms an account that is [awaiting email confirmation](#a-sign-up-is-awaiting-email-confirmation).
- Every temporary password you set is recorded in the [Audit log](./audit-log).
:::

## A sign-up is awaiting email confirmation

People who sign up themselves must confirm their email before they can sign in. Until they do:

- In the **Users** list, a yellow **Awaiting email confirmation** label shows under their name.
- On their page, a message says they signed up but have not confirmed their email yet.
- They are not counted in reports and dashboard numbers.

![A staff user's page with the Awaiting email confirmation message](/screenshots/admins/user-awaiting-confirmation.png)

If the person cannot find the email:

1. Open the user.
2. Click **Account**, then **Resend confirmation**.
3. Click **Confirm**. APD shows **Sent a new confirmation link to** their email.

Or [give them a temporary password](#give-someone-a-temporary-password): this confirms the account too.

::: warning
Sign-ups that are not confirmed within **7 days** are deleted automatically. The person can then sign up again with the same email.
:::

## Deactivate a staff user

Deactivate an account when someone leaves the academy or should stop using APD. Their history (courses, feedback, reports) stays.

1. Open the user.
2. Click **Account**, then **Deactivate**.
3. Click **OK** to confirm.

You can also click the red **bin** icon in the list.

A deactivated person cannot sign in. In lists, the account shows as **Deactivated User** with a red cross under **Is active**. Use **Inactive only** in the filter menu to find these accounts.

![The list filtered to inactive accounts](/screenshots/admins/users-inactive.png)

::: warning Department heads
If you deactivate a department head, the department still lists them as head. [Detach them](./departments#change-or-remove-the-head) and attach a new head.
:::

## Restore a deactivated user

1. Open the deactivated user (use **Inactive only** to find them).
2. Click **Account**, then **Restore**.
3. Click **OK** to confirm.

The person can sign in again with their old password. You can also click the green **arrow** icon in the list.

![The Account menu of a deactivated user, with Restore and Delete permanently](/screenshots/admins/user-account-menu-inactive.png)

## Delete a user permanently

Only deactivated accounts can be deleted, and **this cannot be undone**. In most cases, deactivating is enough. Delete an account only when it was created by mistake (for example, with a wrong email) and was never used.

1. [Deactivate](#deactivate-a-staff-user) the user first.
2. Open the user, click **Account**, then **Delete permanently**.
3. Click **OK** to confirm.

If the person already has records in APD, the deletion may be refused. Keep the account deactivated instead.

## President accounts

The president of your university can see every academy of the university. Their account is managed by the APD support team. On a president's page you see **Managed by the super admin**, and you cannot edit, deactivate, delete or reset it.

![A president's account page, marked Managed by the super admin](/screenshots/admins/user-show-president.png)

## Common questions

**A new staff member signed up themselves. Do I need to do anything?**
Check their account: make sure the **Department** is correct and add any roles they need. If it shows **Awaiting email confirmation**, they have not confirmed their email yet. See [A sign-up is awaiting email confirmation](#a-sign-up-is-awaiting-email-confirmation).

**Someone says they are a new department head. What do I do?**
Either [attach them](./departments#attach-a-department-head) on the department page, or ask them to send a head access request from their profile and then [grant it](./head-access-requests).

**I changed someone's email. How do they sign in?**
They sign in with the new email and their existing password. If they do not know their password, [reset it](#reset-a-password).
