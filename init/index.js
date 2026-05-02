import mongoose from "mongoose";
import data from './data.js'
import Listing from "../models/listing.js";


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("connected successfully");
}) .catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
};


const initDB = async() => {
    Listing.deleteMany
}