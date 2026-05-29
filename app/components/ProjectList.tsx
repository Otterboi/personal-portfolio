type ProjectListProps = {
  name: string;
  description: string;
  link: string;
  visibility: {
    isPrivate: boolean,
    reason: string
  };
};

export default function ProjectList({name, description, link, visibility}: ProjectListProps) {
  return (
    <div className="card relative flex flex-col my-3 shadow-sm border p-4 sm:p-6 rounded-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02] w-full">
      <div className="flex items-center mb-3">
        <p className="text-2xl sm:text-3xl font-semibold">
          {name}
        </p>
      </div>

      <p className="project-description text-base leading-relaxed mb-4">
        {description}
      </p>

      <div className="mt-auto">
        {!visibility.isPrivate ? (
          <a href={link}className="learn-more font-semibold text-sm flex items-center hover:underline">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        ) : (
          <p className="private-repo text-sm italic">
            Private repository - {visibility.reason}
          </p>
        )}
      </div>
    </div>
  );
}