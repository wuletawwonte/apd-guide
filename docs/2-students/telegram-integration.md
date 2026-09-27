# Report through Telegram

You can connect your APD account to the APD Telegram bot. Then you can report class sessions from Telegram and receive your APD notifications there.

Connecting takes one minute. You do it **once**, starting from the APD website.

::: warning Always start from APD
Do not search for the bot and share your phone number. For your security, the bot links only through the **Connect Telegram** button in APD.
:::

## Before you start

- Install Telegram on your phone or computer and sign in to it.
- Sign in to APD on the same device, if possible. This makes the link open straight in Telegram.

## Step 1: Click Connect Telegram in APD

1. In APD, click your name at the top right.
2. Click **Integrations**.
3. On the **Telegram** card, click **Connect Telegram**.

![The Telegram card with the Connect Telegram button](/screenshots/students/telegram-connect-button.png)

APD opens the APD bot in Telegram, using a special one-time link.

## Step 2: Press Start in Telegram

1. Telegram opens a chat with the APD bot.
2. Press **Start** at the bottom of the chat.

![The APD bot in Telegram with the Start button](/screenshots/students/telegram-bot-start.png)

3. The bot replies: **"✓ Linked! You're connected to APD as …"**.

Go back to **Integrations** in APD. The Telegram card now shows **Connected** and the date.

![The Telegram card showing Connected](/screenshots/students/telegram-connected.png)

::: tip "This link has expired or already been used"
Each link works only once and only for a short time. Go back to APD, click **Connect Telegram** again, and press **Start** quickly.
:::

## Step 3: Report a class session in Telegram

1. In the bot chat, send **/report** (or tap **Menu** and choose **report**).
2. The bot lists your activities that are open this week, with your progress, for example `Software Engineering Principles - LEC - Week 9 - (1/2)`.
3. Tap the activity you want to report.
4. The bot asks: **"Was the class for the course '…' held?"** Tap **Yes** or **No**.
5. If you tapped **Yes**, the bot asks how many hours. Tap a button from **1 hour** to **8 hours**.
6. The bot confirms: **"Thank you …! The report is saved successfully."** (or, for No, that the class was NOT held).

To report another session, send **/report** again.

::: info Telegram and the website are the same
A report sent through Telegram appears on the APD website right away, and the other way around. The same rules apply: you can only report open weeks, and only up to the number of planned sessions.
:::

## Bot commands for students

| Command | What it does |
|---------|--------------|
| **/report** | Show your open activities so you can report a class session. |
| **/start** | Show the list of commands. |
| **/restart** | Clear the last bot message and show the menu again. Use it if the buttons stop working. |
| **/help** | Show the list of commands. |
| **/disconnect** | Unlink this Telegram chat from your APD account. |

## How to disconnect Telegram

You can disconnect in either place:

- In APD: go to **Integrations** and click **Disconnect** on the Telegram card, then confirm.
- In Telegram: send **/disconnect** to the bot.

After you disconnect, you no longer receive APD messages in Telegram. You can connect again at any time.

## Troubleshooting

**Nothing happens when I click Connect Telegram.** Your academy may not have set up the Telegram bot. APD then shows "Telegram integration isn't configured for this deployment." Ask your department office.

**The bot says "This chat isn't linked to an APD account yet."** You have not finished Step 1 and Step 2. Start again from **Connect Telegram** in APD.

**The bot says "You don't have any active activities this week."** No week is open for you right now, or you already reported every session. Check **My activities** on the website.

**The bot says the account is "already linked".** Your APD account or this Telegram account is already connected. Disconnect first, then connect again.
