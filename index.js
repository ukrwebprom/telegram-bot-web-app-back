/* require('dotenv').config(); */
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const PAGE_URL = 'https://pochtiennykh-bot.onrender.com';
const BEHANCE = 'https://www.behance.net/ukrwebprom';
const GIT = 'https://github.com/ukrwebprom';
const WEBHOOK = 'https://telebot-pochtiennykh.herokuapp.com/webhook';
const {BOT_TOKEN, PORT} = process.env;
const TeleBot = require('telebot');
const bot = new TeleBot({
  token:BOT_TOKEN,
  webhook: {
    url:'https://telebot-pochtiennykh.herokuapp.com/webhook',
    host:'0.0.0.0',
    port:PORT
  }
});
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const upd = req.body.message;
  const chat_id = upd.chat.id;
  const message = upd.text;
  sendResponse(message, chat_id);
  res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Webhook server is running on port ${PORT}`);
});

async function sendResponse(msg, id) {
  switch(msg.toLowerCase()) {
    case '/start':
      await bot.sendMessage(id, 'Hi. Nice to meet you 🤝');
      break;
    case '/about':
      await bot.sendMessage(id, 'Here is my personal page. Thank you for watching.',{
        replyMarkup: {
          inline_keyboard: [
            [{text: 'Open about page', web_app: {url:PAGE_URL}}]
          ]
        }
      });
      break;
    case '/git':
      await bot.sendMessage(id, 'My Github',{
        replyMarkup: {
          inline_keyboard: [
            [{text: 'Open my Git', web_app: {url:GIT}}]
          ]
        }
      });
      break;
    case '/cv':
      await bot.sendMessage(id,'One moment...');
      await bot.sendDocument(id, 'https://pochtiennykh-bot.onrender.com/Yuriy-Pochtiennykh-Junior-Fullstack-developer.pdf',
      {
        caption: 'Here it is',
        parseMode: 'Markdown',
        filename: 'CV. Yurii Pochtiennykh'
      });
      break;
    case '/contact':
      await bot.sendContact(id, '+380963336533', 'Yurii', {last_name:'Pochtiennykh'});
      break;
    case '/portfolio':
      await bot.sendMessage(id, 'Here is my design works. The portfolio shows works made at different times and from different areas - print design, games, web, 3D...',
      {
        replyMarkup: {
          inline_keyboard: [
            [{text: 'Open my Behance', web_app: {url:BEHANCE}}]
          ]
        }
      });
      break;
    case 'hello':
      await bot.sendMessage(id,'Hi, nice to meet you 🤝 Please find my command list in menu');
      break;
    case 'hi':
      await bot.sendMessage(id,'Hi, nice to meet you 🤝 Please find my command list in menu');
      break;
    case '/hello':
      await bot.sendMessage(id,'Hi, nice to meet you 🤝 Please find my command list in menu');
      break;
    case '/hi':
      await bot.sendMessage(id,'Hi, nice to meet you 🤝 Please find my command list in menu');
      break;
    case 'я тебя люблю':
      await bot.sendMessage(id,'Я тебя тоже ❤️');
      break;
    case 'дука':
      await bot.sendMessage(id, 'Я здесь');
      break;
    case 'цьом':
      await bot.sendMessage(id, 'Цьом, цьом.. во все места');
      break;
    case 'коша':
      await bot.sendMessage(id, 'Коша старшая или коша младшая?');
      break;
    case 'ровач':
      await bot.sendMessage(id, 'Ну');
      break;
    default:
      await bot.sendMessage(id, 'Hmmm...');
  }
};



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