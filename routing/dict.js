const express = require("express");
const router = express.Router();
const jwt = require('jwt-simple');
// const secret = require('../utils/config').myprivatekey;
const { COOKIE_NAME, secret } = require('../utils/config');
const validateRequest = require('./validateRequest');
const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";
const url =
    "mongodb://mordict-6518:V5p6ZxwtJnGrKVSPCcogji6nURiR0a@db-mordict-6518.nodechef.com:5421/mordict";

const roles = require('./roles')




router.get("/countroots/", (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");

        dbo.collection("roots").find({}).toArray(function (err, result) {
            if (err) throw err;
            res.send(result);
            console.log(result.length);
            db.close()
        });

    })
})
router.get("/checkandrenamesoundfile/", (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");

        dbo.collection("roots").find({}).toArray(function (err, results) {
            if (err) throw err;
            results.map((result) => {
                var fs = require('fs');
                var filename = "C:\\milon\\" + result.root_id_old + ".wav";
                var newfaliname = "C:\\milon\\" + result.sound;
                fs.exists(filename, function (exists) {
                    if (exists) {
                        fs.renameSync(filename, newfaliname)
                    }
                });
            });
            res.send(results);
            db.close()
        });

    })
})



router.put("/oldroots/", (req, res) => {

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log(arr.length);
        arr.map((ar, key) => {
            console.log("yes");
            console.log(key);
            // var dbo = db.db("mordict");
            // dbo.collection("roots").updateOne({root_id:ar}, { $set : { root_id_old : ar }},function(err, result) {
            //     if (err) throw err;
            //     res.send(result);
            //   });
        });
        db.close();
    });
});

// get one

router.get("/getroot/:root_id", (req, res) => {
    const root_id = req.params.root_id;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        dbo
            .collection("roots")
            .find({ root_id: root_id })
            .toArray(function (err, result) {
                if (err) throw err;
                res.send(result);
                console.log(result.root_id);
                db.close();
            });
    });
});

//get many

router.get("/gettranslations/:root_id", (req, res) => {
    const root_id = req.params.root_id;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        dbo
            .collection("roots")
            .find({ root_id: root_id })
            .toArray(function (err, result) {
                if (err) throw err;
                console.dir(result);
                res.send(result);
                db.close();
            });
    });
});

router.get("/getpassive/:root_id", (req, res) => {
    const root_id = req.params.root_id;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        dbo
            .collection("roots")
            .find({ root_id: root_id })
            .toArray(function (err, result) {
                if (err) throw err;
                console.dir(result);
                res.send(result);
                db.close();
            });
    });
});
router.get("/getactive/:root_id", (req, res) => {
    const root_id = req.params.root_id;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        dbo
            .collection("roots")
            .find({ root_id: root_id })
            .toArray(function (err, result) {
                if (err) throw err;
                console.dir(result);
                res.send(result);
                db.close();
            });
    });
});


router.get("/getfamilies/:root_id", (req, res) => {
    const root_id = req.params.root_id;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        dbo
            .collection("roots")
            .find({ root_id: root_id })
            .toArray(function (err, result) {
                if (err) throw err;
                res.send(result);
                db.close();
            });
    });
});

router.get("/getfamiliesverbs/:root_id", (req, res) => {
    const root_id = req.params.root_id;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");

        dbo
            .collection("roots")
            .find({ root_id: root_id })
            .toArray(function (err, result) {
                if (err) throw err;
                res.send(result);
                db.close();
            });
    });
});

router.get("/getsynonyms/:root_id", (req, res) => {
    const root_id = req.params.root_id;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        dbo
            .collection("roots")
            .find({ root_id: root_id })
            .toArray(function (err, result) {
                if (err) throw err;
                res.send(result);
                db.close();
            });
    });
});

router.get("/getantonyms/:root_id", (req, res) => {
    const root_id = req.params.root_id;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        dbo
            .collection("roots")
            .find({ root_id: root_id })
            .toArray(function (err, result) {
                if (err) throw err;
                res.send(result);
                db.close();
            });
    });
});

router.get("/getphrases/:root_id", (req, res) => {
    const root_id = req.params.root_id;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        dbo
            .collection("roots")
            .find({ root_id: root_id })
            .toArray(function (err, result) {
                if (err) throw err;
                res.send(result);
                db.close();
            });
    });
});
//getroots с проверкой на существование звуковых файлов
// router.get("/getroots/:benjan/:letter1/:letter2/:letter3/:letter4", (req, res) => {
router.post("/getroots", (req, res) => {
    const benjan = req.body.benjan;
    const letter1 = req.body.letter1;
    const letter2 = req.body.letter2;
    const letter3 = req.body.letter3;
    const letter4 = req.body.letter4;
    var arrRoots = [];
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        var query = {
            benjan: benjan,
            letter1: letter1,
            letter2: letter2,
            letter3: letter3,
            letter4: letter4,
            soundFileExist: "0"
        };
        var query1 = { root_id_old: { $in: arrRoots } };
        var query2 = {
            benjan: benjan,
            letter1: letter1,
            letter2: letter2,
            letter3: letter3,
            letter4: letter4
        };
        //one
        function one() {
            return new Promise(resolve => {
                dbo.collection("roots").find(query).toArray(function (err, results) {
                    if (err) throw err;
                    if (results.length == 0) {
                        resolve();
                    }
                    results.map((result, key) => {
                        var fs = require('fs');
                        var filename = "C:\\milon\\" + result.root_id_old + ".wav";
                        var newfaliname = "C:\\milon\\" + result.sound;
                        fs.exists(filename, function (exists) {
                            if (exists) {
                                fs.renameSync(filename, newfaliname);
                                arrRoots.push(result.root_id_old);
                                console.log(key + 1, results.length)
                                if (key == 0) {
                                    resolve();
                                }
                            } else {
                                resolve();
                            }
                        })

                    });
                });
            });
        }
        //end one

        //two
        function two() {
            console.dir(arrRoots);
            return new Promise(resolve => {
                dbo.collection("roots").updateMany(query1, { $set: { soundFileExist: "1" } }, function (err, results) {
                    if (err) throw err;
                    console.log("two");
                    resolve();
                });

            });
        }
        //end two
        //three
        function three() {
            return new Promise(resolve => {
                dbo.collection("roots").find(query2).toArray(function (err, result) {
                    if (err) throw err;
                    console.log('result:', result);
                    res.send(result);

                    db.close();
                    console.log("three");
                    resolve();
                });
            });
        }
        //end three

        one().then(() => two()).then(() => three());
    });
});
//конец getroots с проверкой на существование звуковых файлов

