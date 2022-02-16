import { Grid } from "@mui/material";
import { styled } from "@mui/system";

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
`

const MenuItem = () => {
    return (
        <MenuGrid>
            <img
                className='MenuImage'
                src={'https://picsum.photos/200'}
                alt={'mock-up'}
                loading='lazy'
            />
        </MenuGrid>
    )
}

export default MenuItem;