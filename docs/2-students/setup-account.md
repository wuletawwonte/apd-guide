# Student registration

Registration is only available if your **college** enabled it on its tenant.

## Prerequisites

- The **college APD URL** from your university or college
- Email and student ID (or other identifiers) your college requires

## Steps

1. Open your **college’s APD address** in the browser.
2. Open **student sign-up**. In this application, staff and student accounts use separate Devise configurations; student registration, when enabled, is under the **student** Devise routes (path prefix **`/students`** on the college host—your college’s instructions may show a “Sign up” link on the landing page).
3. Complete the form fields your college shows (for example: student ID, department, name, email, password, acceptance of terms).

![Student registration example](/screenshots/student-registration.png)

4. Submit the form. If registration succeeds, you are typically signed in automatically.

Exact labels and required fields depend on **college configuration** and the deployed registration view.

## Related

- [Student sign-in](login-instructions)
- [Your college’s address](../1-introduction/your-academy-and-address)
