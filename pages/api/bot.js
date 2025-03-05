import { Telegraf } from 'telegraf';

const bot = new Telegraf('7945811630:AAGkcI6sziITz2Joq02tp05eiA1sbDdb3Pc');

bot.command('start', async (ctx) => {
  try {
    await ctx.reply('Добро пожаловать!', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Открыть мини-приложение',
              web_app: { url: 'https://your-vercel-app-url.vercel.app' }
            }
          ]
        ]
      }
    });
  } catch (error) {
    console.error('Error in /start command:', error);
    await ctx.reply('Произошла ошибка. Пожалуйста, попробуйте позже.');
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