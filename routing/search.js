const express = require("express");
const router = express.Router();

const { DB_URL } = require('../utils/config.json');
const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";
const url = DB_URL;

const validateRequest = require('./validateRequest');

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

            } else {
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


        } else {
            res.send({ error: 'use can not search in this page' })
        }

    } catch (err) {
        console.log(err)
        res.send({ error: err })
    }
})

module.exports = router;