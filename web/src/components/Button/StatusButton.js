import { Button } from "@mui/material";
import { styled } from "@mui/system";

const ButtonStatus = styled(Button)`
    width: 55%;
    margin: 10px auto;
    border-radius: 10px;
    color: #fff;
    transition: all .3s;

    &:hover {
        transform: translateY(-3px);
      }

    &:active {
        transform: translateY(-1px);
    }
`

const StatusButton = (props) => {
    const { onClickButton, color, id, disabled } = props;
    return (
        <ButtonStatus
            disabled={disabled}
            variant="contained"
            color={color}
            onClick={() => onClickButton(id)}
            fullWidth
        >
            {props.children}
        </ButtonStatus>
    )
}

export default StatusButton;