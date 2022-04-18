import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import vegetableApi from "../../api/vegetableApi";
import VegetableDetailItem from "../../components/Vegetable/VegetableDetailItem";
import { useParams } from "react-router-dom";

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
  const { vegetableId } = useParams();
  const [ vegetable, setVegetable ] = useState([]);

  useEffect(() => {
    vegetableApi().getVegetableById(vegetableId).then((res) => {
      setVegetable(res.data);
    })
  }, [vegetableId])
  
    const onBackPress = () => {
        history.push('/vegetable');
    }
    
    return (
        <MainGrid>
            <HeaderText onClick={onBackPress} variant='h4' component='div'>Back</HeaderText>
            <VegetableDetailItem  vegetable={vegetable}/>
        </MainGrid>
    )
}

export default VegetableDetail;