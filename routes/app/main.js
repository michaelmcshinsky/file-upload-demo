const router = require("express").Router();
const { Post, File } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const postsData = await Post.findAll({
      include: [File],
      order: [
        ['createdAt', 'DESC'],
      ]
    });

    const posts = await postsData.map((x) => x.get({ plain: true }));

    res.render("posts", { posts });
    
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
