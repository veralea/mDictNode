const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017/";
const url = "mongodb://mordict-6518:V5p6ZxwtJnGrKVSPCcogji6nURiR0a@db-mordict-6518.nodechef.com:5421/mordict";

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json() );
app.use(cors());

 app.get('/', (req, res) => {

    res.send("Привет");

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
    //   db.close();
     }); 
     
     dbo.createCollection("translations", function(err, res) {
        if (err) throw err;
        console.log("Collection translations created!");
        // db.close();
     }); 
     dbo.createCollection("phrases", function(err, res) {
        if (err) throw err;
        console.log("Collection phrases created!");
        // db.close();
     });
     dbo.createCollection("families", function(err, res) {
        if (err) throw err;
        console.log("Collection families created!");
        // db.close();
     });
     dbo.createCollection("antonyms", function(err, res) {
        if (err) throw err;
        console.log("Collection antonyms created!");
        // db.close();
     });
     dbo.createCollection("synonyms", function(err, res) {
        if (err) throw err;
        console.log("Collection synonyms created!");
        // db.close();
     });
     dbo.createCollection("sentencies", function(err, res) {
        if (err) throw err;
        console.log("Collection sentensies created!");
        
     });
     
     dbo.createCollection("activepassives", function(err, res) {
      if (err) throw err;
      console.log("Collection activepassives created!");
      db.close();
   });

});

app.get('/gettranslation/:_id',(req,res)=>{
   const _id = req.params._id;
   
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var ObjectID = require('mongodb').ObjectID;
      dbo.collection("translations").find({'_id':ObjectID(_id)}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        console.log(result);
        db.close();
      });
    }); 
})
app.get('/getfamily/:_id',(req,res)=>{
   const _id = req.params._id;
   
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var ObjectID = require('mongodb').ObjectID;
      dbo.collection("families").find({'_id':ObjectID(_id)}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        console.log(result);
        db.close();
      });
    }); 
})
app.get('/getsynonym/:_id',(req,res)=>{
   const _id = req.params._id;
   
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var ObjectID = require('mongodb').ObjectID;
      dbo.collection("synonyms").find({'_id':ObjectID(_id)}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        console.log(result);
        db.close();
      });
    }); 
})
app.get('/getantonym/:_id',(req,res)=>{
   const _id = req.params._id;
   
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var ObjectID = require('mongodb').ObjectID;
      dbo.collection("antonyms").find({'_id':ObjectID(_id)}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        console.log(result);
        db.close();
      });
    }); 
})
app.get('/getphrase/:_id',(req,res)=>{
   const _id = req.params._id;
   
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var ObjectID = require('mongodb').ObjectID;
      dbo.collection("phrases").find({'_id':ObjectID(_id)}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        console.log(result);
        db.close();
      });
    }); 
})

app.get('/getroot/:root_id',(req,res)=>{
   const root_id = req.params.root_id;
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      dbo.collection("roots").find({root_id:root_id}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        console.log(result.root_id);
        db.close();
      });
    }); 

})

app.get('/gettranslations/:root_id',(req,res)=>{
   const root_id = req.params.root_id;
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      dbo.collection("translations").find({root_id:root_id}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
    }); 

})

app.get('/getactivepassives/:active_id',(req,res)=>{
  const active_id = req.params.active_id;
  MongoClient.connect(url, function(err, db) {
     if (err) throw err;
     var dbo = db.db("mordict");
     dbo.collection("activepassives").find({active_id:active_id}).toArray(function(err, result) {
       if (err) throw err;
       console.dir(result);
       res.send(result);
       db.close();
     });
   }); 

})
app.get('/getactivepassives1/:passive_id',(req,res)=>{
  const passive_id = req.params.passive_id;
  MongoClient.connect(url, function(err, db) {
     if (err) throw err;
     var dbo = db.db("mordict");
     dbo.collection("activepassives").find({passive_id:passive_id}).toArray(function(err, result) {
       if (err) throw err;
       console.dir(result);
       res.send(result);
       db.close();
     });
   }); 

})
app.get('/getphrases/:root_id',(req,res)=>{
   const root_id = req.params.root_id;
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      dbo.collection("phrases").find({root_id:root_id}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
    }); 

})

