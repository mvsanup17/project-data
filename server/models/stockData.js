//tech schema

import mongoose from "mongoose";

const Schema = mongoose.Schema;
let stockData = new Schema({
    name:{
        type: String,
        required: true
    },
    sector:{
        type: String,
        required: true
    },
    market:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    }
})
export default mongoose.model("stockmarketdataform", stockData)