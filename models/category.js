const mongoose = require("mongoose")
const Joi = require('joi');

const Category = mongoose.model("Category", new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    //tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
    //isPublished: Boolean
}))

function validateCategory(category) {
    const schema = {
        name: Joi.string().min(3).required(),
        // tags: Joi.string().required(),
        //isPublished: Joi.Boolean
    };

    return Joi.validate(category, schema);
}


exports.Category = Category
exports.validateCategory = validateCategory