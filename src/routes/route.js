const express = require("express");
const router = express.Router();
const allControllers = require("../controllers/controller");


router.get("/test-me", function(req , res){
    res.send("Let's start!!!")
});

router.post("/createAuthor",allControllers.createAuthors);

router.post("/createBlog",allControllers.createBlogs);

router.get("/blogs",allControllers.getBlogs);

router.put("/updateBlogs",allControllers.updateBlogs);

router.delete("/blog",allControllers.validateBlog);

router.delete("/Blogs",allControllers.deleteBlog);






module.exports = router;