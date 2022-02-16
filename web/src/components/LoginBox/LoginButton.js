import { Button } from "@mui/material";
import { styled } from "@mui/system";

const ButtonLogin = styled(Button)`
    width: 60%;
    margin: 10px auto;
`

const LoginButton = (props) => {
    const { onHandleSubmit } = props;
    return (
        <ButtonLogin
            variant="contained"
            color="primary"
            onClick={onHandleSubmit}
            fullWidth
        >
            {props.children}
        </ButtonLogin>
    )
}

export default LoginButton;