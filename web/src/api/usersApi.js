import axiosInstance from '../utils/axios';

export const usersApi = () => {
    const getUserById = (userId) => {
        return axiosInstance.get(`/users/${userId}`);
    }

    const loginByEmail = (email, password) => {
        return axiosInstance.post('/users/login', {
            userEmail: email,
            userPassword: password
        })
    }

    return {
        getUserById,
        loginByEmail
    }
}