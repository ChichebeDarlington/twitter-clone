import Post from "../post/Post";
import Tweetbox from "../tweetbox/Tweetbox";
import "./feeds.css";
const Feeds = () => {
  return (
    <div className="feeds">
      {/* header */}
      <div className="feeds-header">
        <h2>Home</h2>
      </div>
      {/* tweet box */}
      <Tweetbox />
      {/* post */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feeds;
