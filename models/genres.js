const mongoose = require("mongoose");

const genresSchema = new mongoose.Schema({
    name: String,
});

module.exports = mongoose.model("BookGenres", genresSchema);