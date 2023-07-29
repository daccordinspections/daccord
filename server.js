
require("dotenv").config();
require("ejs");
const express = require("express");

const app = express();

// 
require("./server/app")(app, express);
// require("./server/databaseConnect");

// routes
require("./routes/contact")(app);
require("./routes/index")(app);

// 
require("./server/runServer")(app);