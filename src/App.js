import { useState } from "react";
import Post from "./components/Post";
import droptop from "./assets/droptop.jpg";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "_flyxo",
      imageUrl: droptop,
      caption: "Drop Top remix dropping soon!",
    },
    {
      username: "whensdayod",
      imageUrl: droptop,
      caption: "Drop Top remix dropping soon!",
    },
    {
      username: "nicktaylorlife",
      imageUrl: droptop,
      caption: "Drop Top remix dropping soon!",
    },
  ]);

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

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
