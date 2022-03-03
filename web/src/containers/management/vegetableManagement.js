import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useHistory } from "react-router";
import VagetableItem from "../../components/Vegetable/VegetableItem";

const MainGrid = styled(Grid)`
  width: 90%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
`

const Header = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const HeaderText = styled(Typography)`
  cursor: default;
  margin: 60px 0;
`

const VegetableGrid = styled(Grid)`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
`

const VegetableManagement = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('VegetableDetail');
    }

    return (
        <MainGrid>
            <Header>
                <HeaderText variant='h4' component='div'>Vegetable Management</HeaderText>
            </Header>
            
            <VegetableGrid>
                <VagetableItem onClick={handleClick} />
                <VagetableItem onClick={handleClick} />
                <VagetableItem onClick={handleClick} />
                <VagetableItem onClick={handleClick} />
                <VagetableItem onClick={handleClick} />
                <VagetableItem onClick={handleClick} />
                <VagetableItem onClick={handleClick} />
                <VagetableItem onClick={handleClick} />
            </VegetableGrid>
        </MainGrid>
    )
}

export default VegetableManagement;