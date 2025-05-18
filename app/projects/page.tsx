import projects from './projects'

export default function ProjectsPage() {
    return (
      <>
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Projects for Rutgers</h1>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          {projects.map((project) => (
            <li key={project.title} className="space-y-2">
              <h2 className="text-2xl font-bold hover:text-blue-600">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                ) : (
                  <span>{project.title}</span>
                )}
              </h2>
              <p className="text-gray-700">{project.description}</p>
              <p className="text-gray-500">{project.status}</p>
            </li>
          ))}
               </ul>
      </section>
      </>
    )
  }
  