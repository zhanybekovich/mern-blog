import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });

      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <div className="container">
        <div className="register__inner">
          <h2 className="register__title">Register</h2>
          <form className="register__form" onSubmit={handleSubmit}>
            <label>
              Email
              <input
                type="email"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Username
              <input
                type="text"
                placeholder="Your username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                placeholder="Your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button className="register__btn" type="submit">
              Register
            </button>
            {error && <span>Error!</span>}

            <Link to="/login" className="register__btn">
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
