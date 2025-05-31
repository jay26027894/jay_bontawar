import Folder from "./Folder";

export default function Projects() {
  const projects = [
    { name: "Dear Nisha", link: "https://dear-nisha.vercel.app/" },
    { name: "Dish Delight", link: "https://jay26027894.github.io/Dish-delight/" },
    { name: "Infinity Services", link: "https://jay26027894.github.io/Infinityservices/" },
    { name: "News Nest", link: "https://news-nest-rho.vercel.app/" },
    { name: "Portfolio Website", link: "https://jay-bontawar.vercel.app/" },
    { name: "Twitter UI Clone", link: "https://twitter-two-ashen.vercel.app/" },
    { name: "iTask", link: "https://itask-tan.vercel.app/" },
    
    { name: "iSparx Infotech", link: "" },
  ];

  // Group projects in chunks of 3
  const groupedProjects = [];
  for (let i = 0; i < projects.length; i += 3) {
    groupedProjects.push(projects.slice(i, i + 3));
  }

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 mb-24 text-center">
      <h3 className="text-3xl font-semibold mb-8 text-purple-400">Projects</h3>
      <div className="flex flex-wrap justify-center gap-36">
        {groupedProjects.map((group, idx) => (
          <Folder
            key={idx}
            size={0.85}
            color="#00d8ff"
            className="custom-folder"
            items={group.map((project) => (
              <div className="w-full h-full flex items-center justify-center">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-center text-purple-900 font-semibold underline hover:text-purple-600 transition"
                  >
                    {project.name}
                  </a>
                ) : (
                  <p className="text-xs text-center text-purple-900 font-semibold">{project.name}</p>
                )}
              </div>
            ))}
          />
        ))}
      </div>
    </section>
  );
}
