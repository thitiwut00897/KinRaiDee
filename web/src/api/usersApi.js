import axiosInstance from '../utils/axios';

export const usersApi = () => {

    const getAllUsers = () => {
        return axiosInstance.get('/users');
    }

    const getUserById = (userId) => {
        return axiosInstance.get(`/users/${userId}`);
    }

    const loginByEmail = (email, password) => {
        return axiosInstance.post('/users/login', {
            userEmail: email,
            userPassword: password
        })
    }

    const deleteUserById = (userId) => {
        return axiosInstance.delete(`/users/delete/${userId}`);
    }

    return {
        getAllUsers,
        getUserById,
        loginByEmail,
        deleteUserById
    }
}