// router.get("/getroots/:benjan/:letter1/:letter2/:letter3/:letter4", (req, res) => {
//   const benjan = req.params.benjan;
//   const letter1 = req.params.letter1;
//   const letter2 = req.params.letter2;
//   const letter3 = req.params.letter3;
//   const letter4 = req.params.letter4;
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mordict");
//     var query = {
//       benjan: benjan,
//       letter1: letter1,
//       letter2: letter2,
//       letter3: letter3,
//       letter4: letter4
//     };
//     dbo
//       .collection("roots")
//       .find(query)
//       .toArray(function(err, result) {
//         if (err) throw err;
//         res.send(result);
//         console.dir(result);
//         db.close();
//       });
//   });
// });
// router.get("/getverbsbyletters/:root_id/:letter1/:letter2/:letter3/:letter4", (req, res) => {
//   const root_id = req.params.root_id;
//   const letter1 = req.params.letter1;
//   const letter2 = req.params.letter2;
//   const letter3 = req.params.letter3;
//   const letter4 = req.params.letter4;
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mordict");
//     var query = {
//       root_id: {$ne:root_id},
//       letter1: letter1,
//       letter2: letter2,
//       letter3: letter3,
//       letter4: letter4
//     };
//     dbo
//       .collection("roots")
//       .find(query)
//       .toArray(function(err, result) {
//         if (err) throw err;
//         res.send(result);
//         console.dir(result);
//         db.close();
//       });
//   });
// });

removeNikudot = function(word){
    wordWithoutNikudot = word.replace(/ְ|ּ|ָ|ַ|ֹ|ִ|ֶ||ֵֻ/g, "")
    return (wordWithoutNikudot);
}
removeUnderscore = function(word){
    if (word.length > 1){
        wordWithoutUnderscore = word.replace("/_/g","");
    }else{
        wordWithoutUnderscore = word;  
    } 
    return (wordWithoutUnderscore);    
}
router.get("/getrootsbysearch/:search", (req, res) => {
    const search = req.params.search;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
    
        var query = {$or:[{$and:[{letter1: search.slice(0,1)},{letter2:search.slice(1,2)},{letter3:search.slice(2,3)},{$or:[{letter4:"non"},{letter4:search.slice(3,4)}]}]},{inf:search},{infS:search},{infS:search},{p1s:search},{p1sS:search},{p2sm:search},{p2smS:search},
        {p2sw:search},{p2swS:search},{p3sm:search},{p3smS:search},{p3sw:search},{p3swS:search},{p1m:search},{p1mS:search},
        {p2mm:search},{p2mmS:search},{p2mw:search},{p2mwS:search},{p3m:search},{p3mS:search},{nsm:search},{nsmS:search},
        {nsw:search},{nswS:search},{nmm:search},{nmmS:search},{nmw:search},{nmwS:search},{f1s:search},{f1sS:search},
        {f2sm:search},{f2smS:search},{f2sw:search},{f2swS:search},{f3sm:search},{f3smS:search},{f3sw:search},{f3swS:search}
        ,{f1m:search},{f1mS:search},{f2mm:search},{f2mmS:search},{f2mw:search},{f2mwS:search},{f3m:search},{f3mS:search}
        ,{ism:search},{ismS:search},{isw:search},{iswS:search},{imm:search},{immS:search},{imw:search},{imwS:search}
        ,{ns:search},{nsS:search},{nm:search},{nmS:search},{asm:search},{asmS:search},{asw:search},{aswS:search}
        ,{amm:search},{ammS:search},{amw:search},{amwS:search},
        {"families.family":search},{"translations.translateRu":search},
        {"translations.translateEn":search},{ "translations.translateEn": { $regex: search } },{"translations.translateFr":search}]};
    
        dbo.collection("roots").find(query).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
            console.dir(result);
            db.close();
        });
    });
});
router.get("/getrootsbypassiveid/:root_id", (req, res) => {
    const root_id = req.params.root_id;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        dbo
            .collection("roots")
            .find({ root_id: root_id })
            .toArray(function (err, result) {
                if (err) throw err;
                res.send(result);
                db.close();
            });
    });
});
router.get(
    "/getallsameroots/",
    (req, res) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            var ObjectID = require("mongodb").ObjectID;
            dbo.collection("roots")
                .aggregate([{ $group: { _id: "$root_id", same_root_id: { $sum: 1 } } }])
                .toArray(function (err, results1) {
                    if (err) throw err;
                    res.send(results1);
                    var fs = require('fs');
                    var filename = 'output.txt';
                    var str = JSON.stringify(results1, null, 4);

                    fs.writeFile(filename, str, function (err) {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log('File written!');

                        }
                    });

                });
        });
    }
);
router.put("/updatealltranslations1/", (req, res) => {
    arr.map((ar, key) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            var num = String(key + 1);
            // dbo.collection("translations").updateMany({root_id_old:ar}, {$set:{root_id:num}}, function(err, result) {
            //   if (err) throw err;
            //   console.log("translations",num);
            // });
            // dbo.collection("synonyms").updateMany({root_id:ar}, {$set:{root_id_old:ar, root_id:num}}, function(err, result) {
            //   if (err) throw err;
            //   console.log("synonyms",num);
            // });
            dbo.collection("activepassives").updateMany({ passive_id: ar }, { $set: { passive_id_old: ar, passive_id: num } }, function (err, result) {
                if (err) throw err;
                console.log("passive", num);
            });
            db.close();
        });
    });
});


//update

