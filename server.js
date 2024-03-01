// create server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const api = require("./routes/api/noteroute.js")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", api);


app.use(express.static('public'));
app.listen(PORT, ( ) => {
    console.log(`API server now on port ${PORT}!`);
  });


app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "./index.html"))
})