const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },{
    text: "Hello Galaxy!",
    user: "John",
    added: new Date()
  }
];

module.exports = messages;

// This module exports an array of message objects, each containing a text, user, and added date.
// The messages can be used in the application to display a message board or chat history. 
// Each message has a timestamp indicating when it was added. 
// This structure allows for easy retrieval and display of messages in the application.