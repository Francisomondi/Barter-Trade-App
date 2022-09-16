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

//create caTEGORY
const createCategory = async () => {
    const category = new Category({
        name: "Phones & Tablets",
        tags: ["Android", "IOS", "Windows"],
        isPublished: true
    })

    const result = await category.save()
    console.log(result)
}

//get categories
const getCategories = async () => {

    const categories = await Category.find()
    console.log(categories)
}

//updating courses
const updateCategory = async (id) => {
    const updateCategory = await Category.findById(id)
    if (!updateCategory) return;

    updateCategory.name = "an enemy of the people",
        updateCategory.tags = ["dr stockman", "peter stockman"],
        updateCategory.isPublished = true

    const result = await updateCategory.save()
    console.log(result)
}
updateCategory("6324c8f4f169f5c47757fbfe")