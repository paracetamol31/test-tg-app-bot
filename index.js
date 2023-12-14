const TelegramBot = require('node-telegram-bot-api');

const token = '6661673900:AAHJFNPAUvayyv0eAZe1bEpxQASHShj0L5w';
const webAppUrl = 'https://paracetamol31.github.io/test-tg-bot-react-app/';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Ниже появится кнопка', {
            reply_markup: {
                keyboard: [
                    [{ text: 'Нажми сюда', web_app: {url: webAppUrl}}]
                ]
            }
        })
    }
});