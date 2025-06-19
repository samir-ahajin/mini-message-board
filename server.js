const express = require('express');
const app = express();  
const path = require('node:path');

const messages = require('./models/messages');

app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname,"public");
app.use(express.static(assetsPath))



app.set("views",path.join(__dirname,"views"));
app.set('view engine','ejs');

const newRoute = require('./routes/newRoute')

app.get('/',(req,res)=>{
   console.log(messages);
   res.render("index", { title: "Mini Messageboard", messages: messages })
})


app.use('/new',newRoute)


app.get('/details/:id',(req,res)=>{
   const messageId = req.params.id;
   const userMessage = messages[messageId]

   if(userMessage){
    console.log(messageId);
     res.render('details', { title: `Message Details by ${userMessage.user}`, userMessage: userMessage, id: messageId });
   }else{
     res.redirect('/');
   }
})


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});



