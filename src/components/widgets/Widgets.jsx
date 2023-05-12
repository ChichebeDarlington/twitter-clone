import { Search } from "@mui/icons-material";
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";

import "./widgets.css";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <Search className="widgets-search-icon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets-widget-container">
        <h2>Whats is popping</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
