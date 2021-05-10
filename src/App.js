import Post from "./components/Post";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          className="app__headerImage"
          alt=""
        />
      </div>

      <h1>Hello, welcome to my Instagram Clone!</h1>

      <Post />
    </div>
  );
}

export default App;
