import React from 'react'
import CardHoverEffectDemo from './CardHoverEffectDemo';

export const Experience = () => {
  return (
    <section className='py-20 w-full' id='experience'>
      <h1 className='heading text-white'>
        <span className='text-violet-500' style={{ fontFamily: 'Poppins, sans-serif' }}>Experience</span>
      </h1>
      <CardHoverEffectDemo/>
    </section>
  )
}
export default Experience;