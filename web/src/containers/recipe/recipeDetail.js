import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useHistory, useParams } from "react-router";
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
  let { recipeId } = useParams();
  const history = useHistory();
  const onBackPress = () => {
    history.replace(`/`);
    // history.goBack();
  }

  return (
    <MainGrid>
      <HeaderText onClick={onBackPress} variant='h4' component='div'>Back</HeaderText>
      <RecipeDetailItem recipeId={recipeId} />
    </MainGrid>
  )
}

export default RecipeDetail;