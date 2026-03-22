# Technical note (for IT and support)

For **end users**, prefer [Your college’s address](your-academy-and-address) and [What the application includes](application-capabilities).

---

## University vs college in the data model

- **`AcademicInstitution`** represents the **university** (or top-level institution).
- **`Academy`** represents a **college** (tenant) inside that institution, with a unique **`subdomain`**.

Naming in the codebase still uses `Academy` in many places; this user guide uses **college** when speaking to staff and students.

---

## Routing and tenancy

- **`SubdomainConstraint`** wraps college (academy) day-to-day routes.
- **`set_current_tenant_by_subdomain(:academy, :subdomain)`** scopes the tenant (see `ApplicationController` / `Academy::BaseController`).

---

## Stack (summary)

- **Rails** application.
- **PostgreSQL** database.
- **Devise** for super admins, staff users, and students (separate configurations).
- **CanCanCan** with **Rolify** roles (e.g. `department_head`, `admin`, `education_quality_lead`) — see `Ability` model.

---

## What is routed

See [What the application includes](application-capabilities) for a list derived from `config/routes.rb`.

---

## Super-admin platform

`config/routes/admin.rb` defines **`/admin`** resources for `academies`, `academic_institutions`, `super_admins`, etc. This is **outside** the college subdomain workflow.
