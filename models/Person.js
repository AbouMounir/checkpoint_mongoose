import mongoose from "mongoose";

const PersonSchema = new mongoose.Schema({
    name : {type : String, required : true} ,
    age : Number,
    favoriteFoods : [String]
})

const Person = mongoose.model("person", PersonSchema);

export default Person ;