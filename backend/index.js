const express = require('express');
const connectDb = require('./config/connectDb');
const bodyParser = require('body-parser');
const {handleUserSignUp, handleUserLogin, handleDeleteUser, handleUserUpdate, handleUserDetails} = require('./Controllers/userControllers');
const { config } = require("dotenv");
const cors = require('cors');
const isAuthenticated = require('./middlewares/auth');
const userVerify = require('./Controllers/userVerification');


// Load environment variables from the .env file
config({ path: './.env' });

// Connect to the database
connectDb();

// Create an instance of express
const app = express();

const port = process.env.PORT;

// setting up cross-origin-resource middleware
app.use(cors());



// Body Parser
app.use(bodyParser.json());





// userToken Verify api route
app.get("/token/verify/:token", userVerify)



// user api routes
app.get('/', (req, res) => {res.send('hi I am backend')});
app.post('/user/signup', handleUserSignUp);
app.post('/user/login', handleUserLogin);


//user authenticated Routes
app.delete('/user/delete/:_id', isAuthenticated, handleDeleteUser);
app.put('/user/update/:_id', isAuthenticated, handleUserUpdate);
app.get('/user/details/:_id', isAuthenticated, handleUserDetails);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});