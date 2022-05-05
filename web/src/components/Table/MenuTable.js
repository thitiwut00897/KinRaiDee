import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import StatusButtonGroup from "../Menu/StatusButtonGroup";
import recipesApi from "../../api/recipesApi";
import useMenu from "../../hooks/useMenu";
import { useEffect } from "react";

const MenuTableGrid = styled(Grid)`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const HeaderText = styled(Typography)`
  cursor: default;
  margin-top: 60px;
`;

const MainTable = styled(TableContainer)`
  margin: 36px 0 60px 0;
  background-color: #f7f7f7;
  border-radius: 10px;
  border: none;
`;

const HeaderGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  margin-top: 20px;
`;

const Header = styled(TableRow)`
  border-bottom: 2px solid #000000;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
  vertical-align: baseline;
`;

const ImageTable = styled(Grid)`
  width: 106px;
  height: 90px;
  border-radius: 10px;
`;

const MenuTable = (props) => {
  const { menus } = props;
  const { refresh } = useMenu();

  const renderImage = (url) => {
    return (
      <ImageTable>
        <img className="MenuImage" src={url} alt={url} loading="lazy" />
      </ImageTable>
    );
  };

  const handleApprove = async (recipeId) => {
    const { data } = await recipesApi().getMenuById(recipeId);
    let updatedData = {
      ...data,
      status: "Approve",
    };
    await recipesApi().updateMenuById(recipeId, updatedData);
    refresh();
  };

  return (
    <MenuTableGrid>
      <HeaderGrid>
        <HeaderText variant="h5" component="div">
          Add Recommend
        </HeaderText>
      </HeaderGrid>
      <MainTable component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <Header>
              <TableCell align="center">
                <Typography variant="h6">User</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">Date And Time</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">Menu</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6">Ingredients</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6">Directions</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">Picture</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">Status</Typography>
              </TableCell>
            </Header>
          </TableHead>
          <TableBody>
            {menus.map((menu) => (
              <TableRow
                key={menu._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" 
                  style={{
                    verticalAlign: "baseline"
                  }}>
                  {menu.firstName}&nbsp; &nbsp;{menu.lastName}
                </TableCell>
                <TableCell align="center" style={{verticalAlign: "baseline"}}>{menu.date}</TableCell>
                <TableCell align="center" style={{verticalAlign: "baseline"}}>{menu.recipeName}</TableCell>
                <TableCell align="left" style={{verticalAlign: "baseline"}}>{menu.ingredients}</TableCell>
                <TableCell align="left" style={{verticalAlign: "baseline"}}>{menu.directions}</TableCell>
                <TableCell align="center">
                  {renderImage(menu.picture)}
                </TableCell>
                <TableCell align="center">
                  <StatusButtonGroup id={menu._id} onApprove={handleApprove} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </MainTable>
    </MenuTableGrid>
  );
};

export default MenuTable;