router.put('/updatetranslation/:root_id/:translationId/:preposition/:translateRu/:translateEn/:translateFr/:sentence1/:sentence2/:sentence3' +
    '/:sentence1TranslateRu/:sentence2TranslateRu/:sentence3TranslateRu' +
    '/:sentence1TranslateEn/:sentence2TranslateEn/:sentence3TranslateEn' +
    '/:sentence1TranslateFr/:sentence2TranslateFr/:sentence3TranslateFr', (req, res) => {
        const root_id = req.params.root_id;
        const translationId = Number(req.params.translationId);
        const preposition = req.params.preposition;
        const translateRu = req.params.translateRu;
        const translateEn = req.params.translateEn;
        const translateFr = req.params.translateFr;
        const sentence1 = req.params.sentence1;
        const sentence2 = req.params.sentence2;
        const sentence3 = req.params.sentence3;
        const sentence1TranslateRu = req.params.sentence1TranslateRu;
        const sentence2TranslateRu = req.params.sentence2TranslateRu;
        const sentence3TranslateRu = req.params.sentence3TranslateRu;
        const sentence1TranslateEn = req.params.sentence1TranslateEn;
        const sentence2TranslateEn = req.params.sentence2TranslateEn;
        const sentence3TranslateEn = req.params.sentence3TranslateEn;
        const sentence1TranslateFr = req.params.sentence1TranslateFr;
        const sentence2TranslateFr = req.params.sentence2TranslateFr;
        const sentence3TranslateFr = req.params.sentence3TranslateFr;
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            var ObjectID = require('mongodb').ObjectID;
            var newvalues = {
                translationId: translationId,
                preposition: preposition,
                translateRu: translateRu,
                translateEn: translateEn,
                translateFr: translateFr,
                sentence: sentence1,
                sentence1: sentence1,
                sentence2: sentence2,
                sentence3: sentence3,
                sentenceTranslateRu: sentence1TranslateRu,
                sentence1TranslateRu: sentence1TranslateRu,
                sentence2TranslateRu: sentence2TranslateRu,
                sentence3TranslateRu: sentence3TranslateRu,
                sentenceTranslateEn: sentence1TranslateEn,
                sentence1TranslateEn: sentence1TranslateEn,
                sentence2TranslateEn: sentence2TranslateEn,
                sentence3TranslateEn: sentence3TranslateEn,
                sentenceTranslateFr: sentence1TranslateFr,
                sentence1TranslateFr: sentence1TranslateFr,
                sentence2TranslateFr: sentence2TranslateFr,
                sentence3TranslateFr: sentence3TranslateFr,
                sentenceSound: root_id + "S_" + translationId
            };

            dbo.collection("roots")
                .updateOne({ root_id: root_id, "translations.translationId": translationId }, { $set: { "translations.$": newvalues } }, function (err, result) {
                    if (err) throw err;
                    console.dir(result);
                    res.send(result);
                    db.close();
                });
        });
    })

router.put("/updateallfamilies/", (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        var ObjectID = require("mongodb").ObjectID;
        var myquery = { familyPosition: { $exists: false } };
        var newvalues = {
            $set: {

                familyPosition: "_"
            }
        };
        dbo
            .collection("families")
            .updateMany(myquery, newvalues, function (err, result) {
                if (err) throw err;
                console.log("1 family updated");
                res.send(result);
                db.close();
            });
    });
}
);
router.put("/updateallfamiliesverb/", (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        var ObjectID = require("mongodb").ObjectID;
        var myquery = { familyverbPosition: { $exists: false } };
        var newvalues = {
            $set: {

                familyverbPosition: "_"
            }
        };
        dbo
            .collection("familiesverbs")
            .updateMany(myquery, newvalues, function (err, result) {
                if (err) throw err;
                console.log("1 familyverb updated");
                res.send(result);
                db.close();
            });
    });
}
);

router.put(
    "/updatefamily/:root_id/:familyId/:family/:familyPosition/:familyTranslateRu/:familyTranslateEn/:familyTranslateFr",
    (req, res) => {
        const root_id = req.params.root_id;
        const familyId = Number(req.params.familyId);
        const family = req.params.family;
        const familyPosition = req.params.familyPosition;
        const familyTranslateRu = req.params.familyTranslateRu;
        const familyTranslateEn = req.params.familyTranslateEn;
        const familyTranslateFr = req.params.familyTranslateFr;
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            var newvalues = {
                familyId: familyId,
                family: family,
                familyPosition: familyPosition,
                familyTranslateRu: familyTranslateRu,
                familyTranslateEn: familyTranslateEn,
                familyTranslateFr: familyTranslateFr
            };
            dbo.collection("roots")
                .updateOne({ root_id: root_id, "families.familyId": familyId }, { $set: { "families.$": newvalues } }, function (err, result) {
                    if (err) throw err;
                    console.log("1 family updated");
                    res.send(result);
                    db.close();
                });
        });
    }
);

router.put(
    "/updatefamilyverb/:root_id/:familyverbId/:familyverb/:familyverbPosition/:familyverbTranslateRu/:familyverbTranslateEn/:familyverbTranslateFr",
    (req, res) => {
        const root_id = req.params.root_id;
        const familyverbId = Number(req.params.familyverbId);
        const familyverb = req.params.familyverb;
        const familyverbPosition = req.params.familyverbPosition;
        const familyverbTranslateRu = req.params.familyverbTranslateRu;
        const familyverbTranslateEn = req.params.familyverbTranslateEn;
        const familyverbTranslateFr = req.params.familyverbTranslateFr;

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            var newvalues = {
                familyverbId: familyverbId,
                familyverb: familyverb,
                familyverbPosition: familyverbPosition,
                familyverbTranslateRu: familyverbTranslateRu,
                familyverbTranslateEn: familyverbTranslateEn,
                familyverbTranslateFr: familyverbTranslateFr
            };
            dbo.collection("roots")
                .updateOne({ root_id: root_id, "familiesverbs.familyverbId": familyverbId }, { $set: { "familiesverbs.$": newvalues } }, function (err, result) {
                    if (err) throw err;
                    console.log("1 familyverb updated");
                    res.send(result);
                    db.close();
                });
        });
    }
);

