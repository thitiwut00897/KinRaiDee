import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { styled } from "@mui/system";
import StatusButtonGroup from '../Menu/StatusButtonGroup';

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
const MenuTable = () => {
    const createData = (user, dateAndTime, menu, ingredients, directions, picture, status) => {
        return { user, dateAndTime, menu, ingredients, directions, picture, status };
    }

    const rows = [
        createData('Test Data', '5/2/2022', 'Frozen yoghurt', 'ไอศกรีมโยเกิร์ต', 'ลองเดินไปเรื่อยๆ', 'https://picsum.photos/200', 'เทส'),
        createData('Test Data', '5/2/2022', 'Frozen yoghurt', 'ไอศกรีมโยเกิร์ต', 'ลองเดินไปเรื่อยๆ', 'https://picsum.photos/200', 'เทส'),
        createData('Test Data', '5/2/2022', 'Frozen yoghurt', 'ไอศกรีมโยเกิร์ต', 'ลองเดินไปเรื่อยๆ', 'https://picsum.photos/200', 'เทส'),
        createData('Test Data', '5/2/2022', 'Frozen yoghurt', 'ไอศกรีมโยเกิร์ต', 'ลองเดินไปเรื่อยๆ', 'https://picsum.photos/200', 'เทส'),
        createData('Test Data', '5/2/2022', 'Frozen yoghurt', 'ไอศกรีมโยเกิร์ต', 'ลองเดินไปเรื่อยๆ', 'https://picsum.photos/200', 'เทส'),
    ];

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
    return (
        <MenuTableGrid>
            <HeaderText variant='h5' component="div">Add Recommend</HeaderText>
            <MainTable component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <Header>
                            <TableCell align="left"><Typography variant="h6">User</Typography></TableCell>
                            <TableCell align="left"><Typography variant="h6">Date And Time</Typography></TableCell>
                            <TableCell align="left"><Typography variant="h6">Menu</Typography></TableCell>
                            <TableCell align="left"><Typography variant="h6">Ingredients</Typography></TableCell>
                            <TableCell align="left"><Typography variant="h6">Directions</Typography></TableCell>
                            <TableCell align="center"><Typography variant="h6">Picture</Typography></TableCell>
                            <TableCell align="center"><Typography variant="h6">Status</Typography></TableCell>
                        </Header>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.menu}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" component="th" scope="row">
                                    {row.user}
                                </TableCell>
                                <TableCell align="left">{row.dateAndTime}</TableCell>
                                <TableCell align="left">{row.menu}</TableCell>
                                <TableCell align="left">{row.ingredients}</TableCell>
                                <TableCell align="left">{row.directions}</TableCell>
                                <TableCell align="center">{renderImage(row.picture)}</TableCell>
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