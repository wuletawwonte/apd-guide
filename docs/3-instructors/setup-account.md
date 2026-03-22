# Staff registration

Self-service staff registration is only available if your **college** enabled it.

## Prerequisites

- Your **college APD URL**
- University email (or email policy your college defines)

## Steps

1. Open your **college’s APD address**.
2. Open **staff sign-up** if your college exposes it. Staff accounts use **`devise_for :users`** (path prefix **`/users`** on the college host, e.g. `/users/sign_up` when sign-up is open).
3. Fill in the fields shown (for example department, name, email, password, terms).

![Staff registration example](/screenshots/user-sign-up-page.png)

4. Submit the form. You may be signed in immediately after success.

If you do not see a sign-up link, your college may **create accounts only through an administrator**—ask your college APD administrator.

## Related

- [Staff sign-in](login-instructions)
- [College administrators — overview](../5-academy-admins/overview)
