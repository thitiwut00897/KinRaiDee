import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { styled } from "@mui/system";
import StatusButton from "../Button/StatusButton";

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

const UserTable = () => {
    const createData = (firstname, lastname) => {
        return { firstname, lastname };
    }

    const rows = [
        createData('Test Data', 'mock-up'),
        createData('Test Data', 'mock-up'),
        createData('Test Data', 'mock-up'),
        createData('Test Data', 'mock-up'),
        createData('Test Data', 'mock-up'),
    ];

    const onDelete = () => {
        console.log('Delete')
    }


    return (
        <MainTable component={Paper} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <Header>
                        <TableCell><Typography variant="h6">First Name</Typography></TableCell>
                        <TableCell align="left"><Typography variant="h6">Last Name</Typography></TableCell>
                        <TableCell align="center"><Typography variant="h6">Manage</Typography></TableCell>
                    </Header>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.firstname}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.firstname}
                            </TableCell>
                            <TableCell align="left">{row.lastname}</TableCell>
                            <TableCell align="center">
                                <StatusButton
                                    onClickButton={onDelete}
                                    color='error'
                                >
                                    Delete
                                </StatusButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </MainTable>
    )
}

export default UserTable;