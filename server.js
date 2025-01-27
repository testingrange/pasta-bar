
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require("dotenv").config()
require("./config/database")

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, "build")))

app.use(require("./config/checkToken"))

const PORT = process.env.PORT || 3001

//Routes
app.use("/api/users", require("./routes/api/users.js"))
app.use("/api/orders", require("./routes/api/orders.js"))
app.use("/api/ingredients", require("./routes/api/ingredients.js"))

//Catch-all route, all other routes go above here
app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen(PORT, function() {
    console.log(`Express app running on port ${PORT}`)
})