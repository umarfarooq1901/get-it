const User = require('../modals/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const messageHandler = require('../config/messageHandler');






const handleUserSignUp = async (req, res)=>{

    try {

        const {username, email, password} = req.body;

        if(username !== '' && email !== '' && password !== ''){
                    const findUser = await User.findOne({email});

                    if(findUser){
                            res.json({message: 'User Already Registered'})
                    }
                    else{
                        const hashPass = await bcrypt.hash(password, 10);
                        const createUser = await User.create({username, email, password: hashPass});

                        if(createUser){
                            res.status(201).json({message: 'User Registered Successfully'})
                        }
                        else{
                            res.json({message: "Some error while  registering this user"})
                        }

                    }

                
        }
        else{
            res.json({message: "All credentials required"})
        }
        
    } catch (error) {
        console.log(error)
        res.json({ message: "Server Error | 500" });
    }
   
   
    
}


const handleUserLogin = async (req, res)=>{
        try {
                    const secretkey = process.env.SECRET_KEY;
                    const {email, password} = req.body;
                    if(email === '' || password===''){
                      return messageHandler(res, 200, 'All credentials required!')
                    }

                    const existingUser = await User.findOne({email});

                    if(!existingUser){
                        return messageHandler(res, 202, "User Not Found")
                    }

                    const checkPass = await bcrypt.compare(password, existingUser.password);

                    if(!checkPass){
                        return messageHandler(res, 202, "Incorrect Password!")
                    }

                    const payload = existingUser._id;

                        const createToken =  await jwt.sign({_id: payload}, secretkey);

                        if(!createToken){
                                    return messageHandler(res, 200, "Token Not created!")
                        }
                        else{

                            res.status(200).json({message: "Logged in Successfully!", token: createToken});
                        }

            
        } catch (error) {
            console.log(error);
            messageHandler(res, 500, 'Server Error')
        }
}



const handleDeleteUser = async (req, res)=>{
            try {

                const {_id }= req.params;

                if(!_id && _id === null && _id === undefined){
                  return messageHandler(res, 400, "ID Not passed!");
                }

                const findUser = await User.findById(_id);
                if(!findUser){
                  return messageHandler(res, 404, "User Not Found!");
                }
                const deleteUser = await User.findByIdAndDelete(_id);

                if(!deleteUser){
                    return messageHandler(res, 503, "Service Unavailable");
                }
                else{
                    res.status(200).json({message: "User Deleted Successfully"});
                }
                
            } catch (error) {
                console.log(error)
                return messageHandler(res, 500, 'Internal Server Error')
            }
}


const handleUserUpdate = async(req, res)=>{
        try {
            const {username, email, password} = req.body;
            const{ _id} = req.params;
            if(!_id){
                    return messageHandler(res, 400, "ID Not passed!");
                }
            const findUser = await User.findById(_id);
            if(!findUser){
                return messageHandler(res, 404, "User Not Found!");
            }
            const hashPass = await bcrypt.hash(password, 10);
            const updateUser = await User.findByIdAndUpdate(_id,{
                username,
                email,
                password: hashPass
            })

            if(updateUser){
                messageHandler(res, 200, 'User details updated successfully!');
            } 
            else{
                return messageHandler(res, 503, "Service Unavailable");
            }
            

            
            
        } catch (error) {
            console.log(error);
            return messageHandler(res, 500, 'Internal Server Error');
        }
}



const handleUserDetails = async (req, res)=>{
    try {

               const{ _id} = req.params;

                if(_id){
                    console.log(_id);
                    
                        
                    const getUser = await User.findById(_id);

                    if(getUser){

                        res.status(200).json({message: "User Details Fetched Successfully", getUser});
                    }

                    else{
                        return messageHandler(res, 400, 'User Not Found!')
                    }
                }

                
        
    } catch (error) {
        console.log(error);
        return messageHandler(res, 500, 'Internal Server Error');
        
    }
}


module.exports = {handleUserSignUp, handleUserLogin, handleDeleteUser, handleUserUpdate, handleUserDetails};