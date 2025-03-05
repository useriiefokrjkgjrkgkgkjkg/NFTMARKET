# Telegram Mini App

Мини-приложение для Telegram с черным экраном и текстом "в процессе".

## Установка

```bash
npm install
```

## Разработка

```bash
npm run dev
```

## Сборка

```bash
npm run build
```

## Развертывание на Vercel

1. Создайте репозиторий на GitHub и загрузите код
2. Подключите репозиторий к Vercel
3. После развертывания, получите URL вашего приложения (например, https://your-app.vercel.app)
4. Обновите URL в файле `pages/api/bot.js` на ваш URL с Vercel

## Настройка бота в Telegram

1. Создайте бота через @BotFather в Telegram
2. Включите мини-приложение для вашего бота:
   - Отправьте команду `/mybots` @BotFather
   - Выберите вашего бота
   - Выберите "Bot Settings" > "Menu Button" > "Configure Menu Button URL"
   - Введите URL вашего приложения на Vercel
3. Установите вебхук для бота:
   - Отправьте запрос на `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook`
   - Укажите URL вашего API: `https://your-app.vercel.app/api/bot`

## Использование

1. Отправьте команду `/start` боту
2. Нажмите на кнопку "Открыть мини-приложение"
3. Приложение откроется в Telegram с черным экраном и текстом "в процессе" 