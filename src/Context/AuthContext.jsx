import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext()
function AuthContextProvider({children}) {
    const [isAuth,setIsAuth] = useState(false);
    const [token,setToken] = useState(null);
    const login =(token)=>{
        setIsAuth(true)
        setToken(token)
    }
    const logout = ()=>{
        setIsAuth(false)
        setToken(null)
    }
    
    return <AuthContext.Provider value={{isAuth,token,login,logout,}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;