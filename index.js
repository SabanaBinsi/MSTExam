const express = require("express");
const ItemInfo = require('./models/itemsDb');

const path = require('path');


const app = new express();

const multer = require("multer")
// const upload = multer()

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'/build'))); 



// cors policy
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();

})





app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();

})

app.get('/',(req,res) =>{
    res.send("congratulations!! Server is Up")
})
app.get('/about',(req,res) =>{
    res.send("Hi shabana Binsi PT")
})

// app.post('api/upload', upload.single(Image), function (req, res, next) {
//     // req.body contains the text fields
//     try {
//         console.log(req.file, req.body, 16);
//         let item = new ItemInfo(req.body);  //passing the data to database
//         item.save(); //saving to db
//         res.send("Image Added");
    
//     }
//     catch (error) {      //error msg
//         res.status(500).send(error);
//     }
//   })

app.post('/api/create',(req,res) => {
    try {
        console.log(req.body);
        let item = new ItemInfo(req.body);  //passing the data to database
        item.save(); //saving to db
        res.send("Data Added");
    
    }
    catch (error) {      //error msg
        res.status(500).send(error);
    }
  
});

app.get('/api/view' , async(req, res)=> {
    try {
        let results = await ItemInfo.find();
        res.json(results);

    }
    catch (error) {      //error msg
        res.status(500).send(error);
    }
});

app.post('/api/delete' , async(req, res) =>{
    try{

        let result =await ItemInfo.findByIdAndDelete(req.body._id,req.body);
        res.send("Data Deleted");
    }
    catch (error) {      //error msg
        res.status(500).send(error);
    }
});

app.post('/api/update',async (req,res) => {
    try{
        let result = await ItemInfo.findByIdAndUpdate(req.body._id,req.body);
        res.send ("Data Update");
    }
    catch (error) {      //error msg
        res.status(500).send(error);
    }
});
app.get('/*',function (req, res) {
    res.sendFile(path.join(__dirname,'/build/index.html'));
});
app.listen(7000, () => {
    console.log("Server is running in port 7000");
})