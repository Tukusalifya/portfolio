import { Icon } from "@iconify/react";

const Skill_Pill = ({ title, skill_names, is_secondary_color }) => {
  return (
    <div>
      <div className="flex flex-col max-w-full w-full h-max p-5 rounded-[8px] bg-white shadow-sm">
        <div className="flex gap-5 items-center mb-8">
          {title === "Programming Languages" && (
            <Icon
              icon="tabler:code"
              width={20}
              height={20}
              color="var(--primary-color)"
            />
          )}

          {title === "Frameworks & Libraries" && (
            <Icon
              icon="ph:stack-light"
              width={20}
              height={20}
              color="var(--secondary-color)"
            />
          )}
          <h1 className="font-semibold text-[16px] text-gray-800">{title}</h1>
        </div>
        <div className="flex gap-2 flex-wrap">
          {skill_names.map((name, index) => (
            <div
              key={index}
              className={`px-4 py-1  rounded-[5px] ${
                is_secondary_color
                  ? "border-[var(--secondary-color)] bg-[var(--secondary-color-light)]"
                  : "border-[var(--primary-color)] bg-[var(--primary-color-light)]"
              } w-fit max-w-full flex items-center justify-center`}
            >
              <p
                className={`text-[12px] ${
                  is_secondary_color ? "text-[var(--secondary-color)]" : "text-[var(--primary-color)]"
                }`}
              >
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill_Pill;
