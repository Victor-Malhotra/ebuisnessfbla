const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  icon:{
    type:String,
    required:true
  },
  username:{
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  myBusiness: {
    type: String,
    default: ""
  },
  joinDate:{
    type:String,
    required:true
  },
  Location: {
    type:Array,
    required:true
  },
  favorites: {
    type:Array,
    default:[]
  },
  card:{
    type:String,
    default:''
  },
  contact:{
    type:String,
    default:''
  },
  admin: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', UserSchema);
