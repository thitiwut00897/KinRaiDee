import axiosInstance from "../utils/axios";

const recipesApi = () => {

    const getAllMenu = () => {
        return axiosInstance.get('/recipes');
    }

    const getMenuById = (recipeId) => {
        return axiosInstance.get(`/recipes/${recipeId}`);
    }

    return {
        getAllMenu,
        getMenuById
    }
}

export default recipesApi;