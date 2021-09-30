module.exports = app => { 
    const tutorials = require('../controllers/userRoute')
   
    var router = require("express").Router();
   
    router.post("/", tutorials.registerUser);

    router.post("/login", tutorials.loginUser);

    router.post("/addbooks",tutorials.NewValidUser,tutorials.addbook)
   
    router.get("/getAll",tutorials.NewValidUser,tutorials.getAll)

    router.post("/update/:id",tutorials.NewValidUser, tutorials.updatebyid);
   
    router.delete("/delete/:id",tutorials.NewValidUser,tutorials.delete)

    app.use('/api', router);
   } 
