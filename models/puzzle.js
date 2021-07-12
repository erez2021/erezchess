var mongoose = require('mongoose')

const Schema = mongoose.Schema

let Puzzle = new Schema({
    question: {
        type: String
    },
    img: {
        type:String
    }
})