const User = require('../models/UserModel')


exports.signUp = (req, res) => {

    const { email, password, firstName, lastName } = req.body
    const user = new User({ email, password, firstName, lastName })


 user
  .save()
  .then(() => {
     res.status(200).send('user was added')
      })   
   .catch((err) => console.log(err))

}