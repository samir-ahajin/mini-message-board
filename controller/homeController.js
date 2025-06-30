const db = require('../db/queries')
// const messages = require('../models/messages')
module.exports = {
  getData:async (req,res)=>{
    const messages = await db.getMessages();
    //   console.log("test");
    // console.log(messages);
    res.render("index", { title: "Mini Messageboard", messages: messages })
    },

}