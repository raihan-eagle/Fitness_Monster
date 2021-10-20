import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init"
import { onAuthStateChanged, getAuth, signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth()

    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user)
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    
    const logout = () =>{
        signOut(auth)
        .then( ()=>{
            setUser({})
        })
    }

    useEffect( ()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
        })
    }
        ,[])

    return {
        user,
        error,
        logout,
        signInUsingGoogle
    }
}

export default useFirebase;