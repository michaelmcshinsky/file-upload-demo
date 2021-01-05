const router = require("express").Router();
const { Post, File } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const postsData = await Post.findAll({
      include: [File],
      order: [["createdAt", "DESC"]],
    });

    const posts = await postsData.map((x) => x.get({ plain: true }));

    res.render("posts", { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/create", async (req, res) => {
  try {
    res.render("create");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Post.findOne({
      include: [File],
      where: {
        id: req.params.id,
      },
    });

    const post = data.dataValues;

    post.Files = await post.Files.map((x) => x.get({ plain: true }));

    res.render("post", { post });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
