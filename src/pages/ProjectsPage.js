import "../styles/projectspage.css";

const projects = [
  { title: "", description: "", },
  { title: "", description: "", },
  { title: "", description: "", },
  { title: "", description: "", }
];

const ProjectsPage = () => {

    return (
        <div className="projects-page container">
            <h1>Moje projekty</h1>

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