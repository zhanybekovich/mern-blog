import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

function Write() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
      categories,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.postImg = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div className="write">
      <div className="container">
        {file && <img src={URL.createObjectURL(file)} alt="" />}
        <form className="write__form" onSubmit={handleSubmit}>
          <div className="write__form-group">
            <label className="write__file-label" htmlFor="fileInput">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
              </svg>
              Choose Image
            </label>

            <input
              type="file"
              id="fileInput"
              className="write__file-input"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="Title"
              className="write__input"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Category"
              className="write__input"
              onChange={(e) => setCategories(e.target.value)}
            />
          </div>
          <div className="write__form-group">
            <textarea
              className="write__input write__textarea"
              placeholder="Your content"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button className="write__publish-btn" type="submit">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Write;
