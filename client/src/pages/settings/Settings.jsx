import { useContext } from "react";
import { Context } from "../../context/Context";
import { Sidebar } from "../../components";
import { useState } from "react";
import axios from "axios";

function Settings() {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const publicFolder = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profileImg = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="settings">
      <div className="container">
        <div className="settings__inner">
          <div className="settings__content">
            <div className="settings__top">
              <span className="settings__update">Update Your Acount</span>
              <span className="settings__del">Delete Your Acount</span>
            </div>
            <form className="settings__form" onSubmit={handleSubmit}>
              <label>Profile Image</label>
              <div className="settings__profile-img">
                <img
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : publicFolder + user.profileImg
                  }
                  alt=""
                />
                <label htmlFor="settingsUserIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#061e37"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
                  </svg>
                </label>
                <input
                  className="settings__user-icon-input"
                  type="file"
                  id="settingsUserIcon"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <label>
                Username
                <input
                  type="text"
                  placeholder={user.username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  placeholder={user.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label>
                Password
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button className="settings__submit" type="submit">
                Update
              </button>
              {success && (
                <span
                  style={{
                    alignSelf: "center",
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "green",
                    marginTop: "20px",
                  }}
                >
                  Updated!
                </span>
              )}
            </form>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Settings;
