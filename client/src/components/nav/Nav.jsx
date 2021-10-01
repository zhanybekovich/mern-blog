import { Link } from "react-router-dom";

function Nav() {
  const user = false;

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
              <li className="nav__menu-item">{user && "Logout"}</li>
            </ul>
          </div>
          <div className="nav__right">
            {user ? (
              <img
                className="nav__img"
                src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
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

export default Nav;
