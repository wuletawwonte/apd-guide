# Student sign-in

## Prerequisites

- An account created for your college’s APD tenant
- Email and password you set (or that an administrator set for you)

## Steps

1. Open **your college’s APD link** (subdomain). Your university or college office should provide the exact URL—not every college uses the same address.
2. Open the **student** sign-in page. In the Rails application, student authentication uses **`devise_for :students`**, which by default is served under paths starting with **`/students`** (for example sign-in at `/students/sign_in` on your college host—confirm on your deployment).
3. Enter your email and password, then sign in.

![Student sign-in page example](/screenshots/student-login.png)

4. If the account is not recognized, confirm you are on the **correct college link** and using the email you registered with.

## Forgot your password?

1. Use **Forgot password** on the student sign-in page (Devise password reset).

![Forgot password flow example](/screenshots/student-forgot-password.png)

2. Enter the same email you used for registration.
3. Use the link sent to your email to set a new password (check spam folders if needed).

## Related

- [Your college’s address](../1-introduction/your-academy-and-address)
- [What the application includes](../1-introduction/application-capabilities) (student routes)
