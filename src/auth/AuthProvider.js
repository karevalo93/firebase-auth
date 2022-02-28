import { onAuthStateChanged } from "firebase/auth";
import {createContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [contextValue, setContextvalue] = useState({user:null, location: "/", isLoading: false})

    useEffect(() => {
        setContextvalue({isLoading: true})
        const unsub = onAuthStateChanged(auth, (user) => {
            setContextvalue({user:user, isLoading:false})
        })
        return unsub;
    },[])


    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
}


export default AuthProvider;