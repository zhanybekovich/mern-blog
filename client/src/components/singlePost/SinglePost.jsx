import { PostDetails } from "../index";

function SinglePost() {
  return (
    <article className="single-post">
      <img
        className="single-post__img"
        src="https://images.unsplash.com/photo-1524715324774-b46ab3971a9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
        alt=""
      />

      <header className="single-post__header">
        <h1 className="single-post__title">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
          voluptas!
        </h1>
        <div className="single-post__edit-block">
          <button className="single-post__edit-btn single-post__edit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M18 14.45v6.55h-16v-12h6.743l1.978-2h-10.721v16h20v-10.573l-2 2.023zm1.473-10.615l1.707 1.707-9.281 9.378-2.23.472.512-2.169 9.292-9.388zm-.008-2.835l-11.104 11.216-1.361 5.784 5.898-1.248 11.103-11.218-4.536-4.534z" />
            </svg>
          </button>
          <button className="single-post__edit-btn single-post__del">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2zm-7-10.414l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414 3.293 3.293zm10-8.586h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-8-3h-4v1h4v-1z" />
            </svg>
          </button>
        </div>
      </header>
      <div className="single-post__content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolore
          eaque inventore minus neque, accusantium vero voluptatum! Ea, illum.
          Nulla voluptate quos amet minus facere rem tempore et optio officia
          delectus deleniti distinctio nemo, nobis totam at rerum quibusdam.
          Beatae illo dolore temporibus, quasi debitis facilis vel voluptatum
          rem ex cupiditate eaque deserunt? Cupiditate modi vero excepturi.
          Tenetur laboriosam voluptates necessitatibus non, quae atque incidunt
          maxime commodi, rerum nulla quasi unde repellat sunt, provident
          suscipit earum? Deleniti iusto earum, facilis, reprehenderit nihil
          labore odio dolores, fugit nisi facere numquam optio corrupti totam
          molestias! Labore pariatur alias porro nesciunt rem odit modi,
          provident facilis, culpa esse beatae debitis quis animi sequi optio
          blanditiis deleniti, quia delectus aspernatur distinctio inventore
          officiis quasi voluptatem? Quaerat tempora, ea, delectus perspiciatis
          consequatur nisi harum voluptatum placeat minima, dicta nobis eum quos
          inventore voluptatibus aspernatur. Temporibus enim dolore deleniti
          quasi debitis dolores minima ut asperiores explicabo!
        </p>
      </div>
      <PostDetails />
    </article>
  );
}

export default SinglePost;
