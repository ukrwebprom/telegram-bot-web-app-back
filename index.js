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

bot.on('text', async (msg) => {
  console.log('Got msg:', msg.text);
  switch(msg.text.toLowerCase()) {
    case '/start':
      msg.reply.text('Hi. Nice to meet you 🤝');
      break;
    case '/about':
      bot.sendMessage(msg.chat.id, 'Here is my personal page. Thank you for watching.',{
        replyMarkup: {
          inline_keyboard: [
            [{text: 'Open about page', web_app: {url:PAGE_URL}}]
          ]
        }
      });
      break;
    case '/git':
      bot.sendMessage(msg.chat.id, 'My Github',{
        replyMarkup: {
          inline_keyboard: [
            [{text: 'Open my Git', web_app: {url:GIT}}]
          ]
        }
      });
      break;
    case '/cv':
      await msg.reply.text('One moment...');
      await bot.sendDocument(msg.chat.id, 'https://pochtiennykh-bot.onrender.com/Yuriy-Pochtiennykh-Junior-Front-end-developer.pdf',
      {
        caption: 'Here it is',
        parseMode: 'Markdown',
        filename: 'CV. Yurii Pochtiennykh'
      });
      break;
    case '/contact':
      await bot.sendContact(msg.chat.id, '+380963336533', 'Yurii', {last_name:'Pochtiennykh'});
      break;
    case '/portfolio':
      await bot.sendMessage(msg.chat.id, 'Here is my design works. The portfolio shows works made at different times and from different areas - print design, games, web, 3D...',
      {
        replyMarkup: {
          inline_keyboard: [
            [{text: 'Open my Behance', web_app: {url:BEHANCE}}]
          ]
        }
      });
      break;
    case 'я тебя люблю':
      msg.reply.text('Я тебя тоже ❤️');
      break;
    case 'дука':
      msg.reply.text('Я здесь');
      break;
    case 'цьом':
      msg.reply.text('Цьом, цьом.. во все места');
      break;
    default:
      msg.reply.text('Hmmm...');
  }
});

bot.start();