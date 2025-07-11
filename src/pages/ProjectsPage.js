import { useRef } from 'react';
import ScrollAnimation from "../hooks/ScrollAnimation";
import "../styles/projectspage.css";

const projects = [
  { title: "", description: "", },
  { title: "", description: "", },
  { title: "", description: "", },
  { title: "", description: "", }
];

const ProjectsPage = () => {
    const rightRef = useRef(null);
    ScrollAnimation(rightRef, { customClass: 'right', immediate: true });

    return (
        <div className="projects-page container">
            <h1 ref={rightRef}>Moje projekty</h1>

            <div className="projectspage-grid">
                {projects.map(project => (
                    <div key={project.title} className="projectspage-card">
                    <p>coming soon..</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ProjectsPage;