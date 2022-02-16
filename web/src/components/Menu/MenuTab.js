import { Grid, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/system";
import MenuItem from './MenuItem';
import React from "react";

const MenuTabBox = styled(Grid)`
    width: 100%;
    margin-top: 18px;
`

const MenuTab = () => {
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
                <Tab label={<MenuItem />} />
                <Tab label={<MenuItem />} />
                <Tab label={<MenuItem />} />
                <Tab label={<MenuItem />} />
                <Tab label={<MenuItem />} />
                <Tab label={<MenuItem />} />
                <Tab label={<MenuItem />} />
                <Tab label={<MenuItem />} />
                <Tab label={<MenuItem />} />
                <Tab label={<MenuItem />} />
            </Tabs>
        </MenuTabBox>
    )
}

export default MenuTab;