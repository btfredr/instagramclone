import Post from "./components/Post";
import droptop from "./assets/droptop.jpg";

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

      <Post
        username="_flyxo"
        imageUrl={droptop}
        caption="Drop Top remix dropping soon! @whensdayod
        @nicktaylorlife"
      />
      <Post
        username="whensdayod"
        imageUrl={droptop}
        caption="Drop Top remix dropping soon! @_flyxo
        @nicktaylorlife"
      />
      <Post
        username="nicktaylorlife"
        imageUrl={droptop}
        caption="Drop Top remix dropping soon! @whensdayod
        @_flyxo"
      />
    </div>
  );
}

export default App;
