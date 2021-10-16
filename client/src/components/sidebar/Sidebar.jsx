import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(()=> {
    const getCats = async ()=> {
      const res = await axios.get('/categories')
      setCats(res.data)
    }

    getCats();
  })

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
          {cats.map((cat)=> (
          <li className="sidebar__categories-item" key={cat.name}>
            <Link to={`/?cat=${cat.name}`}>
              {cat.name}
            </Link>
            </li>
          ))}
          
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
