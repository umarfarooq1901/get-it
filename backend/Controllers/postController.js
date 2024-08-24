const messageHandler = require('../config/messageHandler');
const Post = require("../modals/postModel");
const User = require('../modals/userModel');
const cloudinary = require('cloudinary').v2;
const {config} = require('dotenv');
config({ path: './.env' });


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});



const handleCreatePost = async (req, res)=>{
            try {
                
                    const _id = req.user;
                    const user = await User.findById(_id);


                    if(!user){
                       return messageHandler(res, 404, "User Not Found!")
                    }

                    const author = user.username;
                    const {title, content } = req.body;
                    const image = req.file.path;

                    if(title === ''  || content === '' || !image){
                        return messageHandler(res, 203, "All Data Fields Required!")
                    }
                       // Specify the folder path for the image
                         const folderPath = 'getit-blog';  // Change 'posts' to your desired folder name
                             // Upload the image to the specified folder
                           const upload = await cloudinary.uploader.upload(image, {
                            folder: folderPath
                              });
                    // const upload = await cloudinary.uploader.upload(image);

                    if(!upload){
                        return  messageHandler(res, 200, "Error while uploading the file")
                    }
                    console.log(upload)
                    const imageUrl = upload.secure_url;

                    const newPost = await Post.create({title, imageUrl, author, content});

                    if(newPost){
                        messageHandler(res, 201, "Post created successfully")
                    }



            } catch (error) {
                console.log(error);
                return messageHandler(res, 500, "An error occurred while creating the post");

                
            }
}


module.exports = handleCreatePost