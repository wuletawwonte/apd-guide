# College administrators — overview

**College administrators** (implemented in the app as the **`admin`** namespace on the **college subdomain**) support **everyone in that college** on APD. You never see another college’s tenant data.

See [What the application includes](../1-introduction/application-capabilities) for the exact routed areas (`admin` dashboard, departments, users, students, announcements, `academy_settings`).

---

## What you usually do

| Task | Why it matters |
|------|----------------|
| **Departments** | Your university’s college structure inside APD (names, heads). |
| **Staff users** | Who can sign in and which **roles** they have (Rolify / CanCan in code). |
| **College settings** | `academy_settings` — values that apply across the tenant. |
| **Students** | College-level student records when your process uses admin student routes. |
| **Announcements** | Routed `announcements` for the college admin. |

Staff/college **dashboard** example (admin pages vary by deployment):

![Dashboard example](/screenshots/dashboard.png)

---

## Roles you assign

Examples (see `Ability` in the application source for the full matrix):

- **Department head** — department-scoped management of courses, activities, enrollments, etc.
- **Education quality lead** — survey / statements / checkpoints / catalog where granted.
- **General staff** — typically read-heavy plus `feedbacks` create, subject to rules.

Follow your **university’s** access policy.

::: tip Screenshot placeholder
User edit screen with roles.  
File: `docs/public/screenshots/guide-admin-user-roles.png`
:::

---

## Working with department heads

- **You** provision accounts and attach **department heads** (`attach_head` / `dettach_head` routes exist on admin departments).
- **Department heads** run term operations (courses, weeks, enrollments).
- **You** handle lockouts, new accounts, and **college settings**.

---

## More than one college

Each **college tenant** has its **own subdomain** and **own** admin area. If you administer two colleges, you need **two** sign-in contexts (two URLs), not one combined screen.

Read also: [Your college’s address and sign-in](../1-introduction/your-academy-and-address).

---

## Next

- [Departments, users, and settings](departments-users-and-settings)

---

## Escalation

If **nobody** at the college can reach the site, document time, URL, browser, and screenshots and escalate through **university IT** to **platform** operators (super-admin `/admin` on the main host).
