import { PostItem } from "../index";

function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <PostItem post={p} key={p._id} />
      ))}
    </div>
  );
}

export default Posts;
