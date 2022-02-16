import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useHistory } from "react-router";
import VegetableDetailItem from "../../components/Vegetable/VegetableDetailItem";

const MainGrid = styled(Grid)`
  width: 90%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
`

const HeaderText = styled(Typography)`
  cursor: default;
  margin: 60px 0;
  transition: all .3s;
  cursor: pointer;

  &:hover {
      transform: translateY(-3px);
    }

  &:active {
      transform: translateY(-1px);
  }
`

const VegetableDetail = () => {
    const history = useHistory();
    const onBackPress = () => {
        history.push('/vegetable');
    }

    return (
        <MainGrid>
            <HeaderText onClick={onBackPress} variant='h4' component='div'>Back</HeaderText>
            <VegetableDetailItem />
        </MainGrid>
    )
}

export default VegetableDetail;