import axiosInstance from "../utils/axios";

const recipesApi = () => {
  const getAllMenu = () => {
    return axiosInstance.get("/recipes");
  };

  const getMenuById = (recipeId) => {
    return axiosInstance.get(`/recipes/${recipeId}`);
  };

  const getAllRecommendMenu = () => {
    return axiosInstance.get("/favorites");
  };

  const updateMenuById = (recipeId, data) => {
    return axiosInstance.put(`recipes/update/${recipeId}`, { ...data });
  };

  return {
    getAllMenu,
    getMenuById,
    getAllRecommendMenu,
    updateMenuById,
  };
};

export default recipesApi;
