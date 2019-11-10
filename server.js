const express = require("express");
const path = require('path');
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const {DB_URL} = require('./utils/config.json') 
const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";
const url = DB_URL;

//util
const validateUser = require("./utils/user").validateUser;
const authRouter = require('./routing/auth');
const searchRouter = require('./routing/search');
const writeRouter = require('./routing/write');
const dictRouter = require('./routing/dict');

const app = express();




app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//remove in production
app.use(cors());
//until here

app.use("/auth", authRouter);
app.use("/search", searchRouter);
app.use("/write", writeRouter);
app.use("/dict", dictRouter)

app.get('/', (req, res) => {
  console.log('main')
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mordict");

  dbo.createCollection("roots", function(err, res) {
    if (err) throw err;
    console.log("Collection roots created!");
      db.close();
  });


});



// app.post("/register", async (req, res) => {
//   // validate the request body first
//   if (validateUser(req.body)) {
//     console.log(req.body);

//     // let user = await User.findOne({ email: req.body.email });
//     // console.log("user", user);
//     // if (user) return res.status(400).send("User already registered.");

//     MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//       if (err) throw err;
//       var dbo = db.db("mordict");
      
//       dbo
//         .collection("users")
//         .findOne({ email: req.body.email }, function(err, result) {
//           if (err) throw err;
//           if(result === null){
//             console.log('user is not registerd yet')
//             //insert to DB
//             dbo.collection('users').insertOne(req.body, (err, result)=>{
//               if (err) throw err;
//               console.log('user registerd')
//               res.send({sucess:"new user registerd"});
//             })
//           } else{
//             res.send({error:"User is allredy registerd"});
//           }

//           // res.send(result);
//           db.close();
//         });
//     });

  
//   } else {
//     res.send({ error: "not a valid rgistration object" });
//   }
// });

let port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("Server listen on port", port);
});
