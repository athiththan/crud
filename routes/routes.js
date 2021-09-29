module.exports = app => { 
    const tutorials = require('../controllers/userRoute')
   
    var router = require("express").Router();
   
    router.post("/", tutorials.registerUser);

    router.post("/login", tutorials.loginUser);

    router.post("/addbooks",tutorials.addbook)
   
    router.get("/getAll",tutorials.getAll)
   
    app.use('/api', router);
   } 
