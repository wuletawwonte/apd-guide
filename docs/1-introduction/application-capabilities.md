# What the application includes

This page lists **what is actually wired in the application** today, based on `config/routes.rb` (and `config/routes/admin.rb`, `config/routes/api.rb`). It does **not** describe future ideas or pages that are not routed.

**Two different `/admin` areas (different hosts):**

- On a **college subdomain**, `namespace :admin` (inside `Academy`) is **college administration**—departments, college users, college students, announcements, `academy_settings`, etc.
- On the **main application host** (no college tenant in the usual way), `draw(:admin)` loads **super-administrator** Devise and resources such as `academies`, `academic_institutions`, and `super_admins`.

Always use the **hostname** your deployment documentation describes; this guide does not list production URLs.

---

## College subdomain (students)

Under each college’s address, **students** have routes for:

| Area | What exists (routes) |
|------|----------------------|
| Home | Authenticated root → student `pages#index` |
| Terms | `GET` terms index |
| Activities | Activities `index` and collection filter by activity type |
| Activity weeks | Nested under an activity: `index` and filter by week |
| Class sessions | `create` only (nested under activity week) |
| Courses | `index` only |
| Course survey responses | `new` and `create` under `courses/.../survey/responses` |
| Profile | Show, edit, update, destroy; separate password edit/update |
| Notifications | Index, show; mark all read on collection |
| Student departments | Full `student_departments` resource |

Student sign-in uses **Devise** (`devise_for :students`). Unauthenticated student root redirects to `/`.

---

## College subdomain (staff / users)

**Staff** sign in with **Devise** (`devise_for :users`). Authenticated root is the department **`pages#index`** (department home).

Shared (not under a single department id in URL) routes include:

| Area | What exists (routes) |
|------|----------------------|
| Terms | `GET` terms index |
| Feedbacks | `new`, `create` only |
| Release notes | `release_notes#index` |
| Profile | Show, edit, update, destroy; `myactivities`; password edit/update |
| Notifications | Index, show; mark all read |
| Announcements | Index; `dismiss` on member |

### Under each department (`/departments/:department_id/...`)

| Area | What exists (routes) |
|------|----------------------|
| Home | `GET home` → department `pages#index` |
| Switch department | `POST change_department` |
| Analytics | Index; `courses_performance`, `performance_distribution`, `export_courses` |
| Courses | Full CRUD; member `analytics`, `analytics/qualitative`, `override_history`, `adjust_expected_hours`, `update_expected_hours`, `enroll_students`; nested `course_enrollments` create/destroy; nested `activities` with enrollments, weeks, `enroll_students`, `assign_instructor`, `unassign_instructor`, etc. |
| Activity analytics | `show` |
| Students | Full CRUD; `assign_activities`, `enroll_courses` |
| Activity weeks | Nested route for `performance_feedbacks` `create` |
| Curriculum courses | Full CRUD; collection export/import (CSV/Excel) and templates; nested `curriculum_activities` |
| Activity types | Full CRUD |
| Users | Full CRUD; `assign_activities`, `unassign_activity` |

### Survey / qualitative (path prefix `survey`)

| Area | What exists (routes) |
|------|----------------------|
| Statements | Full CRUD; collection import Excel, template, add option, update positions; member toggle required, new option |
| Checkpoints | Full CRUD |
| Survey | Singleton `show`, `edit`, `update` at `survey` root path |

---

## College subdomain — `academy/admin` namespace

College-level administration (still on the college subdomain) includes:

| Area | What exists (routes) |
|------|----------------------|
| Dashboard | `admin#root` |
| Announcements | Full CRUD |
| Departments | Full CRUD; `attach_head`, `dettach_head` |
| Users | Full CRUD; `reset_password`, `restore`, `permanent_delete` |
| Students | Full CRUD; `reset_password`, `restore` |
| Academy settings | `index`, `update` only |

---

## API (college subdomain)

| Area | What exists (routes) |
|------|----------------------|
| `api/v1/curriculum_courses` | Full resource |

---

## Platform super-admin (`/admin` on main app, not college subdomain)

From `config/routes/admin.rb`, **super admins** have Devise sign-in and resources for:

- `super_admins`
- `academies` (each college tenant)
- `academic_institutions` (university-level records)
- `feedbacks` (index, show, update, destroy)
- `release_notes`
- `profile` (singleton)

Most university **users** never use this area.

---

## Other top-level routes (main site)

Examples from `config/routes.rb` **outside** the college constraint:

- `pages#index` root
- `contact`, `academies`, `public_release_notes`
- `telegram_webhook` (POST)
- PWA `manifest` and `service-worker`
- Health check `up`

---

## How to use this page

- If a task is **not** represented above, the guide should not promise a dedicated screen for it without checking the codebase again.
- Menu labels in the UI may differ from route names; use this list as a **map of what the server exposes**, not exact button text.

Related: [Technical note (IT / support)](technical-note-for-support)