router.put(
    "/updatesynonym/:root_id/:synonymId/:synonym/:synonymTranslateRu/:synonymTranslateEn/:synonymTranslateFr",
    (req, res) => {
        const root_id = req.params.root_id;
        const synonymId = Number(req.params.synonymId);
        const synonym = req.params.synonym;
        const synonymTranslateRu = req.params.synonymTranslateRu;
        const synonymTranslateEn = req.params.synonymTranslateEn;
        const synonymTranslateFr = req.params.synonymTranslateFr;

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            var newvalues = {
                synonymId: synonymId,
                synonym: synonym,
                synonymTranslateRu: synonymTranslateRu,
                synonymTranslateEn: synonymTranslateEn,
                synonymTranslateFr: synonymTranslateFr
            };
            dbo.collection("roots")
                .updateOne({ root_id: root_id, "synonyms.synonymId": synonymId }, { $set: { "synonyms.$": newvalues } }, function (err, result) {
                    if (err) throw err;
                    console.log("1 synonym updated");
                    res.send(result);
                    db.close();
                });
        });
    }
);
router.put(
    "/updateantonym/:root_id/:antonymId/:antonym/:antonymTranslateRu/:antonymTranslateEn/:antonymTranslateFr",
    (req, res) => {
        const root_id = req.params.root_id;
        const antonymId = Number(req.params.antonymId);
        const antonym = req.params.antonym;
        const antonymTranslateRu = req.params.antonymTranslateRu;
        const antonymTranslateEn = req.params.antonymTranslateEn;
        const antonymTranslateFr = req.params.antonymTranslateFr;

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            var newvalues = {
                antonymId: antonymId,
                antonym: antonym,
                antonymTranslateRu: antonymTranslateRu,
                antonymTranslateEn: antonymTranslateEn,
                antonymTranslateFr: antonymTranslateFr
            };
            dbo.collection("roots")
                .updateOne({ root_id: root_id, "antonyms.antonymId": antonymId }, { $set: { "antonyms.$": newvalues } }, function (err, result) {
                    if (err) throw err;
                    console.log("1 antonym updated");
                    res.send(result);
                    db.close();
                });
        });
    }
);
router.put(
    "/updatephrase/:root_id/:phraseId/:phrase/:phraseTranslateRu/:phraseTranslateEn/:phraseTranslateFr",
    (req, res) => {
        const root_id = req.params.root_id;
        const phraseId = Number(req.params.phraseId);
        const phrase = req.params.phrase;
        const phraseTranslateRu = req.params.phraseTranslateRu;
        const phraseTranslateEn = req.params.phraseTranslateEn;
        const phraseTranslateFr = req.params.phraseTranslateFr;

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            var newvalues = {
                phraseId: phraseId,
                phrase: phrase,
                phraseTranslateRu: phraseTranslateRu,
                phraseTranslateEn: phraseTranslateEn,
                phraseTranslateFr: phraseTranslateFr
            };
            dbo.collection("roots")
                .updateOne({ root_id: root_id, "phrases.phraseId": phraseId }, { $set: { "phrases.$": newvalues } }, function (err, result) {
                    if (err) throw err;
                    console.log("1 phrase updated");
                    res.send(result);
                    db.close();
                });
        });
    }
);
router.put(
    "/updateforms/:root_id/:benjan/:letter1/:letter2/:letter3/:letter4/:descript/:sound/:inf/:infS/:p1s/:p1sS/:p2sm/:p2smS/:p2sw/:p2swS/:p3sm/:p3smS/" +
    ":p3sw/:p3swS/:p1m/:p1mS/:p2mm/:p2mmS/:p2mw/:p2mwS/:p3m/:p3mS/:nsm/:nsmS/:nsw/:nswS/:nmm/:nmmS/:nmw/:nmwS/:f1s" +
    "/:f1sS/:f2sm/:f2smS/:f2sw/:f2swS/:f3sm/:f3smS/:f3sw/:f3swS/:f1m/:f1mS/:f2mm/:f2mmS/:f2mw/:f2mwS/:f3m/:f3mS/:ism/:ismS/:isw" +
    "/:iswS/:imm/:immS/:imw/:imwS/:ns/:nsS/:nm/:nmS/:asm/:asmS/:asw/:aswS/:amm/:ammS/:amw/:amwS",
    (req, res) => {
        const root_id = req.params.root_id;
        const benjan = req.params.benjan;
        const letter1 = req.params.letter1;
        const letter2 = req.params.letter2;
        const letter3 = req.params.letter3;
        const letter4 = req.params.letter4;
        const descript = req.params.descript;
        const sound = req.params.sound;
        const inf = req.params.inf;
        const infS = req.params.infS;
        const p1s = req.params.p1s;
        const p1sS = req.params.p1sS;
        const p2sm = req.params.p2sm;
        const p2smS = req.params.p2smS;
        const p2sw = req.params.p2sw;
        const p2swS = req.params.p2swS;
        const p3sm = req.params.p3sm;
        const p3smS = req.params.p3smS;
        const p3sw = req.params.p3sw;
        const p3swS = req.params.p3swS;
        const p1m = req.params.p1m;
        const p1mS = req.params.p1mS;
        const p2mm = req.params.p2mm;
        const p2mmS = req.params.p2mmS;
        const p2mw = req.params.p2mw;
        const p2mwS = req.params.p2mwS;
        const p3m = req.params.p3m;
        const p3mS = req.params.p3mS;
        const nsm = req.params.nsm;
        const nsmS = req.params.nsmS;
        const nsw = req.params.nsw;
        const nswS = req.params.nswS;
        const nmm = req.params.nmm;
        const nmmS = req.params.nmmS;
        const nmw = req.params.nmw;
        const nmwS = req.params.nmwS;
        const f1s = req.params.f1s;
        const f1sS = req.params.f1sS;
        const f2sm = req.params.f2sm;
        const f2smS = req.params.f2smS;
        const f2sw = req.params.f2sw;
        const f2swS = req.params.f2swS;
        const f3sm = req.params.f3sm;
        const f3smS = req.params.f3smS;
        const f3sw = req.params.f3sw;
        const f3swS = req.params.f3swS;
        const f1m = req.params.f1m;
        const f1mS = req.params.f1mS;
        const f2mm = req.params.f2mm;
        const f2mmS = req.params.f2mmS;
        const f2mw = req.params.f2mw;
        const f2mwS = req.params.f2mwS;
        const f3m = req.params.f3m;
        const f3mS = req.params.f3mS;
        const ism = req.params.ism;
        const ismS = req.params.ismS;
        const isw = req.params.isw;
        const iswS = req.params.iswS;
        const imm = req.params.imm;
        const immS = req.params.immS;
        const imw = req.params.imw;
        const imwS = req.params.imwS;
        const ns = req.params.ns;
        const nsS = req.params.nsS;
        const nm = req.params.nm;
        const nmS = req.params.nmS;
        const asm = req.params.asm;
        const asmS = req.params.asmS;
        const asw = req.params.asw;
        const aswS = req.params.aswS;
        const amm = req.params.amm;
        const ammS = req.params.ammS;
        const amw = req.params.amw;
        const amwS = req.params.amwS;

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            var myquery = { root_id: root_id };
            var newvalues = {
                $set: {
                    benjan: benjan,
                    letter1: letter1,
                    letter2: letter2,
                    letter3: letter3,
                    letter4: letter4,
                    descript: descript,
                    sound: sound,
                    inf: inf,
                    infS: infS,
                    p1s: p1s,
                    p1sS: p1sS,
                    p2sm: p2sm,
                    p2smS: p2smS,
                    p2sw: p2sw,
                    p2swS: p2swS,
                    p3sm: p3sm,
                    p3smS: p3smS,
                    p3sw: p3sw,
                    p3swS: p3swS,
                    p1m: p1m,
                    p1mS: p1mS,
                    p2mm: p2mm,
                    p2mmS: p2mmS,
                    p2mw: p2mw,
                    p2mwS: p2mwS,
                    p3m: p3m,
                    p3mS: p3mS,
                    nsm: nsm,
                    nsmS: nsmS,
                    nsw: nsw,
                    nswS: nswS,
                    nmm: nmm,
                    nmmS: nmmS,
                    nmw: nmw,
                    nmwS: nmwS,
                    f1s: f1s,
                    f1sS: f1sS,
                    f2sm: f2sm,
                    f2smS: f2smS,
                    f2sw: f2sw,
                    f2swS: f2swS,
                    f3sm: f3sm,
                    f3smS: f3smS,
                    f3sw: f3sw,
                    f3swS: f3swS,
                    f1m: f1m,
                    f1mS: f1mS,
                    f2mm: f2mm,
                    f2mmS: f2mmS,
                    f2mw: f2mw,
                    f2mwS: f2mwS,
                    f3m: f3m,
                    f3mS: f3mS,
                    ism: ism,
                    ismS: ismS,
                    isw: isw,
                    iswS: iswS,
                    imm: imm,
                    immS: immS,
                    imw: imw,
                    imwS: imwS,
                    ns: ns,
                    nsS: nsS,
                    nm: nm,
                    nmS: nmS,
                    asm: asm,
                    asmS: asmS,
                    asw: asw,
                    aswS: aswS,
                    amm: amm,
                    ammS: ammS,
                    amw: amw,
                    amwS: amwS
                }
            };
            dbo
                .collection("roots")
                .updateOne(myquery, newvalues, function (err, result) {
                    if (err) throw err;
                    console.log("1 document updated");
                    res.send(result);
                    db.close();
                });
        });
    }
);

