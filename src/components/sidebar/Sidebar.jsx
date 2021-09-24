import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__item">
        <h4 className="sidebar__item-title">About Me</h4>
        <img
          src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          voluptatum eaque tempora deserunt. Illum magni repellat perferendis
          aperiam modi adipisci iure, unde quibusdam eius nam iste excepturi
          nesciunt, possimus ratione.
        </p>
      </div>
      <div className="sidebar__item">
        <h4 className="sidebar__item-title">Categories</h4>
        <ul className="sidebar__categories">
          <li className="sidebar__categories-item">Technology</li>
          <li className="sidebar__categories-item">Coding</li>
          <li className="sidebar__categories-item">Livestyle</li>
          <li className="sidebar__categories-item">Music</li>
          <li className="sidebar__categories-item">Travel</li>
          <li className="sidebar__categories-item">Health</li>
        </ul>
      </div>
      <div className="sidebar__item">
        <h4 className="sidebar__item-title">Follow Me</h4>
        <ul className="sidebar__socials">
          <li className="sidebar__socials-item">
            <a
              href="https://github.com/zhanybekovych"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </li>
          <li className="sidebar__socials-item">
            <a href="https://fb.com" target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
          </li>
          <li className="sidebar__socials-item">
            <a href="https://fb.com" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
