import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { styled } from "@mui/system";
import StatusButtonGroup from '../Menu/StatusButtonGroup';
import { useHistory } from "react-router";
import { usersApi } from "../../api/usersApi";


const MenuTableGrid = styled(Grid)`
    width: 100%;
    height: 100%;
    max-width: 1440px;
    margin: 0 auto;
`

const HeaderText = styled(Typography)`
  cursor: default;
  margin-top: 60px;
`

const MainTable = styled(TableContainer)`
    margin: 36px 0 60px 0;
    background-color: #F7F7F7;
    border-radius: 10px;
    border: none;
`

const Header = styled(TableRow)`
    border-bottom: 2px solid #000000;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
`

const ImageTable = styled(Grid)`
    width: 106px;
    height: 90px;
    border-radius: 10px;
    margin: 0 auto;
`

const MenuTable = (props) => {
    const { menus } = props
    const history = useHistory();

    const getUser = (userId) => {
        usersApi().getUserById(userId).then((res) => {
            console.log(res.data.firstName)
            return res.data.firstName;
        })
    }

    const renderImage = (url) => {
        return (
            <ImageTable>
                <img
                    className='MenuImage'
                    src={url}
                    alt={'mock-up'}
                    loading='lazy'
                />
            </ImageTable>
        )
    }

    const handleClick = (recipeId) => {
        history.push(`recipe/${recipeId}`);
    }

    return (
        <MenuTableGrid>
            <HeaderText variant='h5' component="div">Add Recommend</HeaderText>
            <MainTable component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <Header>
                            <TableCell align="center"><Typography variant="h6">User</Typography></TableCell>
                            <TableCell align="center"><Typography variant="h6">Date And Time</Typography></TableCell>
                            <TableCell align="center"><Typography variant="h6">Menu</Typography></TableCell>
                            <TableCell align="left"><Typography variant="h6">Ingredients</Typography></TableCell>
                            <TableCell align="left"><Typography variant="h6">Directions</Typography></TableCell>
                            <TableCell align="center"><Typography variant="h6">Picture</Typography></TableCell>
                            <TableCell align="center"><Typography variant="h6">Status</Typography></TableCell>
                        </Header>
                    </TableHead>
                    <TableBody>
                        {menus.map((menu) => (
                            <TableRow
                                key={menu._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={() => handleClick(menu._id)}
                            >
                                <TableCell align="center" component="th" scope="row">
                                    {'rungwaraporn'}
                                </TableCell>
                                <TableCell align="center">{menu.date}</TableCell>
                                <TableCell align="center">{menu.recipeName}</TableCell>
                                <TableCell align="left">{menu.ingredients}</TableCell>
                                <TableCell align="left">{menu.directions}</TableCell>
                                <TableCell align="center">{renderImage(menu.picture)}</TableCell>
                                <TableCell align="center"><StatusButtonGroup /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </MainTable>
        </MenuTableGrid>
    )
}

export default MenuTable;