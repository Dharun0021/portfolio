import React from 'react'
import { PinContainer } from './ui/pin';
import { Projects } from '@/data';
import Image from 'next/image';
export const RecentProject = () => {
  return (
    <section className='py-20 w-full' id='project'>
      <h1 className='heading text-white'>
        <span className='text-violet-500' style={{ fontFamily: 'Poppins, sans-serif' }}>Projects</span>
      </h1>

      <div className='flex flex-wrap items-center justify-center p-4  gap-16 mt-10'>
        {
          Projects.map((items) => (
            <div className='flex items-start justify-center sm:w-96 w-[80vw]'
              key={items.id}>
              <PinContainer
                title="www.github.com"
                href={items.link}
              >
                <div className='flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem]'>
                  <h3 className='max-w-xs !pb-2 !m-0 font-bold text-slate-100' style={{ fontFamily: 'Poppins, sans-serif' }}>{items.title}</h3>
                  <div>
                    <span className='text-slate-500' style={{ fontFamily: 'Poppins, sans-serif' }}>{items.desc}</span>
                  </div>
                  <div className='flex flex-1 w-full rounded-lg mt-4'>
                    <Image
                      className='w-[20rem] h-[10rem]'
                      src={items.img}
                      alt='To-Do List Application'
                      width={200}
                      height={200}
                    />
                  </div>
                </div>

              </PinContainer>
            </div>
          ))
        }
      </div>

    </section>
  )
}
export default RecentProject;