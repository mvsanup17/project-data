//medical schema

import mongoose from "mongoose";

const Schema = mongoose.Schema;
let medicalData = new Schema({
    name:{
        type: String,
        required: true
    },
    symptom:{
        type: String,
        required: true
    },
    medication:{
        type: String,
        required: true
    }
})
export default mongoose.model("medicaldataform", medicalData)