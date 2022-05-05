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

  const getRecommendMenuByVegetableName = (vegetableName) => {
    return axiosInstance.post(`recipes/search/${vegetableName}`);
  }

  return {
    getAllMenu,
    getMenuById,
    getAllRecommendMenu,
    updateMenuById,
    getRecommendMenuByVegetableName
  };
};

export default recipesApi;
