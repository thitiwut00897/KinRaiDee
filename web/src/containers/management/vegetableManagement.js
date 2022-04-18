import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Route } from "react-router-dom";
import VagetableItem from "../../components/Vegetable/VegetableItem";
import VegetableDetail from "../vegetable/vegetableDetail";

const MainGrid = styled(Grid)`
  width: 90%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
  margin-left: 7em;
  margin-bottom: 3.5em;
`;

const Header = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled(Typography)`
  cursor: default;
  margin: 60px 0;
`;

const VegetableGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
`;

const VegetableManagement = ({ match }) => {
  return (
    <MainGrid>
      <Header>
        <HeaderText variant="h4" component="div">
          Vegetable Management
        </HeaderText>
      </Header>
      <VegetableGrid>
        <VagetableItem />
      </VegetableGrid>
      <Route path={`${match.path}/:vegetableId`} component={VegetableDetail} />
    </MainGrid>
  );
};

export default VegetableManagement;
