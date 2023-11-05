const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const Category = require('../models/Category');
const Comment = require('../models/Comment');
/*
* get
* home */



router.get('', async (req, res) => {
    try {
        const locals = {
            title: "Welcome!",
            description: "Lena Esposito's Blog built with NodeJs, Express & MongeDB"
        }

        let perPage = 12;
        let page = req.query.page || 1;

        const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
            .skip(perPage * page - perPage)
            .limit(perPage)
            .exec();

        const count = await Post.count();
        const nextPage = parseInt(page) + 1;
        const prevPage = parseInt(page) - 1;
        const hasNextPage = nextPage <= Math.ceil(count / perPage);

        const random1 = Math.floor(Math.random() * data.length)
        const random2 = Math.floor(Math.random() * data.length)
        const random3 = Math.floor(Math.random() * data.length)
        const random4 = Math.floor(Math.random() * data.length)
        const random5 = Math.floor(Math.random() * data.length)
        const random = { random1, random2, random3, random4, random5 }

        res.render('index', {
            locals,
            data,
            random,
            current: page,
            prevPage,
            nextPage: hasNextPage ? nextPage : null,
            currentRoute: '/'
        });
    } catch (error) {
        console.log(error)
    }

})
/*
* get
* Post :id */

router.get('/post/:id', async (req, res) => {

    try {

        let slug = req.params.id;
        const data = await Post.findById({ _id: slug }).populate('comments');
        const locals = {
            title: data.title,
            description: data.shortDescription
        }
        res.render('post', {
            locals, data,
            currentRoute: `/post/${slug}`
        });
    } catch (error) {
        console.log(error)
    }

})

/*
* get
* Comment :id */

router.post('/post/:id/comments', async (req, res) => {

    try {

        const post = await Post.findById(req.params.id)
        const comment = new Comment(req.body.comment)
        post.comments.push(comment);
        await comment.save();
        await post.save();
        res.redirect(`/post/${post._id}#comments`)
    } catch (error) {
        console.log(error)
    }

})




// function insertPostData() {
//     Post.insertMany([
//         {
//             title: "Fun To-Do List: jQuery UI practice [big screens only]",
//             bodyPath: "3411092",
//             image: "./assets/3411092.jpg",
//             tags: ["jQuery", "Small app"],
//             shortDescription: "You can create new tasks, drag and move them across all days of the week. You can also delete them by dragging and dropping them onto the rubbish bin icon.",
//             imageSource:"ddd",
//         },
//     ])
// }

// insertPostData();


/*
* Post - searchTerm*/

router.post('/search', async (req, res) => {
    try {
        const locals = {
            title: "Search Results",
            description: "A Blog of an Aspiring Full-Stack Web Developer, created with NodeJs, Express & MongoDB"
        }


        let searchTerm = req.body.searchTerm;
        // const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "")

        let results = await Post.find({

            $text: { $search: searchTerm, $diacriticSensitive: true }
        }).sort({ createdAt: -1 });

        // $or: [
        //     { title: { $regex: new RegExp(searchNoSpecialChar, 'i') } },
        //     { body: { $regex: new RegExp(searchNoSpecialChar, 'i') } },
        //     { tags: { $regex: new RegExp(searchNoSpecialChar, 'i') } }

        // ]
        res.render("search", { results, locals, currentRoute: '/search', searchTerm });
    } catch (error) {
        console.log(error)
    }

})


/*
* get
* Post - categories*/
router.get('/categories', async (req, res) => {
    try {


        const locals = {
            title: "Lena Esposito Blog: Categories",
            description: "Search Lena Esposito Blog by a category"
        };
        const categories = await Category.find({})

        const data = await Post.find();

        const javascript = await Post.find({ 'category': 'JavaScript' }).sort({ createdAt: -1 })
        const jQuery = await Post.find({ 'category': 'jQuery' }).sort({ createdAt: -1 })
        const react = await Post.find({ 'category': 'React' }).sort({ createdAt: -1 })
        const smallApp = await Post.find({ 'category': 'Small App' }).sort({ createdAt: -1 })
        const bootstrap = await Post.find({ 'category': 'Bootstrap' }).sort({ createdAt: -1 })
        const website = await Post.find({ 'category': 'Website' }).sort({ createdAt: -1 })
        const cheatSheet = await Post.find({ 'category': 'Cheat Sheet' }).sort({ createdAt: -1 })

        const allCategories = { javascript, jQuery, smallApp, bootstrap, website, cheatSheet, react }

        res.render('categories', { data, locals, categories, allCategories, currentRoute: '/categories' });
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" })
    }
})


module.exports = router;