import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import vegetableApi from "../../api/vegetableApi";
import { useHistory } from "react-router";

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
    font-size: 22px;
`
const VegetableItem = () => {
    const [allVegetable, setAllVegetable] = useState([]);
    
    useEffect(() => {
    const getAllVegetable = async () => {
        const { data } = await vegetableApi().getAllVegetables();
        setAllVegetable(data);
      };
        getAllVegetable();
    }, []);

    const history = useHistory();
    const handleClick = (vegetableId) => {
        history.push(`vegetable/${vegetableId}`);
      };

    return( 
        <>
        {allVegetable.map(vegetable => (
            <VegetableGrid onClick={() => (handleClick(vegetable._id))}>
            <img
                className='VegetableItem'
                src={vegetable.picture}
                alt={vegetable._id}
                loading='lazy'
            />
            <BodyText typography='body1'>{vegetable.vegetableName}</BodyText>
        </VegetableGrid>
        ))}
        </>
    )
}

export default VegetableItem;