const TelegramApi = require('node-telegram-bot-api');
const TOKEN = require('./constants');

const bot = new TelegramApi(TOKEN, {
    polling: true
})



const start = () => {
    bot.setMyCommands([
        {
            command: '/start',
            description: 'Начальная команда'
        },
        {
            command: '/info',
            description: 'Информация'
        }
    ])
    
    bot.on('message', async  msg => {
        const chatId = msg.chat.id
        const text = msg.text
        if (msg.text ===  '/start') {
            return bot.sendMessage(chatId, 'Начальная команда')
        }
        return bot.sendMessage(chatId, 'Неизвестная команда')

    })
}

start()