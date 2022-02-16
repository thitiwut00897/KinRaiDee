import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import MenuTab from '../components/Menu/MenuTab';
import MenuTable from '../components/Table/MenuTable';

const RecommendGrid = styled(Grid)`
  width: 90%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
`

const HeaderText = styled(Typography)`
  cursor: default;
  margin-top: 60px;
`

const Recommend = () => {
  return (
    <RecommendGrid>
      <HeaderText variant='h4' component="div">Recommend Menu</HeaderText>
      <MenuTab />
      <MenuTable />
    </RecommendGrid>
  );
}

export default Recommend;
