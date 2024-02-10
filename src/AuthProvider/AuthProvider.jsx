import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContex = createContext();
const auth = getAuth(app);

export default function AuthProvider({ children }) {
    const [users, setusers] = useState(null)
    const [loading, setloading] = useState(true)


    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signin = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setloading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const UnSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setusers(currentUser)
            setloading(false)
        })
        return () => {
            UnSubscribe();
        }
    }, [])


    const authinfo = {
        users,
        createUser,
        signin,
        logout,
        loading,

    }
    return (
        <AuthContex.Provider value={authinfo}>
            {
                children
            }
        </AuthContex.Provider>
    )
}