// Import Dependencies
const express = require("express");
const Log = require("../models/logs");

// Create Route
const router = express.Router();

// Routes

// router.get('/', (req, res) => {
//     res.send('This is my Log Controller route');
// });
// Index route
router.get('/', async (req, res) => {
    // res.send(logs);
    try {
        const foundLogs = await Log.find({});    //Log.find comes from logs.js in models whatever we r exporting.
        //console.log(foundLogs);
        //console.log("foundLogs retruned: " + foundLogs);
        res.status(200).render('logs/Index', {logs: foundLogs});
    } catch (err) {
        res.status(400).send(err);
    }
    
});

// N - NEW - allows a user to input a new fruit
router.get('/new', (req, res) => {
    res.render('logs/New');
});

// D - DELETE - PERMANENTLY removes fruit from the database
router.delete('/:id', async (req, res) => {
    // res.send('deleting...');
    try {
        const deletedLog = await Log.findByIdAndDelete(req.params.id);
        console.log(deletedLog);
        res.status(200).redirect('/logs');
    } catch (err) {
        res.status(400).send(err);
    }
})

// U - UPDATE - makes the actual changes to the database based on the EDIT form
router.put('/:id', async (req, res) => {
    //console.log(req.body.shipIsBroken);
    console.log(req.body);
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }

    try {
        const updatedLog = await Log.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
        //console.log(updatedLog);
        res.status(200).redirect(`/logs/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
 })

 
// C - CREATE - update our data store
router.post('/', async (req, res) => {
    if(req.body.shipIsBroken === 'on') { //if checked, req.body.readyToEat is set to 'on'
        req.body.shipIsBroken = true;
    } else {  //if not checked, req.body.readyToEat is undefined
        req.body.shipIsBroken = false;
    }
console.log(req.body)
    try {
        const createdLog = await Log.create(req.body);
        console.log(createdLog)
        res.status(200).redirect('/logs');
    } catch (err) {
        res.status(400).send(err);
    }
   
})

//E-EDIT -allow the user to provide the inputs to change the fruit

router.get('/:id/edit', async (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray]);
    try {
        const foundLog = await Log.findById(req.params.id);
        res.status(200).render('logs/Edit', {log: foundLog});
    } catch (err) {
        res.status(400).send(err);
    }

})
 

// S - SHOW - show route displays details of an individual fruit
router.get('/:id', async (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray]);
    try {
        const foundLog = await Log.findById(req.params.id);
        res.render('logs/Show', {log: foundLog});
    } catch (err) {
        res.status(400).send(err);
    }

})
// Export the Router
module.exports = router;
