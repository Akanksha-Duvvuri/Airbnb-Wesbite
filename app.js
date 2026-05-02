import express from 'express';
import mongoose from 'mongoose';
import Listing from './models/listing.js'

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("connected successfully");
}) .catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
};

const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("root dir working");
});

app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
        title: "my new villa",
        description: "by the beach",
        price: 1200,
        location: "Goa",
        country: "india",
    });

    await sampleListing.save();
    console.log("sample was saved");
    res.send("successfully saved");
});

app.listen(port, "127.0.0.1", () => {
    console.log(`listening on port ${port}`);
});