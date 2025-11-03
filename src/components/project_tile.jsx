import { Icon } from "@iconify/react";

const Experience_Tile = ({
  icon_name,
  icon_color,
  project_title,
  project_description,
  langueges_framework,
  view_code = false,
}) => {
  return (
    <div className="relative w-full max-w-4xl min-h-[280px] bg-white rounded-xl shadow-lg p-6 md:p-8 hover:scale-[1.02] transition duration-300 border border-gray-100 hover:border-gray-200">
      <div className="flex flex-col md:flex-row gap-6 h-full">
        {/* Icon Section */}
        <div className="flex-shrink-0">
          <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
            <Icon icon={icon_name} width={28} height={28} color={icon_color} />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col">
          {/* Title & Description */}
          <div className="mb-6">
            <h1 className="text-[18px] font-bold text-gray-900 text-left mb-3">
              {project_title}
            </h1>
            <p className="text-[14px] text-gray-600 text-left leading-relaxed">
              {project_description}
            </p>
          </div>

          {/* Technologies Section */}
          <div className="mt-auto">
            <h2 className="text-[16px] font-semibold text-gray-700 text-left mb-3">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2 mb-15">
              {langueges_framework.map((lang, index) => (
                <span
                  className="px-3 py-1.5 bg-white text-gray-700 border border-gray-300 font-medium rounded-full text-[14px] transition-colors hover:bg-gray-50"
                  key={index}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* View Code Button - Now positioned with proper spacing */}
      {view_code && (
        <div className="absolute bottom-2 left-6 right-6 md:bottom-8 md:left-8 md:right-auto">
          <button className={`flex gap-2 items-center rounded-xl px-4 py-2.5 bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer group ${
            icon_color === "var(--accent-color)" ? "hover:bg-[var(--accent-color)]" : 
            icon_color === "var(--secondary-color)" ? "hover:bg-[var(--secondary-color)]" : 
            "hover:bg-[var(--primary-color)]"
          } hover:text-white hover:border-transparent`}>
            <Icon 
              icon="mdi:github" 
              width={20} 
              height={20} 
              className="text-gray-500 group-hover:text-white transition-colors" 
            />
            <span className="text-sm font-medium">View Code</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Experience_Tile;