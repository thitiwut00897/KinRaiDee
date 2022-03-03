import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useHistory } from "react-router";
import RecipeDetailItem from "../../components/recipe/RecipeDeatilItem";

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

const RecipeDetail = () => {
    const history = useHistory();
    const onBackPress = () => {
        history.push('/');
    }

    return (
        <MainGrid>
            <HeaderText onClick={onBackPress} variant='h4' component='div'>Back</HeaderText>
            <RecipeDetailItem />
        </MainGrid>
    )
}

export default RecipeDetail;