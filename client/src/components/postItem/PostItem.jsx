import { PostDetails } from "../index";

function PostItem() {
  return (
    <div className="post">
      <div className="post__inner">
        <img
          className="post__img"
          src="https://images.unsplash.com/photo-1524715324774-b46ab3971a9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
          alt=""
        />
        <div className="post__content">
          <h3 className="post__title">
            Lorem ipsum dolor sit amet consectetur
          </h3>
          <p className="post__excerpt">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
            ipsum totam? Exercitationem aliquam veritatis dolorem quod
            consequatur quisquam dolore labore. Dolores nam, ullam tempore
            itaque commodi sed velit eveniet delectus. Voluptate, eveniet hic ex
            assumenda quae molestiae, consequatur illum cum, facere error dicta
            nemo velit.
          </p>
        </div>
      </div>
      <PostDetails />
    </div>
  );
}

export default PostItem;
