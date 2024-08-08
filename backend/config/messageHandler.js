const messageHandler = (res, statusCode, message)=>{
       return res.status(statusCode).json({message: message});
};




  
  module.exports =  messageHandler ;