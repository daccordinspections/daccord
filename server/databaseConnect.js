// connect database
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;


//
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, () => {
    console.log(`connected to D'accord's database.`)
});
