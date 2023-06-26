import mongoose from "mongoose";

const userCollection = "Users"

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  age:{
    type: Number,
    required: true,
    default:0,
  },
  password:{
    type: String,
    required: true
  },
  isAdmid: {
      type: Boolean,
      default: false
  }
});

mongoose.set("strictQuery", false)
const UserModel = mongoose.model(userCollection, userSchema)

export default UserModel
