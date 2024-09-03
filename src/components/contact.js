import React from 'react'

export default function ContactPage() {
    return (
    <div className='flex flex-col items-center px-8'>
        <div className='bg-gray-100 m-8 p-8 rounded-xl max-w-3xl w-full'>
            <h1 className='text-lg font-semibold mb-4'>Get in Touch</h1>
            <form>
                <div className='flex flex-col space-y-4'>
                    <input className='border rounded p-2' type='text' id='name' name='name' placeholder='Name' />
                    <input className='border rounded p-2' type='text' id='email' name='email' placeholder='Email address' />
                    <input className='border rounded p-2 pb-20' type='text' id='inquiry' name='inquiry'  placeholder='What can we help with?' />
                    <input className='bg-gray-200 font-semibold rounded py-2 px-4 self-center' type='submit'></input>
                </div>
            </form>
        </div>
        
        <div className='flex flex-wrap text-center justify-center'>
            <b className='font-semibold w-full mb-2'>Contact Details</b>
            <text className='w-1/2 text-end pr-2 md:w-auto'>+1 123 456 789</text> 
            <text className='w-1/2 text-start pl-2 md:w-auto'>brain@gmail.com</text>
            <b className='font-semibold w-full md:w-auto mt-2 md:mt-0 md:ml-4'>brAIn HQ</b>
            <text className='w-full md:w-auto mx-2'>123 Brain Ave</text>
            <text className=''>Brainland</text>
        </div>
    </div>
    )
}