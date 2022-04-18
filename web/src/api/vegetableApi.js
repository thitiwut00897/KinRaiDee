import axiosInstance from '../utils/axios';

export const vegetableApi = () => {

    const getAllVegetables = () => {
        return axiosInstance.get('/vegetables');
    }

    const getVegetableById = (vegetableId) => {
        return axiosInstance.get(`/vegetables/${vegetableId}`);
    }

    return {
        getAllVegetables,
        getVegetableById
    }
}

export default vegetableApi;