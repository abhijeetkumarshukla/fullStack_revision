const express= require('express');
const UserModel = require('../models/UserModel');

const UserRouter = express.Router();

UserRouter.post('/register', async(req,res)=>{
  const {username,email,password} = req.body;

  try {
       const user = new UserModel({
       username,
       email,
       password

       })
       await user.save();
       res.status(200).json(`you are registered as ${user}`)
  } catch (error) {
       res.status(400).json(`register failed ${error}`)
  }

})


UserRouter.post("/login", async(req,res)=>{
    const {email,password}= req.body;
    try {
        const user = await UserModel.findOne({email})

        if(!user){
          return  res.send('user not found')
        }
        if(user){
            if(password==user.password){
                return res.status(200).json(`login done ${user}.`);
            }else{
             return   res.send('Wrong password')
            }
        }
    } catch (error) {
        res.send(error)
    }
})

module.exports = UserRouter;