import { Button } from "@mui/material";
import { styled } from "@mui/system";

const ButtonLogin = styled(Button)`
    width: 60%;
    margin: 10px auto;
`

const LoginButton = (props) => {
    const { onHandleSubmit, disabled } = props;
    return (
        <ButtonLogin
            variant="contained"
            color="primary"
            onClick={onHandleSubmit}
            disabled={disabled}
            fullWidth
        >
            {props.children}
        </ButtonLogin>
    )
}

export default LoginButton;