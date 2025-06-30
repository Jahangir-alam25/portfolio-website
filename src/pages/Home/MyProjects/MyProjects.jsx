import React from 'react';

const projects = [
  {
    title: "Event Explorer",
    description:
      "A platform to explore and discover tech and cultural events in major cities. Users can register, like, and bookmark events.",
    features: ["User Auth", "Live Event Filtering", "Bookmark System"],
    tech: ["React", "Firebase", "Tailwind CSS", "React Router"],
    live: "https://eventexplorer.web.app",
    github: "https://github.com/yourusername/event-explorer",
    details: "#",
    image: "https://via.placeholder.com/400x240", // Replace with actual image URL
  },
  {
    title: "Courier Connect",
    description:
      "A courier service app where users can book and track parcel delivery. Admin dashboard included.",
    features: ["Booking System", "Delivery Tracking", "Admin Dashboard"],
    tech: ["Next.js", "MongoDB", "Tailwind", "JWT"],
    live: "#",
    github: "#",
    details: "#",
    image: "https://via.placeholder.com/400x240",
  },
  {
    title: "Task Manager Pro",
    description:
      "A simple Kanban-style task manager to track daily productivity. Responsive design and drag-drop functionality.",
    features: ["Kanban Board", "Drag & Drop", "User Roles"],
    tech: ["React", "Redux", "DaisyUI", "Firebase"],
    live: "#",
    github: "#",
    details: "#",
    image: "https://via.placeholder.com/400x240",
  },
];

const MyProjects = () => {
  return (
    <section className="bg-[#0a0a23] text-white py-16 px-4 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12 underline decoration-blue-500">
        Projects
      </h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-[#10192a] rounded-xl overflow-hidden shadow-md"
          >
            {/* Project Image */}
            <div className="md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="md:w-1/2 p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
              <ul className="list-disc pl-5 text-sm text-gray-400">
                {project.features.map((feature, i) => (
                  <li key={i}>→ {feature}</li>
                ))}
              </ul>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded"
                >
                  GitHub
                </a>
                <a
                  href={project.details}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;