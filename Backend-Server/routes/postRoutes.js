import express from "express";
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';
import Post from '../DB/models/post.js  '
dotenv.config();
//setting up cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
const router = express.Router();
//this route is for accessing the all the post in the database (get)
router.route('/').get(async(req,res)=>{
    try {
        const post = await Post.find({})
        res.status(201).json({success:true,data:post})
    } catch (error) {
        res.status(500).json({success:false,message:error})
    }
})
//this route is for creating a newly generated post (post)
router.route('/').post(async(req,res)=>{
    try {
        const {name,prompt,photo}=req.body;
    const photoUrl=await cloudinary.uploader.upload(photo);
    const newPost = Post.create({
        name:name,
        prompt:prompt,
        photo:photoUrl.url,
    })
    res.status(200).json({success:true,data:newPost})

    } catch (error) {
       res.status(500).json({success:false,message:error})        
    }
})
export default router;