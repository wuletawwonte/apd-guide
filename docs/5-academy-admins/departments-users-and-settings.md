# Departments, users, and settings (college administrators)

Use this as a **checklist** against what you see in the **`admin`** section on your **college subdomain**. Wording on screen may differ from route names.

---

## Departments

Routes include full CRUD plus **`attach_head`** and **`dettach_head`** on a member department.

1. Open **admin → departments** (or the label your UI uses).
2. Create or edit a department with the official name your university uses.
3. Attach the correct **department head** so they receive department-head permissions.

::: tip Screenshot placeholder  
`docs/public/screenshots/guide-admin-departments-crud.png`  
:::

---

## Staff users

Admin **`users`** resource includes **`reset_password`**, **`restore`**, **`permanent_delete`** on member actions in routes.

1. Create or edit a **user** with an institutional email.
2. Assign **roles** and **department** membership per policy.
3. Send the person their **college APD link**; they sign in via **`/users`** Devise paths on that host.

::: warning
Do not share one login between several people.
:::

::: tip Screenshot placeholder  
`docs/public/screenshots/guide-admin-user-form-full.png`  
:::

---

## College settings

**`academy_settings`** exposes **`index`** and **`update`** only. Change one setting at a time and confirm impact with academic leadership when surveys or teaching flows are affected.

::: tip Screenshot placeholder  
`docs/public/screenshots/guide-academy-settings.png`  
:::

---

## Announcements

**`resources :announcements`** under **`admin`**. Draft short messages (maintenance, policy reminders). Confirm visibility with a test account if your deployment supports audience scoping.

::: tip Screenshot placeholder  
`docs/public/screenshots/guide-admin-announcement.png`  
:::

---

## Students (admin)

**`resources :students`** with **`reset_password`** and **`restore`**. Use for college-level student record tasks your registrar defines.

::: tip Screenshot placeholder  
`docs/public/screenshots/guide-admin-students.png`  
:::

---

## Before each term

- [ ] Departments and **heads** are correct.
- [ ] Departing staff accounts handled per policy.
- [ ] Outdated **announcements** removed or updated.
- [ ] Quality lead and heads agree on survey go-live.

Back: [College administrators — overview](overview)
