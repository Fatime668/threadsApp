// const { model } = require("mongoose");

const express = require("express");
const { createOrFindChat } = require("../controllers/ChatController");
const router = express.Router()

router.post("/create-chat",createOrFindChat)
// router.get("/chat/:userId",userChats)
// router.get("/find/:firstId/:secondId",findChat)
module.exports = router