import { useContext } from "react";
import { login, register, logout } from "../api/authAPI"
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);
    const loginHandler = async (email, password) => {
        const { password: _, ...authData } = await login(email, password);
        changeAuthState(authData);
        return authData;
    }
    return loginHandler;
}

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);
    const registerHandler = async (email, password) => {
        const { password: _, ...authData } = await register(email, password);
        changeAuthState(authData);
        return authData;
    }
    return registerHandler;
}

export const useLogout = () => {
    const { logout: locallogout } = useContext(AuthContext);
    const logoutHandler = async () => {
        await logout();
        locallogout();
    }
    return logoutHandler;
}