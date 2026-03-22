# Education quality lead — overview

The **education quality lead** role helps your **college** keep **surveys** and **qualitative** content accurate. You often work **across departments** in the same college tenant, while **department heads** still run enrollments and activity weeks.

Routed areas include **`survey` statements**, **checkpoints**, and the singleton **survey** resource, plus **curriculum catalog** resources when `Ability` grants them—see [What the application includes](../1-introduction/application-capabilities).

---

## What you typically own

| Area | Plain-language purpose |
|------|-------------------------|
| **Surveys** | Staff survey resource at the `survey` path (`show` / `edit` / `update`). |
| **Statements** | Qualitative statement CRUD and import routes. |
| **Options** | Answer choices tied to statements where the UI exposes them. |
| **Checkpoints** | Checkpoints CRUD under `survey`. |
| **Curriculum catalog** | **Curriculum courses**, nested **curriculum activities**, **activity types** when your role includes them at college scope. |
| **Announcements** | Only if your role includes announcement management (confirm with a **college administrator**). |

---

## How you work with department heads

- You prepare **content** (wording, checkpoints).
- Department heads ensure **enrollments** and **open weeks** so data is collected.
- Agree **go-live** dates before each term.

---

## How you work with college administrators

- They create accounts and assign the **education_quality_lead** role.
- They reset access if you are locked out.

---

## Multi–college note

Edits apply only to **your college’s** tenant (subdomain). Another college’s deployment does not show your statements or surveys.

---

Next: [Surveys, checkpoints, and statements](surveys-checkpoints-and-statements)
