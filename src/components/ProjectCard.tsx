interface ProjectCardProps {
    title: String;
    description: String;
    tags: String[];
    ghLink?: String;
    deployLink?: String;
  }

function ProjectCard({title, description, tags, ghLink, deployLink}: ProjectCardProps) {
  return (
    <div className="p-6 text-black bg-white flex flex-col">
      <div className="flex justify-between items-center">
        <div><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#937bcd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg></div>

        <div className="flex items-center gap-4">
          {ghLink && <a href={ghLink as string}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-github"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>}

          {deployLink && <a href={deployLink as string}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-external-link"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>}
          
          
        </div>
      </div>

      <h3 className="my-4 text-3xl font-semibold">{title}</h3>
      <p className="flex-1">{description}</p>
      <p className="mt-4 flex gap-4">
          {tags.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>
    </div>
  );
}

export default ProjectCard;
