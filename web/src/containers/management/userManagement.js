import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { usersApi } from "../../api/usersApi";
import UserTable from "../../components/Table/UserTable";
import { allUsersState } from "../../store/atom";

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
  const [allUsers, setAllUsers] = useRecoilState(allUsersState);

  useEffect(() => {
    usersApi().getAllUsers().then((res) => {
      setAllUsers(res.data)
    })
  }, [])

  const handleDelete = (userId) => {
    usersApi().deleteUserById(userId).then((res) => {
      usersApi().getAllUsers().then((res) => {
        setAllUsers(res.data)
      })
    })
  }

  return (
    <MainGrid>
      <HeaderText variant='h4' component='div'>User Management</HeaderText>
      <UserTable users={allUsers} handleDelete={handleDelete} />
    </MainGrid>
  )
}

export default UserManagement;