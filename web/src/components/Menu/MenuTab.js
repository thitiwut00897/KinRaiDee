import { Grid, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/system";
import MenuItem from "./MenuItem";
import React from "react";
import recipesApi from "../../api/recipesApi";
import useMenu from "../../hooks/useMenu";

const MenuTabBox = styled(Grid)`
  width: 100%;
  margin-top: 18px;
`;

const MenuTab = (props) => {
  const { menus } = props;
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
            <Tab label={<MenuItem menu={menu} onReject={handleReject} />} />
          );
        })}
      </Tabs>
    </MenuTabBox>
  );
};

export default MenuTab;
