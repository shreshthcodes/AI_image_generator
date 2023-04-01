import mongoose from "mongoose";
// const connectDB=(url)=>{
//     mongoose.set('strictQuery',true);
//     mongoose.connect(url)
//     .then(()=>console.log('MongoDB connected'))
//     .catch((err )=>console.log(err));
// }
// export default connectDB


const connectDB=async(url)=>{
    try{
    mongoose.set('strictQuery',true)
    await mongoose.connect(url);
    console.log('MongoDB connected')
}catch(err)
{console.log(err)}
}
export default connectDB
