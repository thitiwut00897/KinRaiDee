import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';
import { useHistory } from "react-router";


const MenuGrid = styled(Grid)`
    width: 153px;
    height: 130px;
    background-color: #F6F6F6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all .3s;
    position: relative;

    &:hover {
        box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.6);
        transform: translateY(-3px);
        cursor: pointer;
      }

    &:active {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
        transform: translateY(-1px);
        cursor: pointer;
    }
    .close{
        position: absolute;
        top: 7px;
        right: 7px;
        width: 30px;
        height: 30px;
        -webkit-transition:-webkit-transform .25s, opacity .25s;
        -moz-transition:-moz-transform .25s, opacity .25s;
                 transition: transform .25s, opacity .25s; 
        opacity:.25;
    }

    .close:hover{
        -webkit-transform: rotate(270deg);
        -moz-transform: rotate(270deg);
        transform: rotate(270deg);
        opacity:1;
    }
`
const onReject = () => {
    console.log('Reject');
}
const MenuItem = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('RecipeDetail');
    }
    return (
        <MenuGrid>
            <CloseIcon
                className="close"
                onClick={onReject}
            />
            <img
                className='MenuImage'
                src={'https://picsum.photos/200'}
                alt={'mock-up'}
                loading='lazy'
                onClick={handleClick}
            />
        </MenuGrid>
    )
}

export default MenuItem;