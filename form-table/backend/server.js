const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:1234@jun.wvbznxb.mongodb.net/name?retryWrites=true&w=majority&appName=jun",
);
