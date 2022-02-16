import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import UserTable from "../../components/Table/UserTable";

const MainGrid = styled(Grid)`
  width: 90%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
`

const HeaderText = styled(Typography)`
  cursor: default;
  margin-top: 60px;
`

const UserManagement = () => {
    return (
        <MainGrid>
            <HeaderText variant='h4' component='div'>User Management</HeaderText>
            <UserTable />
        </MainGrid>
    )
}

export default UserManagement;