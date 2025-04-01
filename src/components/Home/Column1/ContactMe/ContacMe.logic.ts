
import { useNavigate } from "react-router-dom";



export const ContactMeLogic = () => {

    const navigate = useNavigate();

    const UrlProjects = () => {
        navigate("/contact");
    }

    return {

        UrlProjects
    };
}