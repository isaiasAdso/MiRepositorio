
import { useNavigate } from "react-router-dom";



export const useProjectsLogic = () => {

    const navigate = useNavigate();

    const GoProject = (id: number) => {
        console.log("hola vamos al id: ", id);
    }

    const UrlProjects = () => {
        navigate("/projects");
    }

    return {
        GoProject,
        UrlProjects
    };
}