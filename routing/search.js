const express = require("express");
const router = express.Router();
const jwt = require('jwt-simple');
const { COOKIE_NAME, secret } = require('../utils/config');
const { DB_URL } = require('../utils/config.json');
const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";
const url = DB_URL;

const validateRequest = require('./validateRequest');

router.post(
    "/addnewstudent/:name/:email/:date/:role",
    (req, res) => {
        const name = req.params.name;
        const email = req.params.email;
        const date = new Date(req.params.date);
        const role = req.params.role;
        // const password = "morasha";
        const password = jwt.encode("morasha", secret);
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            var newstudent = {
                name: name,
                email: email,
                expDate: date,
                role: role,
                password: password
            };
            dbo
                .collection("users")
                .updateOne( {email:email}, {$set:newstudent}, { upsert: true} , function(err, result) {
                    if (err) throw err;
                    console.log("1 student inserted");
                    res.send(result);
                    // console.dir(result.WriteResult.nUpserted);
                    db.close();
                });
        });
    }
);

router.get("/getallstudents", (req, res) => {
    const date = new Date();
    console.log(date);
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        dbo
            .collection("users")
            .find({ role: "student", expDate:{$gt:date} })
            .sort({ time: 1 })
            .toArray(function (err, result) {
                if (err) throw err;
                console.dir(result);
                res.send(result);
                db.close();
            });
    });
});
router.get("/getoldstudents", (req, res) => {
    const date = new Date();
    console.log(date);
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        dbo
            .collection("users")
            .find({ role: "student", expDate:{$lte:date} })
            .sort({ time: 1 })
            .toArray(function (err, result) {
                if (err) throw err;
                console.dir(result);
                res.send(result);
                db.close();
            });
    });
});
router.get("/searchbyemail/:email", (req, res) => {
    const email = req.params.email;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        dbo
            .collection("users")
            .find({ email: email })
            .toArray(function (err, result) {
                if (err) throw err;
                res.send(result);
                console.log(result[0].email);
                db.close();
            });
    });
});
router.get("/searchbyname/:name", (req, res) => {
    const name = req.params.name;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        dbo
            .collection("users")
            .find({ name: name })
            .toArray(function (err, result) {
                if (err) throw err;
                res.send(result);
                console.log(result[0].name);
                db.close();
            });
    });
});
router.post('/by/:method', validateRequest, (req, res) => {
   
    try {
        if (res.permision == true) {
            if (req.params.method === 'new') {              

                MongoClient.connect(url, function (err, db) {
                    if (err) throw err;
                    var dbo = db.db("mordict");

                    dbo.collection("users")
                        .find({time: {$exists: true}})
                        .sort({ time: 1 })
                        .limit(20).toArray(function (err, result) {
                            if (err) throw err;
                            res.send(result);
                            db.close()

                        });
                });

            }else {
                let searchTerm = req.body.searchTerm;
                let searchSettings = {};
                searchSettings[req.params.method || email] = new RegExp(searchTerm, 'g')



                MongoClient.connect(url, function (err, db) {
                    if (err) throw err;
                    var dbo = db.db("mordict");

                    dbo.collection("users").find(searchSettings).toArray(function (err, result) {
                        if (err) throw err;


                        res.send(result);

                        db.close()


                    });
                });
            }


        }else {
            res.send({ error: 'use can not search in this page' })
        }

    } catch (err) {
        console.log(err)
        res.send({ error: err })
    }
});
router.delete("/deleteuser/:email", (req, res) => {
    MongoClient.connect(
        url,
        {
            useNewUrlParser: true
        },
        function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            var email = req.params.email;
            dbo
                .collection("users")
                .deleteOne({ email: email }, function (err, result) {
                    if (err) throw err;
                    console.log(result);
                    res.send(result);
                    db.close();
                });
        }
    );
})
module.exports = router;