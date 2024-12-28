import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userDataSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const userData = mongoose.model("mydatausersdata", userDataSchema);

export default userData;
