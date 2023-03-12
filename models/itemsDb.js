const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://SabanaBinsi:Bins607@cluster0.f2jujrd.mongodb.net/RecipeApp?retryWrites=true&w=majority")


const Schema = mongoose.Schema;

var itemSchema = new Schema({
    Cusinename : String,
    noservings : Number,
    Duration : Number
    //  images : File

});

var ItemInfo = mongoose.model("items",itemSchema);

module.exports = ItemInfo;