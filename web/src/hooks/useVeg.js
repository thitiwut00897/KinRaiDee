import { useEffect, useState } from "react";
import vegetableApi from "../api/vegetableApi";
const useVeg = () => {
    const [allVegetable, setAllVegetable] = useState([]);
    
    useEffect(() => {
    const getAllVegetable = async () => {
        const { data } = await vegetableApi().getAllVegetables();
        setAllVegetable(data);
      };
        getAllVegetable();
    }, []);

    return {
        allVegetable,
        getVegetable,getAllVegetable
      };
}
export default useVeg;