import mongoose from "mongoose";


const mongodbSerer = "mongodb+srv://AbouMounir:eUMzfOz8H2ZID0oY@cluster0.i4gqiuk.mongodb.net/mongoose_cp?retryWrites=true&w=majority"

class Database {

    constructor(){
        this.__connect();
    }

    __connect(){
        mongoose.connect(mongodbSerer)
        .then(() => {
            console.log("database connection established");
        })
        .catch((error) => console.log("error connecting" + error.message));
    }
}

export default Database;