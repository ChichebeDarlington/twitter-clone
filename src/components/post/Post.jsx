import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import Avatar from "../avatar/Avatar";
import "./post.css";

const Post = ({ displayName, username, verified, text, image, avater }) => {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar className="post-avatar" />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-header-title">
            <h3 className="user-centered">
              Mazi Madu{" "}
              <span className="">
                <VerifiedUserOutlined className="post-badge" />
              </span>
              <small>@mazimadu</small>
            </h3>
          </div>
          <div className="post-header-desc">
            <p>I finally beat the challenge, built Twitter clone with React</p>
          </div>
        </div>
        <div className="post-image-container">
          <img src="images/giphy.gif" alt="" className="post-image" />
        </div>
        <div className="post-footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
