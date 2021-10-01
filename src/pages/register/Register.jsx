import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="container">
        <div className="register__inner">
          <h2 className="register__title">Register</h2>
          <form className="register__form">
            <label>
              Email
              <input type="email" placeholder="Your email" />
            </label>
            <label>
              Username
              <input type="text" placeholder="Your username" />
            </label>
            <label>
              Password
              <input type="password" placeholder="Your password" />
            </label>
            <button className="register__btn">Register</button>
          </form>
          <Link to="/login" className="register__btn">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
