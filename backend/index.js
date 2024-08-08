const express = require('express');
const connectDb = require('./config/connectDb');
const bodyParser = require('body-parser');
const {handleUserSignUp, handleUserLogin, handleDeleteUser, handleUserUpdate, handleUserDetails} = require('./Controllers/userControllers');
const { config } = require("dotenv");
const cors = require('cors')

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

app.get('/', (req, res) => {
  res.json('hi I am backend');
});

// user api routes
app.post('/user/signup', handleUserSignUp);
app.post('/user/login', handleUserLogin);
app.delete('/user/delete/:_id', handleDeleteUser);
app.put('/user/update/:_id', handleUserUpdate);
app.get('/user/details/:_id', handleUserDetails);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
