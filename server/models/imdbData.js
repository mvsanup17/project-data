//imdb schema

import mongoose from "mongoose";

const Schema = mongoose.Schema;
let imdbData = new Schema({
    name:{
        type: String,
        required: true
    },
    release:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    rating:{
        type: String,
        required: true
    }
})
export default mongoose.model("imdbdataform", imdbData)