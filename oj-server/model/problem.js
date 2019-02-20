const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Problem = new Schema({
    id: Number,
    name: String,
    desc: String,
    difficulty: String
});

const ProblemModel = mongoose.model('Problem', Problem);
module.exports = ProblemModel;