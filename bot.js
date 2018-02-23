const TelegramBot = require('node-telegram-bot-api');
const token = 'Botingiz_TOKEnini_Shu_Yerga yozing';
const bot = new TelegramBot(token, {polling: true});

// Bu yerga o'zingizni botingiz kodlarini kiritasiz!
//Pastdagi Kodlarni o'chirib yuborishingiz mumkin.
//botni ishga tushurish
bot.onText(/\/start/, msg =>{
    bot.sendMessage(msg.chat.id,'Salom botga hush kelibsiz ', msg.from.first_name)
})
//Rasm Jo'natish
bot.onText(/\/photo/, msg =>{
    bot.sendPhoto(msg.chat.id,'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg',{
        caption:'Izoh'
    })
})
if ((msg.text !== '/start')||(msg.text !== '/photo')){
    bot.sendMessage(msg.chat.id, msg.text)
}
