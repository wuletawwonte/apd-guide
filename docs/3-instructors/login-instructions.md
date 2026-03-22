# Staff sign-in

## Prerequisites

- A **user** (staff) account on your college’s APD tenant
- Email and password for that account

## Steps

1. Open **your college’s APD link**. Your university or college office provides this URL; it is **not** the same for every college.
2. Open **staff** sign-in. In the Rails application, staff use **`devise_for :users`**, with default Devise paths under **`/users`** on the college host (for example `/users/sign_in`—confirm on your deployment).
3. Enter your email and password, then sign in.

![Staff sign-in page example](/screenshots/regular-user-login-page.png)

4. If sign-in fails, confirm you are on the **correct college link** and that an administrator has created your account.

## Forgot your password?

1. Use **Forgot password** on the staff sign-in page.

![Forgot password flow example](/screenshots/regular-user-forgot-password-page.png)

2. Enter your registered email and complete the reset flow from the email message.

## Related

- [Your college’s address](../1-introduction/your-academy-and-address)
- [What the application includes](../1-introduction/application-capabilities) (staff and department routes)
