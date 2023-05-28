/* require('dotenv').config(); */

const PAGE_URL = 'https://pochtiennykh-bot.onrender.com';
const BEHANCE = 'https://www.behance.net/ukrwebprom';
const GIT = 'https://github.com/ukrwebprom';
const {BOT_TOKEN, PORT} = process.env;
const TeleBot = require('telebot');
const bot = new TeleBot({
  token:BOT_TOKEN,
  webhook: { 
    url: 'https://telebot-bfkj.onrender.com',
    host: '0.0.0.0',
    port: PORT
}});

bot.on('text', (msg) => {
  switch(msg.text.toLowerCase()) {
    case '/start':
      msg.reply.text('Hi. Nice to meet you 🤝');
      break;
    case '/cv':
      msg.reply.text('Here it is');
      bot.sendDocument('BQACAgIAAxkBAAEhvzBkcwY5N3ZtfoIaf0azZrjUrqHHVAACAjEAAhw7mUsIhVoo5jyX1i8E');
      break;
    case 'я тебя люблю':
      msg.reply.text('Я тебя тоже ❤️');
      break;
    case 'дука':
      msg.reply.text('Я здесь');
      break;
    default:
      msg.reply.text('Hmmm...');
  }
});

bot.start();
bot.getWebhookInfo().then((res) => console.log(res))

/* bot.on('message', (msg) => {
  const chatId = msg.chat.id;
    console.log(msg);
    switch(msg.text.toLowerCase()) {
      case '/start':
        bot.sendMessage(chatId, 'Hi. Nice to meet you 🤝');
        break;
      case '/about':
        bot.sendMessage(chatId, 'sure..',{
          reply_markup: {
            inline_keyboard: [
              [{text: 'Open about page', web_app: {url:PAGE_URL}}]
            ]
          }
        });
        break;
      case '/cv':
        bot.sendMessage(chatId, 'Here it is');
        bot.sendDocument(chatId, './files/Yuriy-Pochtiennykh-Junior-Front-end-developer.pdf');
        break;
      case '/phone':
        bot.sendContact(chatId, '+380963336533', 'Yurii', {last_name:'Pochtiennykh'});
        break;
      case '/portfolio':
        bot.sendMessage(chatId, 'Here is my design works. The portfolio shows works made at different times and from different areas - print design, games, web, 3D...',{
          reply_markup: {
            inline_keyboard: [
              [{text: 'Open my Behance', web_app: {url:BEHANCE}}]
            ]
          }
        });
        break;
        case '/git':
          bot.sendMessage(chatId, 'My Github',{
            reply_markup: {
              inline_keyboard: [
                [{text: 'Open my Git', web_app: {url:GIT}}]
              ]
            }
          });
          break;
          case 'я тебя люблю':
            bot.sendMessage(chatId, 'Я тебя тоже ❤️');
            break;
          case 'дука':
            bot.sendMessage(chatId, 'Я здесь');
            break;
      default:
        bot.sendMessage(chatId, 'Hmmm...');
    }

  

}); */