const express = require("express")
const router = express.Router();
const {
    Category,
    validateCategory
} = require("../models/category")

//find categories
router.get('/', async (req, res) => {
    const categories = await Category.find().sort({
        name: 1
    })
    res.send(categories);
});

//create category
router.post("/", async (req, res) => {
    const {
        error
    } = validateCategory(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let category = new Category({
        name: req.body.name,
        //tags: req.body.tags,
        //isPublished: req.body.isPublished
    })
    const result = await category.save()
    res.send(result)

})

//updating courses
router.put("/:id", async (req, res) => {
    const {
        error
    } = validateCategory(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const category = await Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        //tags: req.body.tags,
        //isPublished: req.body.isPublished
    }, {
        new: true
    })
    if (!category) return res.status(404).send('The category with the given ID was not found.')

    res.send(category);
})

//delete customers
router.delete("/:id", async (req, res) => {
    const category = await Category.findByIdAndRemove(req.params.id)
    if (!category) return res.status(404).send('The category with the given ID was not found.')
    res.send(category)
})

//get single category
router.get("/:id", async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).send('The category with the given ID was not found.');
    res.send(category);
})

module.exports = router;