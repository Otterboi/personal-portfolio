import skillCategories from "../dependencies/skills.json";

export default function Skills() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category) => (
            <div key={category.title} className="card border rounded-lg p-5 shadow-sm transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02] w-full">

                <h3 className="text-lg font-semibold mb-4">
                    {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                        <span key={skill} className="skills-item px-3 py-1 rounded-md text-sm">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        ))}
    </div>
  );
}