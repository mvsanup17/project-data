//tech schema

import mongoose from "mongoose";

const Schema = mongoose.Schema;
let techData = new Schema({
    name:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    feature:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    }
})
export default mongoose.model("techdataform", techData)