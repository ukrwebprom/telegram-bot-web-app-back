require('dotenv').config();
const {BOT_TOKEN} = process.env;

const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(BOT_TOKEN, {polling: true});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
    console.log(msg);
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Ровач');
});