//insert new

router.post(
    "/newroot/:root_id/:benjan/:letter1/:letter2/:letter3/:letter4/:descript/:sound/:inf/:infS/:p1s/:p1sS/:p2sm/:p2smS/:p2sw/:p2swS/:p3sm/:p3smS/" +
    ":p3sw/:p3swS/:p1m/:p1mS/:p2mm/:p2mmS/:p2mw/:p2mwS/:p3m/:p3mS/:nsm/:nsmS/:nsw/:nswS/:nmm/:nmmS/:nmw/:nmwS/:f1s" +
    "/:f1sS/:f2sm/:f2smS/:f2sw/:f2swS/:f3sm/:f3smS/:f3sw/:f3swS/:f1m/:f1mS/:f2mm/:f2mmS/:f2mw/:f2mwS/:f3m/:f3mS/:ism/:ismS/:isw" +
    "/:iswS/:imm/:immS/:imw/:imwS/:ns/:nsS/:nm/:nmS/:asm/:asmS/:asw/:aswS/:amm/:ammS/:amw/:amwS",
    (req, res) => {
        const root_id = req.params.root_id;
        const benjan = req.params.benjan;
        const letter1 = req.params.letter1;
        const letter2 = req.params.letter2;
        const letter3 = req.params.letter3;
        const letter4 = req.params.letter4;
        const descript = req.params.descript;
        const sound = req.params.sound;
        const inf = req.params.inf;
        const infS = req.params.infS;
        const p1s = req.params.p1s;
        const p1sS = req.params.p1sS;
        const p2sm = req.params.p2sm;
        const p2smS = req.params.p2smS;
        const p2sw = req.params.p2sw;
        const p2swS = req.params.p2swS;
        const p3sm = req.params.p3sm;
        const p3smS = req.params.p3smS;
        const p3sw = req.params.p3sw;
        const p3swS = req.params.p3swS;
        const p1m = req.params.p1m;
        const p1mS = req.params.p1mS;
        const p2mm = req.params.p2mm;
        const p2mmS = req.params.p2mmS;
        const p2mw = req.params.p2mw;
        const p2mwS = req.params.p2mwS;
        const p3m = req.params.p3m;
        const p3mS = req.params.p3mS;
        const nsm = req.params.nsm;
        const nsmS = req.params.nsmS;
        const nsw = req.params.nsw;
        const nswS = req.params.nswS;
        const nmm = req.params.nmm;
        const nmmS = req.params.nmmS;
        const nmw = req.params.nmw;
        const nmwS = req.params.nmwS;
        const f1s = req.params.f1s;
        const f1sS = req.params.f1sS;
        const f2sm = req.params.f2sm;
        const f2smS = req.params.f2smS;
        const f2sw = req.params.f2sw;
        const f2swS = req.params.f2swS;
        const f3sm = req.params.f3sm;
        const f3smS = req.params.f3smS;
        const f3sw = req.params.f3sw;
        const f3swS = req.params.f3swS;
        const f1m = req.params.f1m;
        const f1mS = req.params.f1mS;
        const f2mm = req.params.f2mm;
        const f2mmS = req.params.f2mmS;
        const f2mw = req.params.f2mw;
        const f2mwS = req.params.f2mwS;
        const f3m = req.params.f3m;
        const f3mS = req.params.f3mS;
        const ism = req.params.ism;
        const ismS = req.params.ismS;
        const isw = req.params.isw;
        const iswS = req.params.iswS;
        const imm = req.params.imm;
        const immS = req.params.immS;
        const imw = req.params.imw;
        const imwS = req.params.imwS;
        const ns = req.params.ns;
        const nsS = req.params.nsS;
        const nm = req.params.nm;
        const nmS = req.params.nmS;
        const asm = req.params.asm;
        const asmS = req.params.asmS;
        const asw = req.params.asw;
        const aswS = req.params.aswS;
        const amm = req.params.amm;
        const ammS = req.params.ammS;
        const amw = req.params.amw;
        const amwS = req.params.amwS;

        MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            var newroot = {
                root_id: root_id,
                benjan: benjan,
                letter1: letter1,
                letter2: letter2,
                letter3: letter3,
                letter4: letter4,
                descript: descript,
                sound: sound,
                inf: inf,
                infS: infS,
                p1s: p1s,
                p1sS: p1sS,
                p2sm: p2sm,
                p2smS: p2smS,
                p2sw: p2sw,
                p2swS: p2swS,
                p3sm: p3sm,
                p3smS: p3smS,
                p3sw: p3sw,
                p3swS: p3swS,
                p1m: p1m,
                p1mS: p1mS,
                p2mm: p2mm,
                p2mmS: p2mmS,
                p2mw: p2mw,
                p2mwS: p2mwS,
                p3m: p3m,
                p3mS: p3mS,
                nsm: nsm,
                nsmS: nsmS,
                nsw: nsw,
                nswS: nswS,
                nmm: nmm,
                nmmS: nmmS,
                nmw: nmw,
                nmwS: nmwS,
                f1s: f1s,
                f1sS: f1sS,
                f2sm: f2sm,
                f2smS: f2smS,
                f2sw: f2sw,
                f2swS: f2swS,
                f3sm: f3sm,
                f3smS: f3smS,
                f3sw: f3sw,
                f3swS: f3swS,
                f1m: f1m,
                f1mS: f1mS,
                f2mm: f2mm,
                f2mmS: f2mmS,
                f2mw: f2mw,
                f2mwS: f2mwS,
                f3m: f3m,
                f3mS: f3mS,
                ism: ism,
                ismS: ismS,
                isw: isw,
                iswS: iswS,
                imm: imm,
                immS: immS,
                imw: imw,
                imwS: imwS,
                ns: ns,
                nsS: nsS,
                nm: nm,
                nmS: nmS,
                asm: asm,
                asmS: asmS,
                asw: asw,
                aswS: aswS,
                amm: amm,
                ammS: ammS,
                amw: amw,
                amwS: amwS,
                root_id_old: root_id,
                translations: [],
                phrases: [],
                families: [],
                familiesverbs: [],
                synonyms: [],
                antonyms: [],
                passive_id: "_",
                active_id: "_",
                soundFileExist: "0"
            };
            dbo.collection("roots").insertOne(newroot, function (err, result) {
                if (err) throw err;
                console.log("1 document insered");
                res.send(result);
                db.close();
            });
        });
    }
);

