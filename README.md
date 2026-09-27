# APD-Guide

[![Netlify Status](https://api.netlify.com/api/v1/badges/cd3af22f-b4b1-406c-b8d4-03a67d6cb3ad/deploy-status)](https://app.netlify.com/projects/apd-guide/deploys)

> Academic Performance Dashboard User Manual — published at [guide.apd.et](https://guide.apd.et)

A plain-English, step-by-step user guide for every role in APD: students, instructors,
department heads, academy admins, education quality leads, deans and presidents.
(Super-admin operations are intentionally not covered.)

## Built With

- [Vitepress](https://vitepress.dev)

## Run locally

```bash
yarn install
yarn dev        # http://localhost:5173
yarn build      # static site in docs/.vitepress/dist
```

## Structure

| Folder | Audience |
|---|---|
| `docs/1-introduction` | Everyone — what APD is, signing in, key words, roles, shared features, FAQ |
| `docs/2-students` | Students |
| `docs/3-instructors` | Instructors (regular staff) |
| `docs/4-department-heads` | Department heads |
| `docs/5-academy-admins` | Academy admins |
| `docs/6-quality-lead` | Education quality leads |
| `docs/7-deans` | Deans |
| `docs/8-presidents` | Presidents |
| `docs/public/screenshots/<role>` | Screenshots, grouped by the same roles (`common` = shared) |

The sidebar lives in `docs/.vitepress/config.js`.

## Writing rules

- Easy English: short sentences, "you", active voice.
- Use the exact labels shown in the app, in **bold**.
- One `## How to …` section per task, with numbered steps and a screenshot after the step it shows.
- No code, routes or technical words.

## Refreshing screenshots

Screenshots are taken from the APD app running locally with its demo data
(`bin/rails dev:reset` in the `apd` repo, then `bin/rails server`), signed in at
`http://tech.lvh.me:3000` with the demo accounts printed by `bin/rails dev:logins`.
Use a 1440×900 light-theme browser window, and crop to the relevant card or form
when the full page is noisy. Save PNGs under `docs/public/screenshots/<role>/` and
reference them as `/screenshots/<role>/<name>.png`.

## Authors

👤 **Wuletaw Wonte**

- GitHub: [@wuletawwonte](https://github.com/wuletawwonte)
- X: [@wuletaww](https://x.com/wuletaww)
- LinkedIn: [LinkedIn](https://linkedin.com/in/wuletawwonte)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./LICENSE) licensed.
