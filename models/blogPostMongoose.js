const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let blogpost = new Schema({
    title: {
      type: String
    },
    body: {
      type: String
    },
  });

const model = mongoose.model("blogposts", blogpost);

module.exports = model;