import { useEffect } from "react";
import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import { usersApi } from "../api/usersApi";
import { userState } from "../store/atom";

const useAuth = () => {
    const [user, setUser] = useRecoilState(userState);
    const { push } = useHistory();

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            push('/login');
        } else if (userId && (user === undefined || user === null)) {
            usersApi().getUserById(userId).then(res => {
                setUser(res.data)
            })
        }
    }, [user])

    const logout = () => {
        localStorage.removeItem('userId')
        setUser(null);
        push('/login')
    }

    return {
        user,
        logout
    }
}

export default useAuth;