import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect } from "react";
import MenuTab from "../components/Menu/MenuTab";
import MenuTable from "../components/Table/MenuTable";
import useMenu from "../hooks/useMenu";

const RecommendGrid = styled(Grid)`
  width: 90%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
`;

const HeaderText = styled(Typography)`
  cursor: default;
  margin-top: 60px;
`;

const Recommend = () => {
  const { allRecommendMenu, allRejectMenu, getMenu } = useMenu();

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <RecommendGrid>
      {allRecommendMenu.length !== 0 && (
        <React.Fragment>
          <HeaderText variant="h4" component="div">
            Recommend Menu
          </HeaderText>
          <MenuTab canReject={true} menus={allRecommendMenu} />
        </React.Fragment>
      )}
      {allRejectMenu.length !== 0 && <MenuTable menus={allRejectMenu} />}
    </RecommendGrid>
  );
};

export default Recommend;
