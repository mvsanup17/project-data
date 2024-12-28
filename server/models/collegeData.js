//college schema

import mongoose from "mongoose";

const Schema = mongoose.Schema;
let collegeData = new Schema({
    name:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    course:{
        type: String,
        required: true
    }
})
export default mongoose.model("collegedataform", collegeData)