const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const Chat = require('../models/chat');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const getChat = asyncHandler(async (req, res) => {
  Chat.findById(req.body.objectId, (err, chat) => {
    if (err) {
      res.status(400).json({ message: 'Chat not found' });
    }
    res.send(chat);
  });
});

const createChat = asyncHandler(async (req, res) => {
  const chat = new Chat({
    users: [
      {
        user: {
          user_id: req.body.userId,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        },
      },
    ],
    messages: [
      {
        message: {
          sender: req.body.senderId,
          recipient: req.body.recipientId,
          text: req.body.text,
        },
      },
    ],
  });
  chat.save(async (err) => {
    if (err) {
      res.status(400).json({ message: 'Chat not created' });
      throw err;
    }
    res.status(201).json({ message: 'ok' });
  });
});

const addMessage = asyncHandler(async (req, res) => {
  //   res.send('You have reached the add msg chat');
  console.log(req.body.text);
  Chat.findByIdAndUpdate(
    req.body.objectId,
    {
      $push: {
        messages: {
          message: {
            sender: req.body.senderId,
            recipient: req.body.recipientId,
            text: req.body.text,
          },
        },
      },
    },
    { new: true },
    async function (err, docs) {
      if (err) {
        res.status(400).json({ message: 'Chat not created' });
        throw err;
      } else {
        // console.log is working but res not showing in postman
        console.log('New msg added : ', docs);
        res.status(201);
      }
      //   res.status(201).json({ message: 'ok' });
    }
  );
});

module.exports = { getChat, createChat, addMessage };
