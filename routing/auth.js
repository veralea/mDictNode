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





router.post("/register", (req, res) => {

  // validate the request body first


  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    const dbo = db.db("mordict");

    if (req.body.email) {

      dbo
        .collection("users")
        .findOne({ email: req.body.email }, function (err, result) {
          if (err) throw err;

          if (result !== null) {
            res.send({ error: "email is already registered", errorRu: "электронная почта уже зарегистрирована" });

          } else {
            //create new user
            let userObj = req.body;

            const hashPassword = jwt.encode(userObj.password, secret);
            userObj.password = hashPassword;
            delete userObj.password2;
            userObj.role = 'public'

            dbo.collection("users").insertOne(userObj, (err, result) => {
              if (err) throw err;
              console.log("user registered");
              res.send({
                success: 'user registered',
                isRegisterd: true
              })
            })
          }

          // res.send(result);
          db.close();
        });
    } else {
      res.send({ error: 'email address was not provided', errorRu: "адрес электронной почты не был предоставлен" })
    }
  });


});

router.post("/login", (req, res) => {
 
  try {
    if (Object.prototype.toString.call(req.body) !== "[object Object]")
      throw "request body is not an object";

    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      dbo
        .collection("users")
        .findOne({ email: req.body.email }, (err, result) => {
          if (err) throw err;

          if (result !== null) {
           
            try {
              //may brake if password is not encrypted
              let passwordFromDB = jwt.decode(result.password, secret);
              
              if (req.body.password === passwordFromDB) {
                //create hashed cookie with users permissions
                let userObj = {
                  id: result._id,
                  role: result.role || 'public'
                }

                let expires = 1000 * 60 * 60 * 24 * 30;

                res.cookie(COOKIE_NAME, jwt.encode(userObj, secret), { httpOnly: true, maxAge: expires });
                res.send({
                  success: "user match password",
                  access: redirectTo(result.role)
                })
              } else {
                res.send({ error: "user does not match password", errorRu: "пользователь не соответствует паролю" })
              }

            } catch (err) {
              console.log(err)
              res.send({ error: 'password is inncorrect', errorRu: "неверный пароль" })
            }


          } else {
            console.log("user is not in DataBase");
            res.send({ error: "user is not registered", errorRu: "пользователь не зарегистрирован" });
          }

          // res.send(result);
          db.close();
        })
    });

  } catch (err) {
    console.log(err);

  }
});

router.post("/isLogged", (req, res) => {

  try {
    if (req.cookies[COOKIE_NAME]) {
      let cookie = jwt.decode(req.cookies.mdict, secret);

      if (typeof cookie === 'object') {
        res.send({
          success: 'you are logged in',
          access: redirectTo(cookie.role)
        })
      } else {
        res.send({ error: 'invalid cookie', errorRu: "неверный файл cookie" })
      }

    } else {
      res.send({ error: 'no cookie supplied', errorRu: "файл cookie не поставляется" })
    }

  } catch (err) {
    console.log(err)
  }
})

router.post("/logout", (req, res) => {

  //clean cookie  
  res.cookie(COOKIE_NAME, 'end', { maxAge: 0 });

  //redirect to login
  res.send({
    access: redirectTo('public')
  })
})

router.post("/isAuthorized", validateRequest, (req, res) => {
  try {
    
    if (res.permision) {
      res.send({ success: 'has Permision' })
    } else {
      res.send({
        access: {
          permision: false,
          redirect: {
            link: '/start'
          },
          pages:res.pages
        }
      })
    }
  } catch (err) {
    console.log(err)
  } 

})

function redirectTo(role) {

  try {
    switch (role) {
      case 'student':
        return {
          redirect: roles.student[0],
          pages: roles.student
        };
      case 'teacher':
        return {
          redirect: roles.teacher[0],
          pages: roles.teacher
        };
      case 'admin':
        return {
          redirect: roles.admin[0],
          pages: roles.admin
        };

      case 'public':
        return {
          redirect: roles.public[0],
          pages: roles.public
        };

      default:
        return {
          redirect: roles.public[0],
          pages: roles.public
        };
    }
  } catch (err) {
    console.log(err);
    return {
      redirect: roles.public[0],
      pages: roles.public
    };
  }
}


module.exports = router;
