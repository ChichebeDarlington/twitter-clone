import "./sidebar.css";
import styled from "styled-components";
import {
  FaTwitter,
  FaHome,
  IoMdNotifications,
  BsSearch,
  BiMailSend,
  BsListCheck,
  MdPermIdentity,
  FiMoreHorizontal,
  BsFillBookmarkFill,
} from "react-icons/all";
import SidebarOption from "../sidebar-option/SidebarOption";
import Button from "../button/Button";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* TwitterIcons */}
      <FaTwitter className="sidebar-twitter-icon" />
      {/* SidebarOption */}
      <SidebarOption text="Home" Icon={FaHome} active="active" />
      <SidebarOption text="Explore" Icon={BsSearch} />
      <SidebarOption text="Notification" Icon={IoMdNotifications} />
      <SidebarOption text="Messages" Icon={BiMailSend} />
      <SidebarOption text="Bookmarks" Icon={BsFillBookmarkFill} />
      <SidebarOption text="Lists" Icon={BsListCheck} />
      <SidebarOption text="Profile" Icon={MdPermIdentity} />
      <SidebarOption text="More" Icon={FiMoreHorizontal} />
      {/* button tweet */}
      <Button />
    </div>
  );
};

const Wrapper = styled.section``;

export default Sidebar;
