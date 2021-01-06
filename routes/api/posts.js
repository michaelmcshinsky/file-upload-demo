const router = require("express").Router();
const { Post, File } = require("../../models");
const fileService = require("../../utils/file-service");

router.post("/", fileService.upload.single("image"), async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      description: req.body.description,
    });

    req.file.post_id = post.id;
    const file = await File.create(req.file);

    res.status(200).json(post);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