router.post(
    "/newtranslation/:root_id/:translationId/:preposition/:translateRu/:translateEn/:translateFr" +
    "/:sentence1/:sentence2/:sentence3/:sentence1TranslateRu/:sentence2TranslateRu/:sentence3TranslateRu" +
    "/:sentence1TranslateEn/:sentence2TranslateEn/:sentence3TranslateEn/:sentence1TranslateFr/:sentence2TranslateFr"
    + "/:sentence3TranslateFr/:sentence1Sound/:sentence2Sound/:sentence3Sound",
    (req, res) => {
        const root_id = req.params.root_id;
        const translationId = Number(req.params.translationId);
        const preposition = req.params.preposition;
        const translateRu = req.params.translateRu;
        const translateEn = req.params.translateEn;
        const translateFr = req.params.translateFr;
        const sentence1 = req.params.sentence1;
        const sentence2 = req.params.sentence2;
        const sentence3 = req.params.sentence3;
        const sentence1TranslateRu = req.params.sentence1TranslateRu;
        const sentence2TranslateRu = req.params.sentence2TranslateRu;
        const sentence3TranslateRu = req.params.sentence3TranslateRu;
        const sentence1TranslateEn = req.params.sentence1TranslateEn;
        const sentence2TranslateEn = req.params.sentence2TranslateEn;
        const sentence3TranslateEn = req.params.sentence3TranslateEn;
        const sentence1TranslateFr = req.params.sentence1TranslateFr;
        const sentence2TranslateFr = req.params.sentence2TranslateFr;
        const sentence3TranslateFr = req.params.sentence3TranslateFr;
        const sentence1Sound = req.params.sentence1Sound;
        const sentence2Sound = req.params.sentence2Sound;
        const sentence3Sound = req.params.sentence3Sound;

        MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            var newtranslation = {
                translationId: translationId,
                preposition: preposition,
                translateRu: translateRu,
                translateEn: translateEn,
                translateFr: translateFr,
                sentence1: sentence1,
                sentence2: sentence2,
                sentence3: sentence3,
                sentence1TranslateRu: sentence1TranslateRu,
                sentence2TranslateRu: sentence2TranslateRu,
                sentence3TranslateRu: sentence3TranslateRu,
                sentence1TranslateEn: sentence1TranslateEn,
                sentence2TranslateEn: sentence2TranslateEn,
                sentence3TranslateEn: sentence3TranslateEn,
                sentence1TranslateFr: sentence1TranslateFr,
                sentence2TranslateFr: sentence2TranslateFr,
                sentence3TranslateFr: sentence3TranslateFr,
                sentence1Sound: sentence1Sound,
                sentence2Sound: sentence2Sound,
                sentence3Sound: sentence3Sound
            };
            dbo
                .collection("roots")
                .updateOne({ root_id: root_id }, { $addToSet: { translations: newtranslation } }, function (err, result) {
                    if (err) throw err;
                    console.log("1 translation insered");
                    res.send(result);
                    db.close();
                });
        });
    }
);

