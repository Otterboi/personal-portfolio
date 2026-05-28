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
        <h5 className="text-lg sm:text-xl font-semibold">
          {name}
        </h5>
      </div>

      <p className="text-sm sm:text-base leading-relaxed font-light mb-4">
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
          <p className="muted-text text-sm italic">
            Note: This project is private due to {visibility.reason}
          </p>
        )}
      </div>
    </div>
  );
}