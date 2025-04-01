
import { useNavigate } from "react-router-dom";



export const HomeLogic = () => {

    const navigate = useNavigate();

    const UrlProjects = () => {
        navigate("/profile");
    }

    return {

        UrlProjects
    };
}