import { useState, useEffect } from "react";
import { Header, Posts, Sidebar } from "../../components";
import axios from "axios";
import { useLocation } from "react-router";


function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
     const res = await axios.get("/posts"+search)
     setPosts(res.data)
    }

    fetchPosts();
  }, [search])

  return (
    <>
      <Header />
      <div className="home">
        <div className="container">
          <div className="home__inner">
            <Posts posts={posts} />
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
