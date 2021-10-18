import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

function Header() {
  const { user, dispatch } = useContext(Context);
  const publicFolder = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__inner">
          <div className="nav__left">
            <Link to="/" className="nav__logo">
              Blogger
            </Link>
          </div>
          <div className="nav__center">
            <ul className="nav__menu">
              <li className="nav__menu-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav__menu-item">
                <Link to="/">About</Link>
              </li>
              <li className="nav__menu-item">
                <Link to="/">Contact</Link>
              </li>
              <li className="nav__menu-item">
                <Link to="/write">Write</Link>
              </li>
              <li className="nav__menu-item" onClick={handleLogout}>
                {user && "Logout"}
              </li>
            </ul>
          </div>
          <div className="nav__right">
            {user ? (
              <Link to="/settings">
                <img
                  className="nav__img"
                  src={publicFolder + user.profileImg}
                  alt=""
                />
              </Link>
            ) : (
              <ul className="nav__menu">
                <li className="nav__menu-item">
                  <Link to="/login">Login</Link>
                </li>
                <li className="nav__menu-item">
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
