const mongoose = require('mongoose');
const {config} = require('dotenv');
config({ path: './.env' });


const dBport = process.env.DB_PORT

const connectDb = async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/getIt');
        console.log(`Db connected on ${dBport} `);
        
    } catch (error) {
        console.log(error)
    }
  
}


module.exports = connectDb;