
import { Link } from "react-router-dom";

function PostDetails({post}) {
  const categories = post.categories;

  return (
    <div className="post-details">
      <Link to={`/?user=${post.username}`}>
        <span className="post-details__author">{post.username}</span>
      </Link>
      {categories && (
        <div className="post-details__categories">
          {categories.map((cat)=> (
            <span className="post-details__category" key={cat}>
              <Link to={`/?cat=${cat}`}>
                {cat}
              </Link>
            </span>
          ))}
      </div>
      )}
      

      <time className="post-details__date" dateTime={post.updatedAt}>
        {new Date(post.updatedAt).toDateString()}
      </time>
    </div>
  );
}

export default PostDetails;
