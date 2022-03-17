import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import recipesApi from '../api/recipesApi';
import MenuTab from '../components/Menu/MenuTab';
import MenuTable from '../components/Table/MenuTable';
import { allMenuState, allRecommendMenuState } from '../store/atom';

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
  const [allMenu, setAllMenu] = useRecoilState(allMenuState);
  const [allRecommendMenu, setAllRecommendMenu] = useRecoilState(allRecommendMenuState);

  useEffect(() => {
    recipesApi().getAllMenu().then(res => {
      setAllMenu(res.data)
    })
    recipesApi().getAllRecommendMenu().then(res => {
      setAllRecommendMenu(res.data)
    })
  }, [])

  return (
    <RecommendGrid>
      <HeaderText variant='h4' component="div">Recommend Menu</HeaderText>
      <MenuTab menus={allMenu} />
      <MenuTable menus={allMenu} />
    </RecommendGrid>
  );
}

export default Recommend;
