import mongoose from "mongoose";

const Schema = mongoose.Schema;

let imgData = new Schema(
    {
        image:String
    }
)

export default mongoose.model("mydataimages", imgData)