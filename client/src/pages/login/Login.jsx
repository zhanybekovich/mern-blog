import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

function Login() {
  const userRef = useRef();
  const passRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="login__inner">
          <h2 className="login__title">Login</h2>
          <form className="login__form" onSubmit={handleSubmit}>
            <label>
              Username
              <input type="text" placeholder="Your username" ref={userRef} />
            </label>
            <label>
              Password
              <input
                type="password"
                placeholder="Your password"
                ref={passRef}
              />
            </label>
            <button
              className="login__btn login__submit"
              type="submit"
              disabled={isFetching}
            >
              Login
            </button>
          </form>
          <Link to="/register" className="login__btn">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
