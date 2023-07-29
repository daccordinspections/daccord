const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
    .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to D'accord's database.");
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });
