const jwt = require("jsonwebtoken");
const messageHandler = require("../config/messageHandler");
const {config} = require('dotenv');
config({ path: './.env' });



const userVerify = async (req, res)=>{
    try {
        const {token} = req.params;
        const secretkey = process.env.SECRET_KEY;

        if(token){
            jwt.verify(token, secretkey, (error, decode)=>{
                if(error){
                    messageHandler(res, 401, "Unauthorized user");
                }
                else{
                    res.json({message: "verified", decode});
                }
            })
        }
        
    } catch (error) {
        console.log(error);
        messageHandler(res, 500, "Server error!")
        
    }
           

}

module.exports = userVerify;