router.post("/newfamily/:root_id/:familyId/:family/:familyPosition/:familyTranslateRu/:familyTranslateEn/:familyTranslateFr",
    (req, res) => {
        const root_id = req.params.root_id;
        const familyId = Number(req.params.familyId);
        const family = req.params.family;
        const familyPosition = req.params.familyPosition;
        const familyTranslateRu = req.params.familyTranslateRu;
        const familyTranslateEn = req.params.familyTranslateEn;
        const familyTranslateFr = req.params.familyTranslateFr;
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            var newfamily = {
                familyId: familyId,
                family: family,
                familyPosition: familyPosition,
                familyTranslateRu: familyTranslateRu,
                familyTranslateEn: familyTranslateEn,
                familyTranslateFr: familyTranslateFr
            };
            dbo
                .collection("roots")
                .updateOne({ root_id: root_id }, { $addToSet: { families: newfamily } }, function (err, result) {
                    if (err) throw err;
                    console.log("1 family insered");
                    res.send(result);
                    db.close();
                });
        });
    }
);

router.post(
    "/newfamilyverb/:root_id/:familyverbId/:familyverb/:familyverbPosition/:familyverbTranslateRu/:familyverbTranslateEn/:familyverbTranslateFr",
    (req, res) => {
        const root_id = req.params.root_id;
        const familyverbId = Number(req.params.familyverbId);
        const familyverb = req.params.familyverb;
        const familyverbPosition = req.params.familyverbPosition;
        const familyverbTranslateRu = req.params.familyverbTranslateRu;
        const familyverbTranslateEn = req.params.familyverbTranslateEn;
        const familyverbTranslateFr = req.params.familyverbTranslateFr;

        MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            var newfamilyverb = {
                familyverbId: familyverbId,
                familyverb: familyverb,
                familyverbPosition: familyverbPosition,
                familyverbTranslateRu: familyverbTranslateRu,
                familyverbTranslateEn: familyverbTranslateEn,
                familyverbTranslateFr: familyverbTranslateFr
            };
            dbo
                .collection("roots")
                .updateOne({ root_id: root_id }, { $addToSet: { familiesverbs: newfamilyverb } }, function (err, result) {
                    if (err) throw err;
                    console.log("1 familyverb insered");
                    res.send(result);
                    db.close();
                });
        });
    }
);

router.post(
    "/newsynonym/:root_id/:synonymId/:synonym/:synonymTranslateRu/:synonymTranslateEn/:synonymTranslateFr",
    (req, res) => {
        const root_id = req.params.root_id;
        const synonymId = Number(req.params.synonymId);
        const synonym = req.params.synonym;
        const synonymTranslateRu = req.params.synonymTranslateRu;
        const synonymTranslateEn = req.params.synonymTranslateEn;
        const synonymTranslateFr = req.params.synonymTranslateFr;

        MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            var newsynonym = {
                synonymId: synonymId,
                synonym: synonym,
                synonymTranslateRu: synonymTranslateRu,
                synonymTranslateEn: synonymTranslateEn,
                synonymTranslateFr: synonymTranslateFr
            };
            dbo
                .collection("roots")
                .updateOne({ root_id: root_id }, { $addToSet: { synonyms: newsynonym } }, function (err, result) {
                    if (err) throw err;
                    console.log("1 synonym insered");
                    res.send(result);
                    db.close();
                });
        });
    }
);
router.post(
    "/newantonym/:root_id/:antonymId/:antonym/:antonymTranslateRu/:antonymTranslateEn/:antonymTranslateFr",
    (req, res) => {
        const root_id = req.params.root_id;
        const antonymId = Number(req.params.antonymId);
        const antonym = req.params.antonym;
        const antonymTranslateRu = req.params.antonymTranslateRu;
        const antonymTranslateEn = req.params.antonymTranslateEn;
        const antonymTranslateFr = req.params.antonymTranslateFr;

        MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            var newantonym = {
                antonymId: antonymId,
                antonym: antonym,
                antonymTranslateRu: antonymTranslateRu,
                antonymTranslateEn: antonymTranslateEn,
                antonymTranslateFr: antonymTranslateFr
            };
            dbo
                .collection("roots")
                .updateOne({ root_id: root_id }, { $addToSet: { antonyms: newantonym } }, function (err, result) {
                    if (err) throw err;
                    console.log("1 antonym insered");
                    res.send(result);
                    db.close();
                });
        });
    }
);

router.post(
    "/newphrase/:root_id/:phraseId/:phrase/:phraseTranslateRu/:phraseTranslateEn/:phraseTranslateFr",
    (req, res) => {
        const root_id = req.params.root_id;
        const phraseId = Number(req.params.phraseId);
        const phrase = req.params.phrase;
        const phraseTranslateRu = req.params.phraseTranslateRu;
        const phraseTranslateEn = req.params.phraseTranslateEn;
        const phraseTranslateFr = req.params.phraseTranslateFr;

        MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            var newphrase = {
                phraseId: phraseId,
                phrase: phrase,
                phraseTranslateRu: phraseTranslateRu,
                phraseTranslateEn: phraseTranslateEn,
                phraseTranslateFr: phraseTranslateFr
            };
            dbo
                .collection("roots")
                .updateOne({ root_id: root_id }, { $addToSet: { phrases: newphrase } }, function (err, result) {
                    if (err) throw err;
                    console.log("1 phrase insered");
                    res.send(result);
                    db.close();
                });
        });
    }
);


