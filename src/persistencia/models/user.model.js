import mongoose from "mongoose";

const userCollection = "users"

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
    required: true
  },
  role:{
    type: String,
    default: "user"
  },
  password:{
    type: String,
    required: true
  }
});

mongoose.set("strictQuery", false)
const UserModel = mongoose.model(userCollection, userSchema)

export default UserModel
