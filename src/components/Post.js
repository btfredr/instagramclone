import droptop from "../assets/droptop.jpg";

const Post = () => {
  return (
    <div className="post">
      <h3>Username</h3>
      {/* header, username and AVI */}

      <img className="post__image" src={droptop} alt="" />
      {/* image */}

      <h4 className="post__text">
        <strong>_flyxo</strong> Drop Top remix dropping soon! @whensdayod
        @nicktaylorlife!
      </h4>
      {/*username and caption */}
    </div>
  );
};

export default Post;
