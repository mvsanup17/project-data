//employee schema

import mongoose from "mongoose";

const Schema = mongoose.Schema;
let employeeData = new Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    designation:{
        type: String,
        required: true
    },
    salary:{
        type: String,
        required: true
    }
})
export default mongoose.model("employeedataform", employeeData)