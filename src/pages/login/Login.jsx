import React from "react";

function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="login__inner">
          <h2 className="login__title">Login</h2>
          <form className="login__form">
            <label>
              Email
              <input type="email" placeholder="Your email" />
            </label>
            <label>
              Password
              <input type="password" placeholder="Your password" />
            </label>
            <button>Login</button>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
