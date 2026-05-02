import express from 'express';
import mongoose from 'mongoose';

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("connected successfully");
}) .catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("root dir working");
})

app.listen(port, "127.0.0.1", () => {
    console.log(`listening on port ${port}`);
})