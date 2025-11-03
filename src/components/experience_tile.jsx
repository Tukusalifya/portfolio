import { Icon } from '@iconify/react';

const Experience_Tile = ({ position, workplace, date, work_description }) => {
    return (
        <div className="grid grid-rows-1 lg:grid-cols-2 gap-6 mb-8">
            
            <div className="flex gap-4 flex-1">
                <div className="flex items-start flex-col gap-2">
                    <div className="p-2 bg-[var(--secondary-color-light)] rounded-lg border border-[var(--secondary-color-light)]">
                        <Icon icon="codicon:briefcase" width={24} height={24} color='var(--secondary-color)' />
                    </div>
                    <div className="h-full w-px bg-gradient-to-b from-blue-200 to-transparent ml-4"></div>
                </div>
                
                <div className="flex-1">
                    <h1 className="font-semibold text-[17px] text-gray-900 mb-1">{position}</h1>
                    <h2 className="text-[15px] text-gray-700 font-medium mb-1">{workplace}</h2>
                    <h2 className="text-[14px] text-gray-500">{date}</h2>
                </div>
            </div>

            <div className="flex-1">
                <div className='text-gray-600'>
                    <ul className='space-y-3'>
                        {work_description.map((desc, index) => (
                            <li className="flex items-start gap-2" key={index}>
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary-color)] mt-2 flex-shrink-0"></div>
                                <span className="text-[15px] leading-relaxed">{desc}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Experience_Tile;