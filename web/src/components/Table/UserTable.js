import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useRecoilValue } from "recoil";
import { userState } from "../../store/atom";
import StatusButton from "../Button/StatusButton";

const MainTable = styled(TableContainer)`
  margin: 36px 0 60px 0;
  background-color: #f7f7f7;
  border-radius: 10px;
  border: none;
`;

const Header = styled(TableRow)`
  border-bottom: 2px solid #000000;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
`;

const UserTable = (props) => {
  const userAdmin = useRecoilValue(userState);
  const { users, handleDelete } = props;
  return (
    <MainTable component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <Header>
            <TableCell>
              <Typography variant="h6">First Name</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h6">Last Name</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Manage</Typography>
            </TableCell>
          </Header>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.firstName}
              </TableCell>
              <TableCell align="left">{user.lastName}</TableCell>
              <TableCell align="center">
                <StatusButton
                  disabled={userAdmin._id === user._id}
                  id={user._id}
                  onClickButton={handleDelete}
                  color="error"
                >
                  Delete
                </StatusButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </MainTable>
  );
};

export default UserTable;
