import { useEffect } from "react";
import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import { usersApi } from "../api/usersApi";
import { userState } from "../store/atom";

const useAuth = () => {
    const [user, setUser] = useRecoilState(userState);
    const { push } = useHistory();

    useEffect(() => {
        const userId = localStorage.getItem('user');
        if (!userId) {
            push('/login');
        }
    }, [user])

    const logout = () => {
        setUser(null);
        push('/login')
    }

    return {
        user,
        logout
    }
}

export default useAuth;