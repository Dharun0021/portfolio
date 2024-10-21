import React from 'react'
import { Spotlight } from './ui/Spotlight.tsx';
import SparklesPreview from './SparklesPreview';
import MagicButton from './MagicButton';
import { FaRightLeft } from 'react-icons/fa6';
export const Hero = () => {
  return (
   <section id="home"className="pb-20 pt-36">
    <div>
      <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='pink'/>
      <Spotlight className='h-[80vh] w-[50vh] top-10 left-full' fill='purple'/>
      <Spotlight className='h-[80vh] w-[50vh] top-28 left-80' fill='blue'/>
    </div>
    <div className='flex justify-center relative my-20 z-10 '>
      <div className='max-w[89vw] ld:max-w-[60vw] flex flex-col items-center  justify-center'>
      <SparklesPreview/>
      <div className='mt-9'>
        <a href="#contact">
        <MagicButton title={'Connect With Me'} icon={<FaRightLeft/> } position={'right'} otherClass={''}/>
        </a>
      </div>
      </div>
    </div>
   </section>
  )
}
export default Hero;