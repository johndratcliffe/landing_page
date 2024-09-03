import React from 'react'
import { Link } from 'react-router-dom'
import P5Wrapper from './p5wrapper.js'
import { sketch } from './sketch.js'

import neurNet from '../images/neur-net.jpg'
import data from '../images/data.jpg'
import consulting from '../images/consulting.png'
import bmw from '../images/bmw.jfif'
import allianz from '../images/allianz.png'
import bosch from '../images/bosch.png'
import bayer from '../images/bayer.png'

export default function HomePage() {

  return (
    <div>
      <div className='flex flex-col md:flex-row md:border-b justify-evenly'>
        <div className='flex flex-col items-center space-y-3 mt-8 pb-8 border-b md:border-0'>
          <span className='text-xl font-semibold'>Empowering Businesses with AI</span>
          <span>Cutting-edge AI models for your need</span>
          <button className='bg-blue-700 rounded-lg text-white text-sm px-4 py-2 font-medium hover:bg-blue-800'>
            <Link to='/services'>Learn more</Link>
          </button>
        </div>
        <div className='hidden md:block pt-3.5 relative'>
          <P5Wrapper sketch={sketch}/>
        </div>
      </div>
      <div className='md:flex md:justify-evenly xl:flex-col'>
        <div className='md:order-last xl:order-first text-center mt-8 pb-8 space-y-4 border-b md:border-0 xl:border-b'>
          <span className='text-lg font-semibold'>Our Services</span>
          <div className='flex flex-col items-center xl:flex-row xl:justify-evenly'>
            <div className='mb-4 xl:mb-0'>
              <div className='mb-1 md:mx-8 group perspective w-80 h-52 rounded-3xl overflow-hidden xl:mx-0'>
                <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full transition-transform'>
                  <div className='absolute backface-hidden w-full h-full'>
                    <img src={neurNet} alt='Avatar' style={{'width':'320px', 'height':'208px'}} />
                  </div>
                  <div className='bg-gray-100 absolute my-rotate-y-180 backface-hidden w-full h-full flex justify-center items-center'>
                    <p>
                      • Tailored to your specific business needs <br />
                      • State-of-the-art algorithms and architectures <br />
                      • Scalable and adaptable solutions <br />
                      • Continuous improvement and updates
                    </p>
                  </div>
                </div>
              </div>
              <span className='font-medium mb-4 mt-2'>Custom AI Models</span>
            </div>

            <div className='mb-4 xl:mb-0'>
              <div className='mb-1 group perspective w-80 h-52 rounded-3xl overflow-hidden'>
                <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full transition-transform'>
                  <div className='bg-gray-100 absolute backface-hidden w-full h-full'>
                    <img src={data} alt='Avatar' style={{'width':'320px', 'height':'208px'}} />
                  </div>
                  <div className='bg-gray-100 absolute my-rotate-y-180 backface-hidden w-full h-full flex justify-center items-center'>
                    <p>
                      • Advanced pattern recognition <br />
                      • Predictive analytics and forecasting <br />
                      • Big data processing and insights <br />
                      • Interactive dashboards and visualizations
                    </p>
                  </div>
                </div>
              </div>
              <span className='font-medium mb-4 mt-2'>Data Analysis</span>
            </div>
            
            <div className='mb-4 xl:mb-0'>
              <div className='mb-1 group perspective w-80 h-52 rounded-3xl overflow-hidden'>
                <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full transition-transform'>
                  <div className='absolute backface-hidden w-full h-full'>
                    <img src={consulting} alt='Avatar' style={{'width':'320px', 'height':'208px'}} />
                  </div>
                  <div className='bg-gray-100 absolute my-rotate-y-180 backface-hidden w-full h-full flex justify-center items-center'>
                    <p>
                      • AI strategy development <br />
                      • Implementation roadmap <br />
                      • Technical feasibility studies <br />
                      • AI ethics and governance guidance
                    </p>
                  </div>
                </div>
              </div>
              <span className='font-medium mb-4 mt-2'>Consulting</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center mt-8 md:mx-8 xl:mx-0 xl:px-8 xl:border-b'>
          <span className='font-semibold text-lg text-center'>Why Choose Us?</span>
          <div className='mx-8 items-center xl:items-start text-center mt-6 flex flex-col space-y-4 xl:flex-row xl:mt-4 xl:space-x-8 xl:mt-0 justify-evenly'>
            <div className='max-w-96 flex flex-col items-center border-b xl:border-none pb-4 xl:mt-4'>
              <span className='font-medium'>Expertise</span>
              <span className='text-justify md:px-0'>
                With years of experience in the AI industry, our team of seasoned professionals brings deep technical knowledge and practical expertise to every project. We’ve successfully delivered a wide range of AI solutions across various industries, ensuring that your business benefits from the most advanced and effective AI strategies.
              </span>
              <button type='button' className='mt-2 bg-blue-700 text-white hover:bg-blue-800 font-medium rounded-lg text-sm px-8 py-2'>
                <Link to='/about'>Meet us</Link>
              </button>
            </div>
            
            <div className='max-w-96 flex flex-col items-center border-b xl:border-none pb-4'>
              <span className='font-medium'>Innovation</span>
              <span className='text-justify'>
                At brAIn, we are at the forefront of AI innovation, continuously exploring and implementing cutting-edge technologies. Our commitment to staying ahead of industry trends means that you receive state-of-the-art solutions that not only meet today’s challenges but are also scalable for the future.  
              </span>
            </div>

            <div className='max-w-96 flex flex-col items-center border-b xl:border-none pb-4'>
              <span className='font-medium'>Customisation</span>
              <span className='text-justify'>
                We understand that every business is unique, which is why we specialize in creating tailor-made AI solutions that align perfectly with your specific needs. Whether you require a custom model, data analysis, or integration services, our solutions are designed to address your unique challenges and goals.  
              </span>
              <button type='button' className='mt-2 bg-blue-700 text-white hover:bg-blue-800 font-medium rounded-lg text-sm px-8 py-2'>
                <Link to='/contact'>Contact us</Link>
              </button>
            </div>
            
            <div className='max-w-96 flex flex-col items-center xl:border-none'>
              <span className='font-medium'>Results-Driven</span>
              <span className='text-justify'>
                Our approach is rooted in delivering measurable results that drive real business value. We work closely with you to define clear objectives and KPIs, ensuring that our AI solutions not only meet expectations but exceed them, enhancing efficiency, productivity, and profitability for your business.  
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center space-x-1 mt-8 mb-4'>
        <img src={bmw} alt='Avatar' style={{'width':'50px', 'height':'50px'}} />
        <img src={allianz} alt='Avatar' style={{'width':'128px', 'height':'33px'}} />
        <img src={bosch} alt='Avatar' style={{'width':'128px', 'height':'54px'}} />
        <img src={bayer} alt='Avatar' style={{'width':'50px', 'height':'50px'}} />
      </div>
    </div>
  )
}