//student schema

import mongoose from "mongoose";

const Schema = mongoose.Schema;
let studentsData = new Schema({
    name:{
        type: String,
        required: true
    },
    rollno:{
        type: String,
        required: true
    },
    branch:{
        type: String,
        required: true
    },
    college:{
        type: String,
        required: true
    }
})
export default mongoose.model("studentsdataform",studentsData)