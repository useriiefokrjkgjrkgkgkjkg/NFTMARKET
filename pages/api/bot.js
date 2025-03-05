import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('start', async (ctx) => {
  try {
    await ctx.reply('Welcome!', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Open Mini App',
              web_app: { url: process.env.NEXT_PUBLIC_APP_URL }
            }
          ]
        ]
      }
    });
  } catch (error) {
    console.error('Error in /start command:', error);
    await ctx.reply('An error occurred. Please try again later.');
  }
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await bot.handleUpdate(req.body);
      res.status(200).json({ message: 'OK' });
    } catch (error) {
      console.error('Error handling update:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
} 