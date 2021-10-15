import mongoose from "./mongoose";

const videostudySchema=mongoose.Schema({
    url: String,
    channel: String,
    briefdes: String,
    likes: String,
    messages: String,
    description:String,
    shares:String,
});



export default mongoose.model("videostudyVideos",videostudySchema);
