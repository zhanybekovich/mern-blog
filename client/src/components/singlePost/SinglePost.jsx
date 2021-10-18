import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { PostDetails } from "../index";
import { Context } from "../../context/Context";
import { useContext } from "react";

function SinglePost() {
  const { user } = useContext(Context);
  const publicFolder = "http://localhost:5000/images/";
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
    };

    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        description,
      });
      window.location.reload();
    } catch (error) {}
  };
  return (
    <article className="single-post">
      {post.postImg && (
        <img
          className="single-post__img"
          src={publicFolder + post.postImg}
          alt=""
        />
      )}

      <header className="single-post__header">
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="single-post__title-update"
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="single-post__title">{post.title}</h1>
        )}

        {post.username === user?.username && (
          <div className="single-post__edit-block">
            <button
              className="single-post__edit-btn single-post__edit"
              onClick={() => setUpdateMode(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M18 14.45v6.55h-16v-12h6.743l1.978-2h-10.721v16h20v-10.573l-2 2.023zm1.473-10.615l1.707 1.707-9.281 9.378-2.23.472.512-2.169 9.292-9.388zm-.008-2.835l-11.104 11.216-1.361 5.784 5.898-1.248 11.103-11.218-4.536-4.534z" />
              </svg>
            </button>
            <button
              className="single-post__edit-btn single-post__del"
              onClick={handleDelete}
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2zm-7-10.414l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414 3.293 3.293zm10-8.586h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-8-3h-4v1h4v-1z" />
              </svg>
            </button>
          </div>
        )}
      </header>
      <div className="single-post__content">
        {updateMode ? (
          <textarea
            className="single-post__description-update"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        ) : (
          <p>{post.description}</p>
        )}
        {updateMode && (
          <button className="single-post__btn" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
      <PostDetails post={post} />
    </article>
  );
}

export default SinglePost;
