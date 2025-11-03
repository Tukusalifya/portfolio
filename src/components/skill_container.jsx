import { Icon } from "@iconify/react";

const Skill_Container = ({
  title,
  icon_name,
  description = "",
  color = "#219FBD",
}) => {
  return (
    <>
      <div className="w-full md:max-w-[400px] h-full p-8 bg-white rounded-xl shadow-lg ">
        <div className="flex flex-col h-full items-center">
          <div className="mb-6 flex justify-center">
            <Icon icon={icon_name} width={50} height={50} color={color} />
          </div>

          <h1 className="text-[18px] font-bold text-gray-800 text-center mb-4 leading-tight">
            {title}
          </h1>

          <p className="text-[14px] text-gray-600 text-center leading-relaxed flex-1">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Skill_Container;