app.get('/getfamilies/:root_id',(req,res)=>{
   const root_id = req.params.root_id;
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      dbo.collection("families").find({root_id:root_id}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
    }); 

})

app.get('/getsynonyms/:root_id',(req,res)=>{
   const root_id = req.params.root_id;
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      dbo.collection("synonyms").find({root_id:root_id}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
    }); 

})

app.get('/getantonyms/:root_id',(req,res)=>{
   const root_id = req.params.root_id;
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      dbo.collection("antonyms").find({root_id:root_id}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
    }); 

})

app.get('/getsentencies/:root_id',(req,res)=>{
   const root_id = req.params.root_id;
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      dbo.collection("sentencies").find({root_id:root_id}).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
    }); 

})

app.get('/getroots/:benjan/:letter1/:letter2/:letter3/:letter4', (req, res)=>{
   const benjan = req.params.benjan;
   const letter1 = req.params.letter1;
   const letter2 = req.params.letter2;
   const letter3 = req.params.letter3;
   const letter4 = req.params.letter4;
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var query = {benjan: benjan, letter1:letter1, letter2:letter2, letter3:letter3, letter4:letter4};
      dbo.collection("roots").find(query).toArray(function(err, result) {
        if (err) throw err;
        res.send(result)
        console.dir(result);
        db.close();
      });
    }); 
})
app.get('/getverbsbyletters/:benjan/:root_id/:letter1/:letter2/:letter3/:letter4', (req, res)=>{
  const benjan = req.params.benjan;
  const root_id = req.params.root_id;
  const letter1 = req.params.letter1;
  const letter2 = req.params.letter2;
  const letter3 = req.params.letter3;
  const letter4 = req.params.letter4;
  MongoClient.connect(url, function(err, db) {
     if (err) throw err;
     var dbo = db.db("mordict");
     var query = {letter1:letter1, letter2:letter2, letter3:letter3, letter4:letter4, root_id: { $not:{$eq:root_id}},benjan:{$not:{$eq:benjan}}};
     dbo.collection("roots").find(query).toArray(function(err, result) {
       if (err) throw err;
       res.send(result)
       console.dir(result);
       db.close();
     });
   }); 
})
app.put('/updatetranslation/:_id/:preposition/:translateRu/:translateEn/:translateFr/:sentence'+
'/:sentenceTranslateRu/:sentenceTranslateEn/:sentenceTranslateFr',(req, res) =>{
   const _id = req.params._id;
   const preposition = req.params.preposition;
   const translateRu = req.params.translateRu;
   const translateEn = req.params.translateEn;
   const translateFr = req.params.translateFr;
   const sentence = req.params.sentence;
   const sentenceTranslateRu = req.params.sentenceTranslateRu; 
   const sentenceTranslateEn = req.params.sentenceTranslateEn; 
   const sentenceTranslateFr = req.params.sentenceTranslateFr; 
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var ObjectID = require('mongodb').ObjectID;
      var myquery = { '_id': ObjectID(_id) };
      var newvalues = { $set: {
         preposition: preposition,
         translateRu: translateRu,
         translateEn: translateEn,
         translateFr: translateFr,
         sentence: sentence,
         sentenceTranslateRu: sentenceTranslateRu,
         sentenceTranslateEn: sentenceTranslateEn,
         sentenceTranslateFr: sentenceTranslateFr   
     } };
      dbo.collection("translations").updateOne(myquery, newvalues, function(err, result) {
        if (err) throw err;
        console.log("1 translation updated");
        res.send(result);
        db.close();
      });
    });
})
app.put('/updatefamily/:_id/:family/:familyTranslateRu/:familyTranslateEn/:familyTranslateFr',(req, res) =>{
   const _id = req.params._id;
   const family = req.params.family;
   const familyTranslateRu = req.params.familyTranslateRu;
   const familyTranslateEn = req.params.familyTranslateEn;
   const familyTranslateFr = req.params.familyTranslateFr;
   
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var ObjectID = require('mongodb').ObjectID;
      var myquery = { '_id': ObjectID(_id) };
      var newvalues = { $set: {
         family: family,
         familyTranslateRu: familyTranslateRu,
         familyTranslateEn: familyTranslateEn,
         familyTranslateFr: familyTranslateFr
     } };
      dbo.collection("families").updateOne(myquery, newvalues, function(err, result) {
        if (err) throw err;
        console.log("1 family updated");
        res.send(result);
        db.close();
      });
    });
})
app.put('/updatesynonym/:_id/:synonym/:synonymTranslateRu/:synonymTranslateEn/:synonymTranslateFr',(req, res) =>{
   const _id = req.params._id;
   const synonym = req.params.synonym;
   const synonymTranslateRu = req.params.synonymTranslateRu;
   const synonymTranslateEn = req.params.synonymTranslateEn;
   const synonymTranslateFr = req.params.synonymTranslateFr;
   
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var ObjectID = require('mongodb').ObjectID;
      var myquery = { '_id': ObjectID(_id) };
      var newvalues = { $set: {
         synonym: synonym,
         synonymTranslateRu: synonymTranslateRu,
         synonymTranslateEn: synonymTranslateEn,
         synonymTranslateFr: synonymTranslateFr
     } };
      dbo.collection("synonyms").updateOne(myquery, newvalues, function(err, result) {
        if (err) throw err;
        console.log("1 synonym updated");
        res.send(result);
        db.close();
      });
    });
})
app.put('/updateantonym/:_id/:antonym/:antonymTranslateRu/:antonymTranslateEn/:antonymTranslateFr',(req, res) =>{
   const _id = req.params._id;
   const antonym = req.params.antonym;
   const antonymTranslateRu = req.params.antonymTranslateRu;
   const antonymTranslateEn = req.params.antonymTranslateEn;
   const antonymTranslateFr = req.params.antonymTranslateFr;
   
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var ObjectID = require('mongodb').ObjectID;
      var myquery = { '_id': ObjectID(_id) };
      var newvalues = { $set: {
         antonym: antonym,
         antonymTranslateRu: antonymTranslateRu,
         antonymTranslateEn: antonymTranslateEn,
         antonymTranslateFr: antonymTranslateFr
     } };
      dbo.collection("antonyms").updateOne(myquery, newvalues, function(err, result) {
        if (err) throw err;
        console.log("1 antonym updated");
        res.send(result);
        db.close();
      });
    });
})
app.put('/updatephrase/:_id/:phrase/:phraseTranslateRu/:phraseTranslateEn/:phraseTranslateFr',(req, res) =>{
   const _id = req.params._id;
   const phrase = req.params.phrase;
   const phraseTranslateRu = req.params.phraseTranslateRu;
   const phraseTranslateEn = req.params.phraseTranslateEn;
   const phraseTranslateFr = req.params.phraseTranslateFr;
   
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var ObjectID = require('mongodb').ObjectID;
      var myquery = { '_id': ObjectID(_id) };
      var newvalues = { $set: {
         phrase: phrase,
         phraseTranslateRu: phraseTranslateRu,
         phraseTranslateEn: phraseTranslateEn,
         phraseTranslateFr: phraseTranslateFr
     } };
      dbo.collection("phrases").updateOne(myquery, newvalues, function(err, result) {
        if (err) throw err;
        console.log("1 phrase updated");
        res.send(result);
        db.close();
      });
    });
})
app.put('/updateforms/:root_id/:benjan/:letter1/:letter2/:letter3/:letter4/:descript/:sound/:inf/:infS/:p1s/:p1sS/:p2sm/:p2smS/:p2sw/:p2swS/:p3sm/:p3smS/'+
':p3sw/:p3swS/:p1m/:p1mS/:p2mm/:p2mmS/:p2mw/:p2mwS/:p3m/:p3mS/:nsm/:nsmS/:nsw/:nswS/:nmm/:nmmS/:nmw/:nmwS/:f1s'+
'/:f1sS/:f2sm/:f2smS/:f2sw/:f2swS/:f3sm/:f3smS/:f3sw/:f3swS/:f1m/:f1mS/:f2mm/:f2mmS/:f2mw/:f2mwS/:f3m/:f3mS/:ism/:ismS/:isw'+
'/:iswS/:imm/:immS/:imw/:imwS/:ns/:nsS/:nm/:nmS/:asm/:asmS/:asw/:aswS/:amm/:ammS/:amw/:amwS',(req, res) =>{
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
   
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var myquery = { root_id: root_id };
      var newvalues = { $set: {
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
     } };
      dbo.collection("roots").updateOne(myquery, newvalues, function(err, result) {
        if (err) throw err;
        console.log("1 document updated");
        res.send(result);
        db.close();
      });
    });
})

