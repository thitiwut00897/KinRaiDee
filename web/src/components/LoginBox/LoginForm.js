import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import { useHistory } from "react-router";


const LoginGrid = styled(Grid)` 
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const LoginPaper = styled(Paper)`
    height: 363px;
    width: 453px;
    border-radius: 10px;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LoginForm = () => {
    const history = useHistory();
    const [error, setError] = useState('');
    const [user, setUser] = useState({
        email: '',
        password: '',
        showPassword: true,
    })

    const handleChange = (prop) => (event) => {
        setUser({ ...user, [prop]: event.target.value });
    };

    const handleClickShow = () => {
        setUser({
            ...user,
            showPassword: !user.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = () => {
        if (user.email === '' || user.password === '') {
            if (user.email === '') {
                setError('Email is empty')
            } else {
                setError('Password is empty')
            }
            return
        }
        localStorage.setItem('user', user.email);
        history.push('/');
    }

    return (
        <LoginGrid>
            <LoginPaper elevation={10}>
                <LoginInput
                    label={'email'}
                    value={user.email}
                    handleChange={handleChange}
                    handleMouseDownPassword={handleMouseDownPassword}
                />
                <LoginInput
                    label={'password'}
                    value={user.password}
                    handleChange={handleChange}
                    handleClickShowPassword={handleClickShow}
                    handleMouseDownPassword={handleMouseDownPassword}
                    showPassword={user.showPassword}
                />
                {error === '' || <Typography variant='subtitle1' color='error'>{error}</Typography>}
                <LoginButton onHandleSubmit={handleSubmit}>
                    LOGIN
                </LoginButton>
            </LoginPaper>
        </LoginGrid>
    )
}

export default LoginForm;