# Telegram Mini App

A Telegram Mini App with a black screen and "in process" text.

## Installation

```bash
npm install
```

## Environment Variables Setup

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Fill in the variables in `.env.local`:
- `NEXT_PUBLIC_APP_URL` - Your application URL (for local development: http://localhost:3000)
- `BOT_TOKEN` - Your Telegram bot token

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Deployment on Vercel

1. Create a GitHub repository and upload the code
2. Connect the repository to Vercel
3. In Vercel project settings, add the following environment variables:
   - `NEXT_PUBLIC_APP_URL` - Your Vercel app URL (e.g., https://your-app.vercel.app)
   - `BOT_TOKEN` - Your Telegram bot token
4. After deployment, get your application URL

## Telegram Bot Setup

1. Create a bot through @BotFather in Telegram
2. Enable Mini App for your bot:
   - Send `/mybots` command to @BotFather
   - Select your bot
   - Choose "Bot Settings" > "Menu Button" > "Configure Menu Button URL"
   - Enter your Vercel app URL
3. Set up webhook for your bot:
   - Send a request to `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook`
   - Set your API URL: `https://your-app.vercel.app/api/bot`

## Usage

1. Send `/start` command to the bot
2. Click the "Open Mini App" button
3. The app will open in Telegram with a black screen and "in process" text 