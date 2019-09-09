const roles = require('./roles');
const jwt = require('jwt-simple');
// const secret = require('../utils/config').myprivatekey;
// const COOKIE_NAME = require('../utils/config').cookieName;
const { COOKIE_NAME, secret } = require('../utils/config');

function validateRequest(req, res, next) {
    
    try {
        
        //get cookie
        const cookie = req.cookies[COOKIE_NAME];
       
       
        if (cookie) {
            const cookieDecoded = jwt.decode(cookie, secret);
            const requestedPage = req.body.requestedPage;
            const role = cookieDecoded.role;
          
           
        
            let permision = false;
            res.pages = roles[role];         

       
            //check if page is in the user's permitied pages
            for (i in roles[role]) {
              
                if (roles[role][i].link === requestedPage) {
                    permision = true;
                    break;
                }
            }
            res.permision = permision;
        } else {
            res.permision = false;
        }
        next();

    } catch (err) {
        console.log(err)
        res.send({ error: "Access denied." });
    }
}

module.exports = validateRequest;