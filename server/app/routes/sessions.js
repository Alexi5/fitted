const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt-nodejs');
const User = require('../../models/user');
const Session = require('../../models/session');
const authenticate = require('../middleware/authenticate')

router.use(authenticate)

//Log in
router.post('/login', (req, res, next) => {
  let user;
  
  return User.findOne({
    where: {
      email: req.body.email,
      //password: req.body.password
    }
  })
  .then(foundUser => {

    let user = foundUser;
    if(!foundUser) {
      var err = new Error('Unauthorized');
      err.status = 401;
      throw err;
    } 
    
    // res.cookie('userId', foundUser.userId)
    //res.redirect(`/users/:{foundUser.userId}`) //CHANGE BACK
    req.session.userId = foundUser.userId
    res.json(foundUser)
  })
  .catch(next)
})

//Log out


module.exports = router;

// router.post('/', (req, res, next) => {
//   let user;
  
//   return User.findOne({
//     where: {
//       email: req.body.email,
//       //password: req.body.password
//     }
//   })
//   .then(foundUser => {

//     let user = foundUser;
//     if(!foundUser) {
//       var err = new Error('Unauthorized');
//       err.status = 401;
//       throw err;
//     } 
//     foundUser.checkPassword(req.body.password)
//     .then( userConfirmed => {

//       // console.log('userConfirmed: ', userConfirmed)
//       userConfirmed.hashPassword()
//       .then(hash => {
        
//         // console.log('session hash: ', hash)
//         return Session.create({
//           sessionId: hash
//         })
//       })
//     })
//     .then(sessionId => {
//       res.cookie('sessionId', sessionId)
//       res.json({})
//     })  
//   })
//   .catch(next)
// })
