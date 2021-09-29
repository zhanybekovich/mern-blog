import { Sidebar } from "../../components";

function Settings() {
  return (
    <div className="settings">
      <div className="container">
        <div className="settings__inner">
          <div className="settings__content">
            <div className="settings__top">
              <span className="settings__update">Update Your Acount</span>
              <span className="settings__del">Delete Your Acount</span>
            </div>

            <form className="settings__form">
              <label>Profile Image</label>
              <div className="settings__profile-img">
                <img
                  src="https://images.unsplash.com/photo-1632235420789-c88dfa322e14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80"
                  alt=""
                />
                <label htmlFor="settingsUserIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#061e37"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
                  </svg>
                </label>
                <input
                  className="settings__user-icon-input"
                  type="file"
                  id="settingsUserIcon"
                />
              </div>
              <label>
                Username
                <input type="text" placeholder="John Doe" />
              </label>

              <label>
                Email
                <input type="email" placeholder="johndoe@company.com" />
              </label>

              <label>
                Password
                <input type="password" />
              </label>
              <button className="settings__submit">Update</button>
            </form>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Settings;
