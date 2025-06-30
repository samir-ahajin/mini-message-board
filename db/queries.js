const pool = require('./pool')

async function getMessages(){
    const {rows} = await pool.query("SELECT * FROM messages;")
    return rows
}
async function getIdMessage(id){

    const {rows} = await pool.query("SELECT * FROM messages where id = $1",[id])
    return rows
}
async function insertMessage(username,text){
    const insertData = await pool.query("INSERT INTO messages (username, text) VALUES ($1,$2)",[username,text])
}
module.exports = {
    getMessages,
    getIdMessage,
    insertMessage
}
