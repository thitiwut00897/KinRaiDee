import { Grid, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/system";
import MenuItem from "./MenuItem";
import React from "react";
import recipesApi from "../../api/recipesApi";
import useMenu from "../../hooks/useMenu";
import { useHistory } from "react-router";

const MenuTabBox = styled(Grid)`
  width: 100%;
  margin-top: 18px;
`;

const MenuTab = (props) => {
  const { menus, canReject } = props;
  const history = useHistory();
  const [value, setValue] = React.useState(0);
  const { refresh } = useMenu();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleReject = async (recipeId) => {
    const { data } = await recipesApi().getMenuById(recipeId);
    let updatedData = {
      ...data,
      status: "Reject",
    };
    await recipesApi().updateMenuById(recipeId, updatedData);
    refresh();
  };

  const handleClick = (recipeId) => {
    history.replace(`recipe/${recipeId}`);
  };

  return (
    <MenuTabBox>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        {menus.map((menu) => {
          return (
            <Tab
              key={menu._id}
              label={
                <MenuItem
                  canReject={canReject}
                  menu={menu}
                  onReject={handleReject}
                  onHandleClick={handleClick}
                />
              }
            />
          );
        })}
      </Tabs>
    </MenuTabBox>
  );
};

export default MenuTab;
