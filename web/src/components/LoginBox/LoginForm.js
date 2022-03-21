import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import { useHistory } from "react-router";
import useInput from "../../hooks/useInput";
import { usersApi } from "../../api/usersApi";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/atom";
import Swal from "sweetalert2";

const LoginGrid = styled(Grid)`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LoginPaper = styled(Paper)`
  height: 363px;
  width: 453px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled(Typography)`
  cursor: default;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const LoginForm = () => {
  const history = useHistory();
  const setUser = useSetRecoilState(userState);
  const [showPassword, setShowPassword] = useState(true);
  let formIsValid = false;

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: enteredPasswordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.length >= 8);

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const handleSubmit = () => {
    usersApi()
      .loginByEmail(enteredEmail, enteredPassword)
      .then((res) => {
        setUser(res.data[0]);
        localStorage.setItem("userId", res.data[0]._id);
        resetEmailInput();
        resetPasswordInput();
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Cannot login",
          text: err.response.data.message,
        });
        resetEmailInput();
        resetPasswordInput();
      });
  };

  return (
    <LoginGrid>
      <LoginPaper elevation={10}>
        <HeaderText variant="h4" component="div">
          Admin Panel Login
        </HeaderText>
        <LoginInput
          label={"email"}
          value={enteredEmail}
          handleChange={emailChangeHandler}
          handleOnBlur={emailBlurHandler}
        />
        {enteredEmailHasError && (
          <Typography variant="subtitle1" color="error">
            Email Invalid!
          </Typography>
        )}
        <LoginInput
          label={"password"}
          value={enteredPassword}
          handleChange={passwordChangeHandler}
          handleOnBlur={passwordBlurHandler}
          showPassword={showPassword}
          handleClickShowPassword={() => setShowPassword(!showPassword)}
        />
        {enteredPasswordHasError && (
          <Typography variant="subtitle1" color="error">
            Password Invalid!
          </Typography>
        )}
        <LoginButton disabled={!formIsValid} onHandleSubmit={handleSubmit}>
          LOGIN
        </LoginButton>
      </LoginPaper>
    </LoginGrid>
  );
};

export default LoginForm;
