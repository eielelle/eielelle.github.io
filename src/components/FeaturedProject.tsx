interface FeaturedProjectProps {
  title: String;
  description: String;
  img: any;
  tags: String[];
  ghLink?: String;
  deployLink?: String;
  reverse: boolean;
}

function FeaturedProject({
  title,
  description,
  img,
  tags,
  ghLink,
  deployLink,
  reverse = false,
}: FeaturedProjectProps) {
  return (
    <div className="grid grid-cols-12 grid-rows-1 mb-24">
      <div
        className={`project-${!reverse ? "left" : "right"} flex items-center`}
      >
        <img src={img} alt="gradify-web" className="w-full" />
      </div>

      <div
        className={`project-${reverse ? "left" : "right"} ${
          reverse ? "text-left" : "text-right"
        } text-black md:text-white`}
      >
        <span className="text-accent text-lg">Featured Project</span>
        <h2 className="text-4xl font-semibold mb-8 bg-accent p-2">{title}</h2>
        <p className="md:bg-transparent md:bg-white text-black p-4">
          {description}
        </p>
        <p
          className={`my-5 flex gap-4 ${
            reverse ? "md:justify-start" : "md:justify-end"
          } justify-center`}
        >
          {tags.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>

        <div
          className={`flex ${
            reverse ? "md:justify-start" : "md:justify-end"
          } justify-center items-center gap-4`}
        >
          {ghLink && (
            <a href={ghLink as string}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          )}
          {deployLink && (
            <a href={deployLink as string}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
