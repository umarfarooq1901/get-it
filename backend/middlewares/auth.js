const jwt= require('jsonwebtoken');
const messageHandler = require('../config/messageHandler');
const {config} = require('dotenv');
config({ path: './.env' });


const isAuthenticated  = async(req, res, next)=>{
try {

    const {token} = req.params;
    const secretkey = process.env.SECRET_KEY;
            if(token){
                jwt.verify(token, secretkey, (error, decode)=>{
                    if(error){
                        messageHandler(res, 401, "You are unauthorized");
                    }
                    else{
                        req.user = decode._id;
                        return next();
            
            
                    }
                });
            }

    
} catch (error) {
    console.log(error);
    
}

};


module.exports = isAuthenticated;