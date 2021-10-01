import React from "react";

function Write() {
  return (
    <div className="write">
      <div className="container">
        <form className="write__form">
          <div className="write__form-group">
            <label className="write__file-label" htmlFor="fileInput">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
              </svg>
              Choose Image
            </label>
            <img
              src="https://images.unsplash.com/photo-1632188733972-0b12f9901e47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <input type="file" id="fileInput" className="write__file-input" />
            <input
              type="text"
              placeholder="Title"
              className="write__input"
              autoFocus={true}
            />
          </div>
          <div className="write__form-group">
            <textarea
              className="write__input write__textarea"
              placeholder="Your content"
            ></textarea>
          </div>
          <button className="write__publish-btn" type="submit">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Write;
