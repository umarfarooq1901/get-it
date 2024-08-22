const jwt= require('jsonwebtoken');
const messageHandler = require('../config/messageHandler');
const {config} = require('dotenv');
config({ path: './.env' });


const isAuthenticated  = (req, res, next)=>{
try {

    const {token} = req.params;
    const secretkey = process.env.SECRET_KEY;
            if(token){
                jwt.verify(token, secretkey, (error, decode)=>{
                    if(error){
                        return messageHandler(res, 401, "Unauthorized: Invalid token");
                    }
                    else{
                        req.user = { _id: decode._id }; // Set req.user as an object
                        // req.user = decode._id;
                        // console.log(req.user)
                        return next();
                    }
                });
            }

    
} catch (error) {
    console.log(error);
    return messageHandler(res, 500, "Internal Server Error");
    
}

};


module.exports = isAuthenticated;