const express = require("express");
const router = express.Router();
const jwt = require('jwt-simple');
// const secret = require('../utils/config').myprivatekey;
const { COOKIE_NAME, secret, DB_URL  } = require('../utils/config');


const MongoClient = require("mongodb").MongoClient;
const ObjectId = require('mongodb').ObjectID;

const url = DB_URL;

const validateRequest = require('./validateRequest');

router.post('/roleNExpDate', validateRequest, (req, res) => {
  
    if (res.permision == true) {
        
        let roleAndExpDate = req.body;
     

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            const dbo = db.db("mordict");

            const myquery = { _id: new ObjectId(roleAndExpDate._id) };
            const newvalues = { $set: { role: roleAndExpDate.role, expDate: roleAndExpDate.expDate } };

            dbo.collection("users").updateOne(myquery, newvalues, function (err, resultsDB) {
                if (err) throw err;
                console.log(`${resultsDB.matchedCount} document updated`);
                db.close();
                res.send({ success: `${resultsDB.matchedCount} document updated`})
            });
        });
    } else {
        res.send({error:'user do save to db '})
    }
})
 

    
router.post('/delete', validateRequest, (req, res) => {
     
        if (res.permision == true) {

            let _id = req.body._id;           

            MongoClient.connect(url, function (err, db) {
                if (err) throw err;
                const dbo = db.db("mordict");

                const myquery = {
                    _id: new ObjectId(_id)                   
                };
                

                dbo.collection("users").deleteOne(myquery, function (err, resultsDB) {
                    if (err) throw err;                   
         
                    db.close();
                    res.send({ success: `${resultsDB.deletedCount} document removed` })
                });
            });
        } else {
            res.send({ error: 'user do save to db ' })
        }
    })
router.post('/updatePassword', validateRequest, (req, res) => {
     
        if (res.permision == true) {

            let { _id, newPassword } = req.body;  
            let encodedPassword = jwt.encode(newPassword, secret);
            

            MongoClient.connect(url, function (err, db) {
                if (err) throw err;
                const dbo = db.db("mordict");

                const myquery = {
                    _id: new ObjectId(_id)                   
                };
                const newvalues = { $set: { password: encodedPassword } };
                

                dbo.collection("users").updateOne(myquery, newvalues, function (err, resultsDB) {
                    if (err) throw err;                   
         
                    console.log(`${resultsDB.matchedCount} document updated`);
                    db.close();
                    res.send({ success: `${resultsDB.matchedCount} document updated` })
                });
            });
        } else {
            res.send({ error: 'user do save to db ' })
        }
    })

module.exports = router;