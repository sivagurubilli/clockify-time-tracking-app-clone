

const mongoose = require("mongoose");

require("dotenv").config();

const database = process.env.DATABASE

const connection = async()=>{
    try{
        const connected = await mongoose.connect(
            database,{
                useNewUrlParser : true,
                useUnifiedTopology :true,
            }
        );

        console.log("mongo connected")
    }catch (error){
 console.log(`errr ,${error.message}`)
    }
}



module.exports ={connection}