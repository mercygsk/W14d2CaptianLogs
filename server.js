

require('dotenv').config();

const morgan = require("morgan"); //import morgan

const express = require('express');
//include the method-override package 
const methodOverride = require('method-override');
const LogsRouter = require("./controllers/logs");
const path = require("path")
const app = express();
// we want to import the logs model
const Log = require('./models/logs');     // Log is exported from model-logs.js where it connects to mongodb
const jsxViewEngine = require('jsx-view-engine');
//==============================================================================================================================================
app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());
// ================ Middleware ===============================================================================================================
//
app.use((req, res, next) => {
    console.log('Middleware: I run for all routes');
    next();
})
app.use(morgan("tiny")); //logging
//near the top, around other app.use() calls
app.use(express.urlencoded({extended:true}));
app.use(express.static("public")); // serve files from public statically

//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));
app.use("/logs", LogsRouter);
// ======================================================================================================================================================

// We are going to create the 7 RESTful routes


app.get('/',  (req, res) => {
    res.send('This is my CaptainsLog root route' + `<br/><br/><a href="logs">Goto Logs</a>`);
});

//=======================================================================================================================================================

app.listen(3000, () => {
    console.log('listening');
});