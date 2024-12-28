//clothes schema

import mongoose from "mongoose";

const Schema = mongoose.Schema;
let clothesData = new Schema({
    name:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    size:{
        type: String,
        required: true
    }
})
export default mongoose.model("clothdataform", clothesData)