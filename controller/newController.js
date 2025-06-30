const messages = require('../models/messages');
const db = require('../db/queries')
// This controller handles the logic for rendering the new message form and processing form submissions.
module.exports = {
    get:(req,res)=>{
        res.render("new", { title: "New User" })
    },
    post:async (req,res)=>{
        const { user, text } = req.body;
        if (user && text) {
            const addData = await db.insertMessage(user,text);
            // messages.push({ user:user, text:text, added: new Date() });
            res.redirect('/');
        } else {
            res.render('new', { title: 'New Message', error: 'Please fill in all fields.' });
        }
    }
}