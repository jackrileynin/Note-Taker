const api = require("express").Router();

const {noteRouter} = require("../noteroute.js")



api.use("/", noteRouter);


module.exports = api

