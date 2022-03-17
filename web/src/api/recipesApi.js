import axiosInstance from "../utils/axios";

const recipesApi = () => {

    const getAllMenu = () => {
        return axiosInstance.get('/recipes');
    }

    const getMenuById = (recipeId) => {
        return axiosInstance.get(`/recipes/${recipeId}`);
    }

    const getAllRecommendMenu = () => {
        return axiosInstance.get('/favorites');
    }

    return {
        getAllMenu,
        getMenuById,
        getAllRecommendMenu,
    }
}

export default recipesApi;