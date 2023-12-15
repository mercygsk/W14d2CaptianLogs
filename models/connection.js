// express => web framework for create server and writing routes  ---npm i express
//node_modules --npm init-y
//mongoose => ODM for connecting to and sending queries to a mongo database --npm i mongoose dotenv

// method-override => allows us to swap the method of a request based on a URL query

//jsx-view-engine => the templating engine   --npm install jsx-view-engine react react-dom

//dotenv => will allow us to use a `.env` file to define environmental variables we can access via the `process.env` object  -- npm i dotenv

// morgan => logs details about requests to our server, mainly to help us debug --npm i morgan

// require dotenv so that I can use the .env fil

// Import Our Dependencies
require("dotenv").config(); // Load ENV Variables
const mongoose = require("mongoose");

// Database Connection
// Setup inputs for our connect function
// Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };


// Establish Connection
mongoose.connect(mongoURI, CONFIG);

// Events for when connection opens/disconnects/errors
// Connect to Mongo
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})

// Export the Connection
module.exports = mongoose;