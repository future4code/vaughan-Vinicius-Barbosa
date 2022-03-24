import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useProtectedPage = () => {
    const navigate = useNavigate()
   
    useEffect(() => {
        const token = window.localStorage.getItem('token')
        
        if(token === null){
            alert("Faça o login")
            navigate("/")
        }
    }, [])
}
