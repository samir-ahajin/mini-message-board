const messages = require('../models/messages');

// This controller handles the logic for rendering the new message form and processing form submissions.
module.exports = {
    get:(req,res)=>{
        res.render("new", { title: "New User" })
    },
    post:(req,res)=>{
        const { user, text } = req.body;
        if (user && text) {
            messages.push({ user:user, text:text, added: new Date() });
            res.redirect('/');
        } else {
            res.render('new', { title: 'New Message', error: 'Please fill in all fields.' });
        }
    }
}