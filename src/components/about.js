import React from 'react'
import man from '../images/man.jpg'
import woman from '../images/women.png'

export default function AboutPage() {
    return (
      <div className='m-8'>
        <h1 className='text-lg font-semibold text-center'>About</h1>
        {/* flex-wrap flex justify-center text-justify */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-justify justify-items'>
          <p className='p-4 pb-0 mx-auto'>
          At brAIn, we believe that <b className='font-medium'>artificial intelligence</b> should be as <b className='font-medium'>unique</b> as the problems it solves.
          Founded on the principle that AI is not a one-size-fits-all solution, we are dedicated to crafting <b className='font-medium'>bespoke AI models</b> tailored to the <b className='font-medium'>specific needs</b> of each of our clients.
          Whether you're a startup looking to <b className='font-medium'>optimize your operations</b> or an established enterprise seeking to <b className='font-medium'>innovate</b>, brAIn provides the <b className='font-medium'>intelligence behind your vision</b>.
          </p>
          <p className='p-4 pb-0 mx-auto md:order-2 xl:order-1'>
          Our team of <b className='font-medium'>expert data scientists</b>, <b className='font-medium'>engineers</b>, and <b className='font-medium'>AI specialists</b> collaborates closely with you to understand your challenges and goals.
          By leveraging <b className='font-medium'>state-of-the-art machine learning techniques</b> and <b className='font-medium'>cutting-edge technologies</b>, we design and develop AI solutions that are not just powerful,
          but perfectly <b className='font-medium'>aligned with your business objectives</b>.
          </p>
          <p className='p-4 pb-0 mx-auto md:order-1 xl:order-2'>
          At brAIn, <b className='font-medium'>innovation</b> is at the core of everything we do. We stay ahead of industry trends and continuously explore new possibilities in AI,
          ensuring that the solutions we deliver are not only effective today but also <b className='font-medium'>future-proof</b>.
          We pride ourselves on our ability to turn <b className='font-medium'>complex data</b> into <b className='font-medium'>actionable insights</b>, empowering our clients to make <b className='font-medium'>smarter, faster decisions</b>.
          </p>
          <p className='p-4 mx-auto md:order-3 xl:order-3'>
          With brAIn, you're not just getting an AI model, you're getting a <b className='font-medium'>partner</b> dedicated to unlocking the full potential of artificial intelligence for your business.
          Let us help you turn your data into a powerful tool that <b className='font-medium'>drives growth, efficiency, and innovation</b>.
          </p>
        </div>
        <h1 className='text-center font-semibold text-lg mt-4'>Meet the Team</h1>
        <div className='flex flex-wrap justify-center'>
          <div className='p-6 flex flex-col items-center'>
            <img src={man} alt='Man Logo' style={{'width':'200px', 'height':'200px'}}/>
            <h1 className='font-semibold text-lg'>Mark</h1>
            <h2>Chief Executive Officer</h2>
          </div>
          <div className='p-6 flex flex-col items-center'>
            <img src={woman} alt='Man Logo' style={{'width':'200px', 'height':'200px'}}/>
            <h1 className='font-semibold text-lg'>Jacqueline</h1>
            <h2>Chief Technology Officer</h2>
          </div>
          <div className='p-6 flex flex-col items-center'>
            <img src={woman} alt='Man Logo' style={{'width':'200px', 'height':'200px'}}/>
            <h1 className='font-semibold text-lg'>Bridget</h1>
            <h2>Head of AI and Machine Learning</h2>
          </div>
          <div className='p-6 flex flex-col items-center'>
            <img src={man} alt='Man Logo' style={{'width':'200px', 'height':'200px'}}/>
            <h1 className='font-semibold text-lg'>Thomas</h1>
            <h2>Chief Data Scientist</h2>
          </div>
          <div className='p-6 flex flex-col items-center'>
            <img src={man} alt='Man Logo' style={{'width':'200px', 'height':'200px'}}/>
            <h1 className='font-semibold text-lg'>Markus</h1>
            <h2>Director of AI Strategy and Innovation</h2>
          </div>
        </div>
      </div>
    )
}