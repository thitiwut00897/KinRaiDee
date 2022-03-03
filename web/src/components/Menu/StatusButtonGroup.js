import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import StatusButton from "../Button/StatusButton";

const ButtonGroup = styled(Grid)`
    width: 100%
    height: 100%
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const onApprove = () => {
    console.log('Approve');
}


const StatusButtonGroup = () => {
    return (
        <ButtonGroup>
            <StatusButton onClickButton={onApprove} color='primary'>Approve</StatusButton>
        </ButtonGroup>
    )
}

export default StatusButtonGroup;