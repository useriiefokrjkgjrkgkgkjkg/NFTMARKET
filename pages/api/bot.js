import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN);

// Добавляем логирование для всех команд
bot.use(async (ctx, next) => {
  console.log('Received update:', ctx.update);
  await next();
});

bot.command('start', async (ctx) => {
  try {
    console.log('Start command received');
    await ctx.reply('ОТКРЫТЬ ТЕСТ', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'ОТКРЫТЬ ТЕСТ',
              web_app: { url: process.env.NEXT_PUBLIC_APP_URL }
            }
          ]
        ]
      }
    });
    console.log('Start command response sent');
  } catch (error) {
    console.error('Error in /start command:', error);
    await ctx.reply('An error occurred. Please try again later.');
  }
});

export default async function handler(req, res) {
  console.log('Received request:', req.method, req.body);
  
  if (req.method === 'POST') {
    try {
      await bot.handleUpdate(req.body);
      console.log('Update handled successfully');
      res.status(200).json({ message: 'OK' });
    } catch (error) {
      console.error('Error handling update:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    console.log('Method not allowed:', req.method);
    res.status(405).json({ error: 'Method not allowed' });
  }
} 