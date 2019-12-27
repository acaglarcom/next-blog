
import { getPosts } from "../../../src/blog-posts";

const posts = getPosts()

export default (req, res, query) => {
  var postBul = posts.find(post => post.slug === req.query.postId)
  if (!postBul) {
    var postBul = posts.find(post => post.slug === "notFound")
  }
  res.json({post: postBul})
};