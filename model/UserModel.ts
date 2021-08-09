const mongoose = require('mongoose')
const {userSchema} = require('../schema/user')
console.log(userSchema)
export const userModel = mongoose.model('UserModel',userSchema)