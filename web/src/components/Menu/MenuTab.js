import { Grid, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/system";
import MenuItem from './MenuItem';
import React from "react";

const MenuTabBox = styled(Grid)`
    width: 100%;
    margin-top: 18px;
`

const MenuTab = (props) => {
    const { menus } = props;
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                        <Tab label={<MenuItem menu={menu} />} />
                    )
                })}
            </Tabs>
        </MenuTabBox>
    )
}

export default MenuTab;