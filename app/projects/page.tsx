import projects from './projects'

export default function ProjectsPage() {
  return (
    <>
      <section className="space-y-8">
        <h1 className="text-3xl font-bold mb-6">Projects for Rutgers</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <li
              key={project.title}
              className="bg-white rounded-xl shadow-md p-6 transition-transform hover:-translate-y-1 hover:shadow-lg border border-gray-100"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold hover:text-blue-600 transition-colors">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </h2>
                <span
                  className={`ml-2 px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'In development'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-gray-700">{project.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}