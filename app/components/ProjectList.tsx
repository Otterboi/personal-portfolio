type ProjectListProps = {
  name: string;
  description: string;
  link: string;
  isPrivate: boolean;
};

export default function ProjectList({name, description, link, isPrivate}: ProjectListProps) {
  return (
    <div className="relative flex flex-col my-3 bg-white shadow-sm border border-slate-200 p-4 sm:p-6 rounded-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02] w-full">
      <div className="flex items-center mb-3">
        <h5 className="text-slate-800 text-lg sm:text-xl font-semibold">
          {name}
        </h5>
      </div>

      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light mb-4">
        {description}
      </p>

      <div className="mt-auto">
        {!isPrivate ? (
          <a href={link}className="text-slate-800 font-semibold text-sm flex items-center hover:underline">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        ) : (
          <p className="text-slate-500 text-sm italic">
            Note: This project is private due to .....
          </p>
        )}
      </div>
    </div>
  );
}