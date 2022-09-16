const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/barterTrade")
    .then(() => console.log("connected to database"))
    .catch((err) => console.log("could not connect to the mongodb"))

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: Boolean
})

const Category = mongoose.model("Category", categorySchema)
const createCategory = async () => {
    const category = new Category({
        name: "Fashion & Beauty",
        tags: ["beauty", "fashion"],
        isPublished: true
    })

    const result = await category.save()
    console.log(result)
}
createCategory()