app.post('/newroot/:root_id/:benjan/:letter1/:letter2/:letter3/:letter4/:descript/:sound/:inf/:infS/:p1s/:p1sS/:p2sm/:p2smS/:p2sw/:p2swS/:p3sm/:p3smS/'+
':p3sw/:p3swS/:p1m/:p1mS/:p2mm/:p2mmS/:p2mw/:p2mwS/:p3m/:p3mS/:nsm/:nsmS/:nsw/:nswS/:nmm/:nmmS/:nmw/:nmwS/:f1s'+
'/:f1sS/:f2sm/:f2smS/:f2sw/:f2swS/:f3sm/:f3smS/:f3sw/:f3swS/:f1m/:f1mS/:f2mm/:f2mmS/:f2mw/:f2mwS/:f3m/:f3mS/:ism/:ismS/:isw'+
'/:iswS/:imm/:immS/:imw/:imwS/:ns/:nsS/:nm/:nmS/:asm/:asmS/:asw/:aswS/:amm/:ammS/:amw/:amwS', (req, res)=>{
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



    MongoClient.connect(url,  {useNewUrlParser: true }, function(err, db) {
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
            amwS: amwS
        };
        dbo.collection("roots").insertOne(newroot, function(err, result) {
        if (err) throw err;
        console.log("1 document insered");
        res.send(result);
        db.close();
        });
    });
    

  })

  app.post('/newtranslation/:root_id/:preposition/:translateRu/:translateEn/:translateFr/:sentence/:sentenceTranslateRu'+
  '/:sentenceTranslateEn/:sentenceTranslateFr/:sentenceSound', (req, res)=>{
      const root_id = req.params.root_id;
      const preposition = req.params.preposition;
      const translateRu = req.params.translateRu;
      const translateEn = req.params.translateEn;
      const translateFr = req.params.translateFr;
      const sentence = req.params.sentence;
      const sentenceTranslateRu = req.params.sentenceTranslateRu;
      const sentenceTranslateEn = req.params.sentenceTranslateEn;
      const sentenceTranslateFr = req.params.sentenceTranslateFr;
      const sentenceSound = req.params.sentenceSound;
  
      MongoClient.connect(url,  {useNewUrlParser: true }, function(err, db) {
          if (err) throw err;
          var dbo = db.db("mordict");
          var newtranslation = { 
              root_id: root_id,
              preposition: preposition,
              translateRu: translateRu,
              translateEn: translateEn,
              translateFr: translateFr,
              sentence: sentence,
              sentenceTranslateRu: sentenceTranslateRu,
              sentenceTranslateEn: sentenceTranslateEn,
              sentenceTranslateFr: sentenceTranslateFr,
              sentenceSound: sentenceSound
          };
          dbo.collection("translations").insertOne(newtranslation, function(err, result) {
          if (err) throw err;
          console.log("1 translation insered");
          res.send(result);
          db.close();
          });
      });
   }) 
   app.post('/newphrase/:root_id/:phrase/:phraseTranslateRu/:phraseTranslateEn/:phraseTranslateFr', (req, res)=>{
      const root_id = req.params.root_id;
      const phrase = req.params.phrase;
      const phraseTranslateRu = req.params.phraseTranslateRu;
      const phraseTranslateEn = req.params.phraseTranslateEn;
      const phraseTranslateFr = req.params.phraseTranslateFr;
  
      MongoClient.connect(url,  {useNewUrlParser: true }, function(err, db) {
          if (err) throw err;
          var dbo = db.db("mordict");
          var newphrase = { 
              root_id: root_id,
              phrase: phrase,
              phraseTranslateRu: phraseTranslateRu,
              phraseTranslateEn: phraseTranslateEn,
              phraseTranslateFr: phraseTranslateFr,
          };
          dbo.collection("phrases").insertOne(newphrase, function(err, result) {
          if (err) throw err;
          console.log("1 phrase insered");
          res.send(result);
          db.close();
          });
      });
   })
   app.post('/newfamily/:root_id/:family/:familyTranslateRu/:familyTranslateEn/:familyTranslateFr', (req, res)=>{
      const root_id = req.params.root_id;
      const family = req.params.family;
      const familyTranslateRu = req.params.familyTranslateRu;
      const familyTranslateEn = req.params.familyTranslateEn;
      const familyTranslateFr = req.params.familyTranslateFr;
  
      MongoClient.connect(url,  {useNewUrlParser: true }, function(err, db) {
          if (err) throw err;
          var dbo = db.db("mordict");
          var newfamily = { 
              root_id: root_id,
              family: family,
              familyTranslateRu: familyTranslateRu,
              familyTranslateEn: familyTranslateEn,
              familyTranslateFr: familyTranslateFr
          };
          dbo.collection("families").insertOne(newfamily, function(err, result) {
          if (err) throw err;
          console.log("1 family insered");
          res.send(result);
          db.close();
          });
      });
   })
   app.post('/newsynonym/:root_id/:synonym/:synonymTranslateRu/:synonymTranslateEn/:synonymTranslateFr', (req, res)=>{
      const root_id = req.params.root_id;
      const synonym = req.params.synonym;
      const synonymTranslateRu = req.params.synonymTranslateRu;
      const synonymTranslateEn = req.params.synonymTranslateEn;
      const synonymTranslateFr = req.params.synonymTranslateFr;
  
      MongoClient.connect(url,  {useNewUrlParser: true }, function(err, db) {
          if (err) throw err;
          var dbo = db.db("mordict");
          var newsynonym = { 
              root_id: root_id,
              synonym: synonym,
              synonymTranslateRu: synonymTranslateRu,
              synonymTranslateEn: synonymTranslateEn,
              synonymTranslateFr: synonymTranslateFr
          };
          dbo.collection("synonyms").insertOne(newsynonym, function(err, result) {
          if (err) throw err;
          console.log("1 synonym insered");
          res.send(result);
          db.close();
          });
      });
   }) 
   app.post('/newantonym/:root_id/:antonym/:antonymTranslateRu/:antonymTranslateEn/:antonymTranslateFr', (req, res)=>{
      const root_id = req.params.root_id;
      const antonym = req.params.antonym;
      const antonymTranslateRu = req.params.antonymTranslateRu;
      const antonymTranslateEn = req.params.antonymTranslateEn;
      const antonymTranslateFr = req.params.antonymTranslateFr;
  
      MongoClient.connect(url,  {useNewUrlParser: true }, function(err, db) {
          if (err) throw err;
          var dbo = db.db("mordict");
          var newantonym = { 
              root_id: root_id,
              antonym: antonym,
              antonymTranslateRu: antonymTranslateRu,
              antonymTranslateEn: antonymTranslateEn,
              antonymTranslateFr: antonymTranslateFr
          };
          dbo.collection("antonyms").insertOne(newantonym, function(err, result) {
          if (err) throw err;
          console.log("1 antonym insered");
          res.send(result);
          db.close();
          });
      });
   }) 
   app.post('/newsentence/:root_id/:sentence/:sentenceTranslate/:sentenceSound', (req, res)=>{
      const root_id = req.params.root_id;
      const sentence = req.params.sentence;
      const sentenceTranslate = req.params.sentenceTranslate;
      const sentenceSound = req.params.sentenceSound;
      MongoClient.connect(url,  {useNewUrlParser: true }, function(err, db) {
          if (err) throw err;
          var dbo = db.db("mordict");
          var newsentence = { 
              root_id: root_id,
              sentence: sentence,
              sentenceTranslate: sentenceTranslate,
              sentenceSound: sentenceSound
          };
          dbo.collection("sentencies").insertOne(newsentence, function(err, result) {
          if (err) throw err;
          console.log("1 sentence insered");
          res.send(result);
          db.close();
          });
      });
   })

   app.post('/newactivpassiv/:active_id/:passive_id', (req, res)=>{
    const active_id = req.params.active_id;
    const passive_id = req.params.passive_id;
    MongoClient.connect(url,  {useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        var newactivepassive = { 
            active_id: active_id,
            passive_id: passive_id
        };
        dbo.collection("activepassives").insertOne(newactivepassive, function(err, result) {
        if (err) throw err;
        console.log("1 activepassive insered");
        res.send(result);
        db.close();
        });
    });
 })

   //delete
