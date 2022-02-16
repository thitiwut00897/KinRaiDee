import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

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
`

const VegetableForm = () => {
    return (
        <MainGrid>
            <h1>test</h1>
        </MainGrid>
    )
}

export default VegetableForm;