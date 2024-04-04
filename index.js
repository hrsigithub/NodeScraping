const PORT = 3001;

const exspress = require("express");
const { getSP500, getRakuten } = require("./getFuncs");

const app = exspress();
//app.listen(PORT, console.log("動いてる？"))

// getSP500();
getRakuten();
