function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__inner">
          <div className="nav__left">
            <a href="/" className="nav__logo">
              Blogger
            </a>
          </div>
          <div className="nav__center">
            <ul className="nav__menu">
              <li className="nav__menu-item">Home</li>
              <li className="nav__menu-item">About</li>
              <li className="nav__menu-item">Contact</li>
              <li className="nav__menu-item">Write</li>
              <li className="nav__menu-item">Logout</li>
            </ul>
          </div>
          <div className="nav__right">
            <img
              className="nav__img"
              src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
