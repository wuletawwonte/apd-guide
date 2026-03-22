# Roles and responsibilities

APD limits what each person can open based on **role** and **department**. This page explains **who usually does what** inside a **college** tenant.

For **screens and routes that exist in the product**, see [What the application includes](application-capabilities).

---

## Students

**Typical tasks**

- Sign in (or register, if your college enabled it) using **your college’s link**.
- Open **activities** and **activity weeks** you are enrolled in (see student routes in [application capabilities](application-capabilities)).
- Submit **class sessions** and **course survey responses** when those flows are open for you.
- Use **Telegram** only if your college connected it (webhook support exists in the app).

**Important**

- Students use the **student** area, not the staff dashboard.
- What appears depends on **enrollments** your department configured.

::: tip Screenshot placeholders
- **Student home** after sign-in — `docs/public/screenshots/guide-student-home-overview.png`
- **Activity weeks** for one activity — `docs/public/screenshots/guide-student-activity-weeks-nav.png`
:::

---

## Staff: instructor or general department user

Many staff users can **read** department data and submit **feedback** (`feedbacks#new` / `create` exist). Menus still depend on **role** and **CanCan** rules.

**Typical tasks**

- Sign in on the **staff** area with your university email.
- Select the correct **department** (switching is routed as `change_department`).
- Review courses and activities your permissions allow.
- Use **feedback** where offered.

**Limits**

- **College-wide** settings and **admin** tools require **college administrator** or **department head** roles.
- If something is missing, ask your **department head** or **college administrator**—do not share passwords.

::: tip Screenshot placeholder
Staff **department home** (read-heavy user).  
File: `docs/public/screenshots/guide-staff-department-home.png`
:::

---

## Department head

Manages **curriculum catalog**, **courses**, **activities**, **weeks**, and **enrollments** for department(s) they head—matching the department-scoped resources in [application capabilities](application-capabilities).

**Typical tasks**

- Maintain **curriculum courses** and **curriculum activities**.
- Create or update **courses** and **activities** for the department.
- Configure **activity weeks** (including bulk update / toggle editable where used).
- Enroll **students** in courses and activities; **assign instructor** routes exist on activities.
- Use **expected hours** flows where the college uses them (`adjust_expected_hours`, `update_expected_hours`, `override_history` are routed on courses).

**Limits**

- Scoped to **headed departments**; another department’s data is separate.
- Updates may be restricted when records are **passed** or locked by business rules.

::: tip Screenshot placeholders
- **Department home** — `docs/public/screenshots/guide-dept-head-home.png`
- **Activity weeks** — `docs/public/screenshots/guide-dept-head-activity-weeks.png`
- **Enrollment** — `docs/public/screenshots/guide-dept-head-enrollment.png`
:::

More detail: [Department heads — overview](../4-department-heads/overview).

---

## College administrator

In the app, **college** administration uses the **`academy/admin`** namespace on the **college subdomain** (routes: dashboard, announcements, departments, users, students, `academy_settings`).

**Typical tasks**

- Maintain **departments** and attach/detach **heads** (`attach_head` / `dettach_head` routes exist).
- Create and manage **staff users** and **students** (including password reset / restore routes where provided).
- Adjust **college settings** (`academy_settings` index/update).
- Publish **announcements** for the college.

**Limits**

- Scoped to **one college tenant** on that subdomain.
- Creating a **new college** or **university** record uses super-admin **`/admin`** routes, not this area.

::: tip Screenshot placeholders
- **Admin departments** — `docs/public/screenshots/guide-academy-admin-departments.png`
- **User management** — `docs/public/screenshots/guide-academy-admin-users.png`
:::

More detail: [College administrators — overview](../5-academy-admins/overview).

---

## Education quality lead

Can manage **statements**, **checkpoints**, and the singleton **survey** under the `survey` path, plus related options/import routes—see [application capabilities](application-capabilities). May also manage **curriculum catalog** at college scope when the role grants it (`Ability` in code).

**Typical tasks**

- Edit **survey** content and **statements** / **checkpoints**.
- Use **import** routes where your committee approves file-based updates.
- Coordinate with **department heads** before term start.

**Limits**

- Does not replace **department heads** for per-section enrollments unless your university agrees otherwise.

::: tip Screenshot placeholders
- **Survey hub** — `docs/public/screenshots/guide-eql-survey-hub.png`
- **Checkpoints** — `docs/public/screenshots/guide-eql-checkpoints.png`
:::

More detail: [Education quality lead — overview](../6-quality-lead/overview).

---

## One person, several roles

The same user can hold **multiple roles**. Menus combine what each role allows.

---

## Platform super-administrator

**Super admins** use **`/admin`** on the main application host to manage **`academies`** (colleges), **`academic_institutions`** (universities), and related platform resources. This is **not** covered step-by-step in this manual.

---

## Next steps

- [Students — getting started](../2-students/getting-started)
- [Staff — day-to-day](../3-instructors/day-to-day)
- [Department heads](../4-department-heads/overview)
- [College administrators](../5-academy-admins/overview)
- [Education quality lead](../6-quality-lead/overview)
