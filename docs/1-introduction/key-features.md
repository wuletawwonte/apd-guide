# Key features (high level)

This page is a **short summary**. For a **route-by-route** list of what exists in the product today, see [What the application includes](application-capabilities).

---

## Multi-college (tenant per college)

Each **college** uses a **subdomain**. Routes under that host are scoped to that college’s data.

---

## Separate student and staff access

**Students** and **staff** use different Devise configurations. Student-facing routes include activities, activity weeks, class session submission, course list, survey responses, profile, notifications, and student departments—see the capabilities page for detail.

---

## Department-scoped staff work

Staff work **inside a department** (with department switching). Routes include courses, activities, weeks, enrollments, curriculum catalog, students, department users, analytics, and more—again detailed in [application capabilities](application-capabilities).

---

## Surveys and qualitative tools

Under the `survey` path, the app routes **statements**, **checkpoints**, and a singleton **survey** resource for staff who have permission.

---

## College administration

On the college subdomain, an **`admin`** namespace provides dashboard, announcements, departments, users, students, and college settings routes.

---

## Progressive Web App

`manifest` and `service-worker` routes exist for PWA support; behaviour depends on browser and deployment.

---

## Telegram

A `telegram_webhook` route exists at the application level; whether students use Telegram depends on college setup.

---

## Platform super-administration

Creating **colleges** (`academies`) and **universities** (`academic_institutions`) is done in the platform **`/admin`** area for **super admins**, not in the college manual above.
