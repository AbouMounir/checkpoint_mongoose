import express from "express";
import Database from "./database/db.js";
import Person from "./models/Person.js";

const app = express();
const PORT = 3000;

let db = new Database();
let person = new Person();
let id = "64624b99d566f226c95ad063"



// Create and Save a Record of a Model:
 

    person.name = "Coulibaly Nahoua";
    person.age = 23 ;
    person.favoriteFoods = ["Garba","riz sauce graine"];
    person.save().then((item) => { console.log(item);});
    



// Create Many Records with model.create()
 

    Person.create(
        {
            name : 'Doumbia Mameri',
            age : 24,
            favoriteFoods : ["foutou", "aricot"]
        },
        {
            name : 'Dagnogo Ibrahim',
            age : 24,
            favoriteFoods : ["tchep", "aricot"]
        }
    ) 



//Use model.find() to Search Your Database

     Person.find().then((item) => console.log(item));


//Use model.findOne() to Return a Single Matching Document from Your Database

     Person.findOne({favoriteFoods : 'Garba'}).then((item) => console.log(item))



//Use model.findById() to Search Your Database By _id

    Person.findById(id).then((item) => console.log(item))



//Perform Classic Updates by Running Find, Edit, then Save
   
   const nn = await Person.findById(id);
   nn.favoriteFoods.push('hamburger');
   await nn.save();


//Perform New Updates on a Document Using model.findOneAndUpdate()
   
   const nnn = await Person.findOneAndUpdate({ name:"Coulibaly Nahoua"}, {age : 20});
   await nnn.save();
   Person.find().then(item => console.log(item)) 


//Delete One Document Using model.findByIdAndRemove

   Person.findOneAndDelete({ name:"Coulibaly Nahoua"});


//MongoDB and Mongoose - Delete Many Documents with model.remove()

        Person.remove({name : 'tuo'}).then(item => console.log(item))


//Chain Search Query Helpers to Narrow Search Results


        Person.find()                  
         .sort({name: 1})                 
         .limit(2)                
         .select({age: false} )
         .exec()                   
         .then(item => {
            console.log(item)
          })
         .catch(err => {
            console.error(err)
          })