import axiosInstance from '../utils/axios';

export const usersApi = () => {
    const getUserById = (userId) => {
        return axiosInstance.get(`/users/${userId}`);
    }

    return {
        getUserById
    }
}