import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

const MenuGrid = styled(Grid)`
  width: 153px;
  height: 130px;
  background-color: #f6f6f6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.3s;
  position: relative;

  &:hover {
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.6);
    transform: translateY(-3px);
    cursor: pointer;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    transform: translateY(-1px);
    cursor: pointer;
  }
  .close {
    position: absolute;
    top: 7px;
    right: 7px;
    width: 30px;
    height: 30px;
    -webkit-transition: -webkit-transform 0.25s, opacity 0.25s;
    -moz-transition: -moz-transform 0.25s, opacity 0.25s;
    transition: transform 0.25s, opacity 0.25s;
    opacity: 0.25;
  }

  .close:hover {
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    transform: rotate(270deg);
    opacity: 1;
  }
`;

const MenuItem = (props) => {
  const { menu, onReject, onHandleClick, canReject } = props;
  return (
    <MenuGrid>
      {canReject && (
        <CloseIcon className="close" onClick={() => onReject(menu._id)} />
      )}
      <img
        className="MenuImage"
        src={menu.picture}
        alt={menu._id}
        loading="lazy"
        onClick={() => onHandleClick(menu._id)}
      />
    </MenuGrid>
  );
};

export default MenuItem;
