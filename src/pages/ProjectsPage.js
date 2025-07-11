import { useRef } from 'react';
import ScrollAnimation from "../hooks/ScrollAnimation";
import "../styles/projectspage.css";

const ProjectsPage = () => {
    const rightRef = useRef(null);
    ScrollAnimation(rightRef, { customClass: 'right', immediate: true });

    return (
        <div className="projects-page container">
            <h1 ref={rightRef}>Moje projekty</h1>
        </div>
    )
}

export default ProjectsPage;