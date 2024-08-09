const mongoose = require('mongoose');



const dBport = "27017"

const connectDb = async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/getIt');
        console.log(`Db connected on ${dBport} `);
        
    } catch (error) {
        console.log(error)
    }
  
}


module.exports = connectDb;