import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import VegetableForm from '../../components/Vegetable/VegetableForm';

const MainGrid = styled(Grid)`
  width: 80%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
`

const HeaderText = styled(Typography)`
  cursor: default;
  margin: 60px 0;
`

const CreateVegetable = () => {
    return (
        <MainGrid>
            <HeaderText variant='h4'>Create Vegetable</HeaderText>
            <VegetableForm />
        </MainGrid>
    )
}

export default CreateVegetable;