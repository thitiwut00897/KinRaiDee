import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const VegetableGrid = styled(Grid)`
    width: 221px;
    height: 205px;
    background-color: #F6F6F6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    margin: 10px;
    transition: all .3s;
    padding-top: 10px;

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

const BodyText = styled(Typography)`
    margin: auto;
`
const VagetableItem = (props) => {
    const { onClick } = props;
    return (
        <VegetableGrid
            onClick={onClick}
        >
            <img
                className='VegetableItem'
                src={'https://picsum.photos/200'}
                alt={'mock-up'}
                loading='lazy'
            />
            <BodyText typography='body1'>มะเขือเทศ</BodyText>
        </VegetableGrid>
    )
}

export default VagetableItem;