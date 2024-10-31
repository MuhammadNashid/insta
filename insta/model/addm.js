import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    id:{type:String},
    pic: { type: Array},
    caption:{type:String},
    description:{type:String} 
});

export default mongoose.model.addm||mongoose.model('addm',postSchema) 