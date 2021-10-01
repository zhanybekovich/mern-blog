import { Sidebar, SinglePost } from "../../components";

function Single() {
  return (
    <div className="single">
      <div className="container">
        <div className="single__inner">
          <SinglePost />
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Single;
