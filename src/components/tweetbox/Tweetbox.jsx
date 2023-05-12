import Avatar from "../avatar/Avatar";
import Button from "../button/Button";
import "./tweetbox.css";

const Tweetbox = () => {
  return (
    <div className="tweetbox">
      <form className="tweetbox-form">
        <div className="tweetbox-input">
          <Avatar />
          {/* <img src="/images/fine-babe.jpg" alt="tweetbox-images" /> */}
          <input type="text" placeholder="Whats up" />
        </div>
        <input
          type="text"
          placeholder="Enter image url"
          className="tweetbox-input-image"
        />
        <button className="tweetbox-btn">Tweet</button>
      </form>
    </div>
  );
};

export default Tweetbox;
