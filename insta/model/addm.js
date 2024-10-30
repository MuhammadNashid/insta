import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    _id:{type:String},
    pic: { type: String },
    caption:{type:String},
    description:{type:String},
});



export default mongoose.model.addm||mongoose.model('addm',postSchema) 