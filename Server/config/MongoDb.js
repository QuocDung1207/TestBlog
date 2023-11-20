import mongoose, { mongo } from "mongoose";

const connectDatabase = ()=>{
     return new Promise (async(resolve,reject)=>{
        try{const connection = await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            dbName: 'blog'
        })
        resolve(connection)
        console.log("connect database");
    }catch(err){
            reject(err)
        }
     })
        
}

export default connectDatabase