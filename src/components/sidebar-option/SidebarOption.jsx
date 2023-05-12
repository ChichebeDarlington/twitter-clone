import "./sidebarOption.css";
import styled from "styled-components";

const SidebarOption = ({ active, Icon, text }) => {
  return (
    <div className={`sidebarOption ${active && "active"}`}>
      <div className="wrapper">
        <Icon className="icon" />
        <h2 className="">{text}</h2>
      </div>
    </div>
  );
};

const Wrapper = styled.section``;
export default SidebarOption;
