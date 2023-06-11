"use client"
import Image from 'next/image';
import { BsGithub, BsLinkedin, BsInstagram, BsTelephoneFill } from "react-icons/bs";
import { FaHtml5, FaCss3, FaReact, FaJs} from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import { SiCsharp, SiMongodb, SiReact, SiTailwindcss} from "react-icons/Si"
import React, {useState, useEffect } from 'react';
import { Tooltip } from 'react-tooltip';
import FadeInUp from './components/FadeInUp';
import ProjectTile from './components/ProjectTile';


export default function Home() {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className='bg-gray-950'>

      {/* Section containing everything */}
      <section className="min-h-screen">

        {/* Nav Bar */}
        <nav className="py-7 px-7 md:px-10 md:px-18 flex justify-between bg-slate-900/75">
          <h1 className="text-xl md:text-3xl font-semibold">K<span className='italic'>A</span></h1>
          <ul className="flex items-center">
            <li className="px-3"></li>
            <li className="px-3"><a href="">LinkedIn</a></li>
            <li className="px-3"><a href="">GitHub</a></li>
          </ul>
        </nav>
        
        {/* Content Container */}
        <div className="p-16 lg:p-32">
          {/* Big About Me */}
          <div className="flex lg:flex-row justify-between">
            <div className='lg:w-2/3 text-slate-200'>
              <div className="text-5xl">
                <FadeInUp duration={100}>
                  <h1>Hi! I&apos;m,</h1>
                </FadeInUp>
                <FadeInUp duration={500}>
                  <h1 className="py-2 text-cyan-600">
                    Kean Arguelles
                  </h1>
                </FadeInUp>
              </div>
              <h2 className='mt-2'>
                Computer Science Graduate
              </h2>
              <hr className="my-5 w-32"/>
              <p className='lg:w-5/6 text-center lg:text-left'>
              I am a passionate Computer Science graduate from the University of Calgary, specializing in Security and Software Development. 
              I thrive in a collaborative and deadline-driven environments, consistently providing high-quality work. I am eager to 
              apply my technical proficiency to create a positive impact within a dynamic team, bringing my skill set to drive innovation and solve complex problems.
              

              </p>
            </div>
            <div className='pt-14 lg:py-8 mx-auto lg:w-1/3 lg:mx-0 lg:ml-auto'>
              <Image 
              src="/images/mepic.jpg" 
              alt="Image Description" 
              width={350} 
              height={350} 
              className="m-auto object-cover aspect-square rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border-solid border-2 border-slate-700/50" />
            </div>
          </div>

          {/* Icons */}
          <div className='pt-20 text-4xl flex justify-center gap-14 lg:gap-20'>
            <a href="https://github.com/friedchickean" data-tooltip-id="github" data-tooltip-content="friedchickean">
              <BsGithub />
            </a>
            <a href="https://linkedin.com/in/kean-arguelles" data-tooltip-id="linkedin" data-tooltip-content="Kean Arguelles">
              <BsLinkedin />
            </a>
            <a href="mailto:arguelleskean@gmail.com" data-tooltip-id="mail" data-tooltip-content="arguelleskean@gmail.com">
              <MdEmail />
            </a>
            <a href="tel:+14034378329" data-tooltip-id="phone" data-tooltip-content="+1(403)437-8329">
              <BsTelephoneFill />
            </a>
            <a href="https://instagram.com/friedchic.kean" data-tooltip-id="ig" data-tooltip-content="friedchic.kean">
              <BsInstagram />
            </a>
          </div>
          <Tooltip id="github" place="bottom"/>
          <Tooltip id="linkedin" place="bottom"/>
          <Tooltip id="mail" place="bottom"/>
          <Tooltip id="phone" place="bottom"/>
          <Tooltip id="ig" place="bottom"/>

          <hr className='my-20 w-2/5 ml-auto'></hr>
          
          {/* Education */}
          <div className='pb-10 flex flex-col items-center lg:flex-row lg:items-start'>
            {/* Grad pic */}
            <div className='lg:w-2/5'>
              <FadeInUp duration={300}>
                <Image src="/images/grad.png" alt="Image Description"
                width={350}
                height={600}
                className="m-auto object-cover rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border-solid border-2 border-slate-700/50" />
              </FadeInUp>
            </div>
            {/* Grad right */}
            <div className='lg:w-2/3 lg:text-right lg:pl-20'>
              <FadeInUp duration={100}>
                <h1 className=' text-5xl text-cyan-600 pt-10 lg:pt-0'>Education</h1>
              </FadeInUp>
              <FadeInUp duration={500}>
                <h2>University of Calgary</h2>
              </FadeInUp>
              <FadeInUp duration={500}>
                <h2 className='text-xl lg:text-2xl pb-5 text-cyan-500 pt-5 lg:pt-10'>
                  Bachelor of Science in Computer Science
                </h2>
                <p>
                I am a proud graduate from the University of Calgary, where I pursued Computer Science with a strong focus on Security and Software Development. Throughout my journey, I dedicated myself to academic excellence and embraced my hunger for growth. I have attained an average GPA of 3.37, reflecting my hard-work throughout my time as a student.
                </p>
                <hr className="mt-5 md:mt-10 lg:mt-20 w-32"/>
                {/* mini flex col */}
                <div className='flex pt-5 text-left py-4 lg:pt-16'>
                  {/* awards */}
                  <div className='w-3/5 px-2'>
                    <h3 className='pb-5 text-center text-lg font-semibold'>Awards and Scholarships</h3>
                    <ul>
                      <li>- 3x Jason Liang Scholarship</li>
                      <li>- Alexander Rutherford Scholarship</li>
                      <li>- New Beginnings Grant</li>
                    </ul>
                  </div>
                  {/* clubs */}
                  <div className='w-1/2 px-2'>
                    <h3 className='pb-5 text-center text-lg font-semibold'>Clubs and Interests</h3>
                    <ul>
                      <li>- InfoSec Club Member</li>
                      <li>- Competitive Programming Club Member</li>
                    </ul>
                  </div>
                </div>
              </FadeInUp>
              
            </div>
          </div>
          
          <hr className='my-20 w-2/5'></hr>

          {/* Projects */}
          <div>
            <h1 className=' text-5xl text-cyan-600 pt-10 lg:pt-0'>Projects</h1>
            <hr className="w-32 mt-7 mb-5"/>
            
            <div className='lg:flex lg:gap-8 py-10'>
            <ProjectTile
              image="/images/Chefm8-Logo.png"
              title="ChefM8"
              description="A recipe tutorial application focused on providing the best user experience by following essential UI design principles."
              sourceCodeLink="https://github.com/friedchickean/ChefM8-Recipe-App"
              languageIcons={[<SiCsharp key="csharp" />, <FaHtml5 key="html" />, <FaCss3 key="css" />]}
            />
            <ProjectTile
              image="/images/recenseo.png"
              title="Recenseo"
              description="A full stack course rater website with a beautiful UI and an extensive database design to store user information and hundreds of courses."
              sourceCodeLink="https://github.com/friedchickean/Recenseo"
              languageIcons={[<SiMongodb key="mongodb" />, <SiReact key="react" />, <SiTailwindcss key="tailwind" />, <FaJs key="js"/>]}
            />

            <ProjectTile
              image="/images/cram.png"
              title="Cram Before The Exam"
              description="A top-down 2d adventure game set in a large university map written entirely in Java. Featuring an 8-bit design, smooth animations, and random item generation to provide a fun gameplay experience."
              sourceCodeLink="https://github.com/friedchickean/CRAM-BEFORE-THE-EXAM"
              languageIcons={[<SiMongodb key="mongodb" />, <SiReact key="react" />, <SiTailwindcss key="tailwind" />, <FaJs key="js"/>]}
            />
            </div>
          </div>

        </div>
        

      </section>
    </main>
  )
}