app.delete('/deleteroot/:root_id', (req, res) => {
   MongoClient.connect(url, {
     useNewUrlParser: true
   }, function (err, db) {
     if (err) throw err;
     var dbo = db.db("mordict");
     var root_id = req.params.root_id;
     dbo.collection("roots").deleteOne({'root_id': root_id}, function (err, result) {
       if (err) throw err;
       console.log(result);
       res.send(result);
       db.close();
     });
   });
 }) 
 
 app.delete('/deletetranslation/:_id',(req,res)=>{
   const _id = req.params._id;
   MongoClient.connect(url, {
      useNewUrlParser: true
    }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var ObjectID = require('mongodb').ObjectID;
      
      dbo.collection("translations").deleteOne({'_id': ObjectID(_id)}, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
        db.close();
      });
    });
 })
 app.delete('/deletefamily/:_id',(req,res)=>{
   const _id = req.params._id;
   MongoClient.connect(url, {
      useNewUrlParser: true
    }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var ObjectID = require('mongodb').ObjectID;
      
      dbo.collection("families").deleteOne({'_id': ObjectID(_id)}, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
        db.close();
      });
    });
 })
 app.delete('/deletesynonym/:_id',(req,res)=>{
   const _id = req.params._id;
   MongoClient.connect(url, {
      useNewUrlParser: true
    }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var ObjectID = require('mongodb').ObjectID;
      
      dbo.collection("synonyms").deleteOne({'_id': ObjectID(_id)}, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
        db.close();
      });
    });
 })
 app.delete('/deleteantonym/:_id',(req,res)=>{
   const _id = req.params._id;
   MongoClient.connect(url, {
      useNewUrlParser: true
    }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var ObjectID = require('mongodb').ObjectID;
      
      dbo.collection("antonyms").deleteOne({'_id': ObjectID(_id)}, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
        db.close();
      });
    });
 })
 app.delete('/deletephrase/:_id',(req,res)=>{
   const _id = req.params._id;
   MongoClient.connect(url, {
      useNewUrlParser: true
    }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var ObjectID = require('mongodb').ObjectID;
      
      dbo.collection("phrases").deleteOne({'_id': ObjectID(_id)}, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
        db.close();
      });
    });
 })
 app.delete('/deleteactivepassive/:_id',(req,res)=>{
  const _id = req.params._id;
  MongoClient.connect(url, {
     useNewUrlParser: true
   }, function (err, db) {
     if (err) throw err;
     var dbo = db.db("mordict");
     var ObjectID = require('mongodb').ObjectID;
     
     dbo.collection("activepassives").deleteOne({'_id': ObjectID(_id)}, function (err, result) {
       if (err) throw err;
       console.log(result);
       res.send(result);
       db.close();
     });
   });
})


app.get ('/createdump',(req,res)=>{
  var backup = require('mongodb-backup');
  backup({
    uri: url, // mongodb://<dbuser>:<dbpassword>@<dbdomain>.mongolab.com:<dbport>/<dbdatabase>
    root: "D:/copyDataBase"
  });
  console.log("dump created");
  res.send(true);
})
let port = process.env.PORT || 8000;
app.listen(port, function () {
    console.log('Server listen on port', port)
})