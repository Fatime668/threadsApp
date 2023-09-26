const MessageModel = require("../models/MessageModel");

// Create or find a chat conversation and add messages
exports.createOrFindChat = async (req, res) => {
  const { senderId, receiverId, text } = req.body;

  try {
    // Find or create a chat conversation based on sender and receiver IDs
    const chatQuery = {
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId }, // Allow for both sender-receiver and receiver-sender combinations
      ],
    };

    // Create a new message
    const newMessage = new MessageModel({
      senderId,
      receiverId,
      text,
    });

    await newMessage.save();

    res.status(200).json(newMessage);
  } catch (error) {
    res.status(500).json(error);
  }
};
