//Options Model
const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    text: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    },
    link_to_vote: {
        type: String,
        required: true
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true
    }
}, { timestamps: true });

const Option = mongoose.model('Option', optionSchema);

module.exports = Option;