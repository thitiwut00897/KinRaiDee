import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import recipesApi from "../../api/recipesApi";
import MenuTab from "../Menu/MenuTab";

const MainGrid = styled(Grid)`
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: #F7F7F7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 44px;
  display: flex;
  flex-direction: column;
  margin-bottom:4em;
`

const HeaderText = styled(Typography)`
  cursor: default;
  border-bottom: 2px solid #000000;
  padding-bottom: 20px;
`

const BodyGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 0;
`

const DetailGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`

const Detail = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`

const Description = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`

const ImageGrid = styled(Grid)``

const RecommendGrid = styled(Grid)``

const RecipeDetailItem = (props) => {
  const { recipeId } = props;
  console.log(recipeId)
  const [recipe, setRecipe] = useState();
  console.log(recipe);

  useEffect(() => {
    recipesApi().getMenuById(recipeId).then((res) => {
      console.log(res.data)
      setRecipe(res.data);
    })
  }, [recipeId])

  return (
    <MainGrid>
      <HeaderText variant='h4'>Thitiwut P.</HeaderText>
      <BodyGrid>
        <DetailGrid>
          <Detail>
            <Typography variant='h6'>Menu :&nbsp;&nbsp;</Typography>
            <Typography variant='body1'>{recipe.recipeName}</Typography>
          </Detail>
          <Detail>
            <Typography variant='h6'>Date And Time :&nbsp;&nbsp;</Typography>
            <Typography variant='body1'>{recipe.date}</Typography>
          </Detail>
          <Detail>
            <Description>
              <Typography variant='h6'>Ingredients : </Typography>
              <Typography>{recipe.ingredients}</Typography>
            </Description>
          </Detail>
          <Description>
            <Typography variant='h6'>Directions : </Typography>
            <Typography>{recipe.directions}</Typography>
          </Description>
        </DetailGrid>
        <ImageGrid>
          <img
            className='RecipeDetailItem'
            src='https://picsum.photos/300'
            alt='mockup'
          />
        </ImageGrid>
      </BodyGrid>
    </MainGrid>
  )
}

export default RecipeDetailItem;