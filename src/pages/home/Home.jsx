import { Banner, Posts, Sidebar } from "../../components";

function Home() {
  return (
    <>
      <Banner />
      <div className="home">
        <div className="container">
          <div className="home__inner">
            <Posts />
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
