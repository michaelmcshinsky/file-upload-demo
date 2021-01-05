const router = require("express").Router();
const posts = require("./posts");
const main = require("./main");

router.use("/posts", posts);
router.use("/", main);

module.exports = router;