router.put("/newactive/:root_id/:active_id", (req, res) => {
    const root_id = req.params.root_id;
    const active_id = req.params.active_id;
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        var newactive = {
            $set: {
                active_id: active_id
            }
        };
        dbo
            .collection("roots")
            .updateOne({ root_id: root_id }, newactive, function (err, result) {
                if (err) throw err;
                console.log("1 active insered");
                res.send(result);
                db.close();
            });
    });
});

router.put("/newpassive/:root_id/:passive_id", (req, res) => {
    const root_id = req.params.root_id;
    const passive_id = req.params.passive_id;
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        var newpassive = {
            $set: {
                passive_id: passive_id
            }
        };
        dbo
            .collection("roots")
            .updateOne({ root_id: root_id }, newpassive, function (err, result) {
                if (err) throw err;
                console.log("1 passive insered");
                res.send(result);
                db.close();
            });
    });
});

//delete
router.delete("/deleteroot/:root_id", (req, res) => {
    MongoClient.connect(
        url,
        {
            useNewUrlParser: true
        },
        function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            var root_id = req.params.root_id;
            dbo
                .collection("roots")
                .deleteOne({ root_id: root_id }, function (err, result) {
                    if (err) throw err;
                    console.log(result);
                    res.send(result);
                    db.close();
                });
        }
    );
});

router.put("/deletetranslation/:root_id/:translationId", (req, res) => {
    const translationId = Number(req.params.translationId);
    const root_id = req.params.root_id;
    console.log(root_id);
    console.log(translationId);
    MongoClient.connect(
        url,
        {
            useNewUrlParser: true
        },
        function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            var ObjectID = require("mongodb").ObjectID;

            dbo
                .collection("roots")
                .updateOne({ root_id: root_id }, { $pull: { translations: { translationId: translationId } } }, function (err, result) {
                    if (err) throw err;
                    res.send(result);
                    db.close();
                });
        }
    );
});
router.put("/deletefamily/:root_id/:familyId", (req, res) => {
    const root_id = req.params.root_id;
    const familyId = Number(req.params.familyId);
    MongoClient.connect(
        url,
        {
            useNewUrlParser: true
        },
        function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            dbo
                .collection("roots")
                .updateOne({ root_id: root_id }, { $pull: { families: { familyId: familyId } } }, function (err, result) {
                    if (err) throw err;
                    console.log(result);
                    res.send(result);
                    db.close();
                });
        }
    );
});

router.put("/deletefamilyverb/:root_id/:familyverbId", (req, res) => {
    const root_id = req.params.root_id;
    const familyverbId = Number(req.params.familyverbId);
    MongoClient.connect(
        url,
        {
            useNewUrlParser: true
        },
        function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            dbo
                .collection("roots")
                .updateOne({ root_id: root_id }, { $pull: { familiesverbs: { familyverbId: familyverbId } } }, function (err, result) {
                    if (err) throw err;
                    console.log(result);
                    res.send(result);
                    db.close();
                });
        }
    );
});

router.put("/deletesynonym/:root_id/:synonymId", (req, res) => {
    const root_id = req.params.root_id;
    const synonymId = Number(req.params.synonymId);
    MongoClient.connect(
        url,
        {
            useNewUrlParser: true
        },
        function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            dbo
                .collection("roots")
                .updateOne({ root_id: root_id }, { $pull: { synonyms: { synonymId: synonymId } } }, function (err, result) {
                    if (err) throw err;
                    console.log(result);
                    res.send(result);
                    db.close();
                });
        }
    );
});
router.put("/deleteantonym/:root_id/:antonymId", (req, res) => {
    const root_id = req.params.root_id;
    const antonymId = Number(req.params.antonymId);
    MongoClient.connect(
        url,
        {
            useNewUrlParser: true
        },
        function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            dbo
                .collection("roots")
                .updateOne({ root_id: root_id }, { $pull: { antonyms: { antonymId: antonymId } } }, function (err, result) {
                    if (err) throw err;
                    console.log(result);
                    res.send(result);
                    db.close();
                });
        }
    );
});
router.put("/deletephrase/:root_id/:phraseId", (req, res) => {
    const root_id = req.params.root_id;
    const phraseId = Number(req.params.phraseId);
    MongoClient.connect(
        url,
        {
            useNewUrlParser: true
        },
        function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");
            dbo
                .collection("roots")
                .updateOne({ root_id: root_id }, { $pull: { phrases: { phraseId: phraseId } } }, function (err, result) {
                    if (err) throw err;
                    console.log(result);
                    res.send(result);
                    db.close();
                });
        }
    );
});
router.put("/deleteactive/:root_id", (req, res) => {
    const root_id = req.params.root_id;
    MongoClient.connect(
        url,
        {
            useNewUrlParser: true
        },
        function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");

            var newactive = {
                $set: {
                    active_id: "_"
                }
            };
            dbo
                .collection("roots")
                .updateOne({ root_id: root_id }, newactive, function (err, result) {
                    if (err) throw err;
                    console.log("1 active deleted");
                    res.send(result);
                    db.close();
                });
        }
    );
});

router.put("/deletepassive/:root_id", (req, res) => {
    const root_id = req.params.root_id;
    MongoClient.connect(
        url,
        {
            useNewUrlParser: true
        },
        function (err, db) {
            if (err) throw err;
            var dbo = db.db("mordict");

            var newpassive = {
                $set: {
                    passive_id: "_"
                }
            };
            dbo
                .collection("roots")
                .updateOne({ root_id: root_id }, newpassive, function (err, result) {
                    if (err) throw err;
                    console.log("1 passive deleted");
                    res.send(result);
                    db.close();
                });
        }
    );
});

router.get("/createdump", (req, res) => {
    var backup = require("mongodb-backup");
    backup({
        uri: url, // mongodb://<dbuser>:<dbpassword>@<dbdomain>.mongolab.com:<dbport>/<dbdatabase>
        root: "E://copyDataBase",
        callback: function (err) {
            if (err) {
                console.error(err);
            } else {
                console.log("dump created");
                res.send(true);
            }
        },
    });

});



module.exports = router;
