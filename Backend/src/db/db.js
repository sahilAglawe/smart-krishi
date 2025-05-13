const mongoose = require('mongoose')
const { DB_NAME } = require('../constants.js')


const connectedToDb = async () => {
  try {
    const mongoInstance = await mongoose.connect(
      `${process.env.MONGO_URL}/${DB_NAME}`
    )
    console.log("Mongodb connected: " + mongoInstance.connection.host);
    
  } catch (err) {
    console.log("Error: ", err);
    process.exit(1);
  }
};  
module.exports = {connectedToDb}
