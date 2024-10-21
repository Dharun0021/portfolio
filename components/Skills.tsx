import { AnimatedTooltipPreview } from "./SkillsCom";


export const Skills = () => {
  return (
    <section className='py-20 w-full' id='skill'>
      <h1 className='heading text-white'>
        <span className='text-violet-500' style={{ fontFamily: 'Poppins, sans-serif' }}>My Skills</span>
      </h1>
      <p className="text-slate-500 text-justify p-4 " style={{ fontFamily: 'Poppins, sans-serif' }}>I am dedicated to developing dynamic web applications that prioritize user experience and responsive design. My expertise lies in creating intuitive interfaces and managing version control effectively. Leveraging modern technologies, I build robust applications that deliver exceptional performance and engage users effectively.</p>

      <div className="mt-4">
      <AnimatedTooltipPreview/>
      </div>
      
    </section>
  )
}
export default Skills;