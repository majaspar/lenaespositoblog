const express = require('express');
const router = express.Router();
const Post = require('../models/Post')
/*
* get
* home */

router.get('', async (req, res) => {
    try {
        const locals = {
            title: "",
            description: "A Blog of an A Frontend Web Developer, created with NodeJs, Express & MongeDB"
        }

        let perPage = 12;
        let page = req.query.page || 1;

        const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
            .skip(perPage * page - perPage)
            .limit(perPage)
            .exec();

        const count = await Post.count();
        const nextPage = parseInt(page) + 1;
        const hasNextPage = nextPage <= Math.ceil(count / perPage);


        res.render('index', {
            locals,
            data,
            current: page,
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
        const data = await Post.findById({ _id: slug })
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
* get
* Post - searchTerm*/

router.post('/search', async (req, res) => {
    try {
        const locals = {
            title: "Search Results",
            description: "A Blog of an Aspiring Full-Stack Web Developer, created with NodeJs, Express & MongeDB"
        }


        let searchTerm = req.body.searchTerm;
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, "")

        const data = await Post.find({
            $or: [
                { title: { $regex: new RegExp(searchNoSpecialChar, 'i') } },
                { body: { $regex: new RegExp(searchNoSpecialChar, 'i') } },
                { tags: { $regex: new RegExp(searchNoSpecialChar, 'i') } },
                { shortDescription: { $regex: new RegExp(searchNoSpecialChar, 'i') } },
                { imageSource: { $regex: new RegExp(searchNoSpecialChar, 'i') } },
                { imageSourceDescription: { $regex: new RegExp(searchNoSpecialChar, 'i') } },

            ]
        });

        res.render("search", { data, locals });
    } catch (error) {
        console.log(error)
    }

})

router.get('/categories', async (req, res) => {


    const locals = {
        title: "Categories",
        description: "Search the Blog by Tags"
    };

    const data = await Post.find();
          


        //  const { tags } = req.body;
        // try {
        //     const locals = {
        //         title: "Lena Esposito Blog: Categories",
        //         description: "Search the Blog by Tags"
        //     }

        //     const data = await Post.findById({ _id: slug });

        // } catch (error) {
        //     console.log(error)
        // }
        res.render('categories', { data, locals });
    })


module.exports = router;



// router.post('/search', async (req, res) => {
//     try {
//         const locals = {
//             title: "Lena Esposito Blog",
//             description: "A Blog of an Aspiring Full-Stack Web Developer, created with NodeJs, Express & MongeDB"
//         }


//         const data = await Post.find();


//         res.render('search', { locals, data });
//     } catch (error) {
//         console.log(error)
//     }

// })