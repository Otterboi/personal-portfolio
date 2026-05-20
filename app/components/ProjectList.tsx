type ProjectList = {
    name: string;
    description: string;
    link: string;
};

export default function ProjectList({name, description, link}: ProjectList){
    return(
        <div className="relative flex flex-col my-2 bg-white shadow-sm border border-slate-200 p-6 transition delay-60 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
            <div className="flex items-center mb-4">
                <h5 className="text-slate-800 text-xl font-semibold">
                    {name}
                </h5>
            </div>
            <p className="block text-slate-600 leading-normal font-light mb-4">
                {description}
            </p>
            <div>
                <a href={link} className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        </div>
    );
}