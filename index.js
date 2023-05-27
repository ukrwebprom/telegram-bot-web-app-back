/* require('dotenv').config(); */

const PAGE_URL = 'https://pochtiennykh-bot.onrender.com';
const BEHANCE = 'https://www.behance.net/ukrwebprom';
const GIT = 'https://github.com/ukrwebprom';

const TeleBot = require('telebot');
const bot = new TeleBot({
  token:process.env.BOT_TOKEN,
  polling: { 
    interval: 1000, 
    timeout: 0}
});

bot.on('text', (msg) => msg.reply.text(msg.text));
bot.on(['/start', '/hello'], (msg) => msg.reply.text('Hi. Nice to meet you 🤝'));
bot.on('/cv', (msg) => msg.reply.text('Here it is'));
bot.start();

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