const db = require('../db/queries')

module.exports ={
    dataUpdate:async (req,res)=>{
   const messageId = req.params.id;

   const userMessage = await db.getIdMessage(messageId)
    //   console.log(userMessage);
   if(userMessage){
    // console.log(messageId);
    const message = userMessage[0]
     res.render('details', { title: `Message Details by ${message.username}`, userMessage: message, id: messageId });
   }else{
     res.redirect('/');
   }
}
}