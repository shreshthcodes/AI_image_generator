import express from 'express';
import connectDB from './DB/connect.js';
import * as dotenv from 'dotenv';
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'
import cors from 'cors';
 
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json({limit:'50mb'}));
 
// routes
app.use('/api/v1/post',postRoutes)
app.use('/api/v1/dalle',dalleRoutes)

app.get('/',async(req,res)=>{
    res.send('hello world')
})

const startServer=async()=>{
    try{
        connectDB(process.env.MONGODB_URL)
        app.listen(8080,()=>{
            console.log('server connected to port to 8080')
        })
    } 
    catch(err){
        console.log(err);
    }
}
startServer()
 