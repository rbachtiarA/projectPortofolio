import ButtonLink from './buttonLink';

export default function CardProject(project) {
    return (
        <div className="flex flex-col w-full md:min-w-[200px] max-w-[400px] gap-3
         bg-white p-3 rounded-lg shadow-md">
        
            <div className="flex flex-row items-center gap-5 border-b-2 border-orange-300 pb-2">
                <img className="w-[64px] h-[64px] bg-orange-400 rounded-full p-1" src={project.projectData.iconImg} alt="ICON" />
                <h4 className="md:text-lg font-semibold md:font-bold">{project.id+1}. {project.projectData.projectTitle}</h4>
            </div>

            <div className="">
                <p>{project.projectData.desc}</p>
            </div>

            <div className='flex flex-row justify-end'>
                <ButtonLink type={'placeholder'} />  
            </div>

        </div>
    )
}