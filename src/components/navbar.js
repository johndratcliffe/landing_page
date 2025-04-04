import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BrainLogo from './brain-logo'

const Navbar = () => {
    const [dropdown, dropdownToggle] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const toggleDropdown = () => {
        dropdownToggle(!dropdown)
    }

    const isActive = (path) => {
        return location.pathname === path
    }

    const handleNavigation = (path) => {
        navigate(path)
        dropdownToggle(false)
    }

    return (
        <nav className='p-4 z-20 sticky top-0 flex flex-wrap justify-between bg-white w-full border-b border-gray-200'>
            <button onClick={() => handleNavigation('/')} className='flex items-center space-x-3'>
                <BrainLogo />
                <span className='self-center text-2xl font-semibold'>brAIn</span>
            </button>
            <div className='flex space-x-3 md:order-2'>
                <button onClick={() => handleNavigation('/services')} type='button' className='bg-blue-700 text-white hover:bg-blue-800 font-medium rounded-lg text-sm px-4 my-1.5'>Get started</button>
                <button onClick={toggleDropdown} className='p-2 w-10 h-11 md:hidden' type='button' aria-controls='navbar-dropdown' aria-expanded={dropdown}>
                    <svg aria-hidden='true' className='w-5 h-5' viewBox='0 0 17 12'>
                        <path d='M 1 1 H 15 M 1 7 H 15 M 1 13 H 15' stroke='black' strokeWidth='2' strokeLinecap='round'/>
                    </svg>
                </button>
            </div>
            <div id='navbar-dropdown' className={`w-full items-center md:flex md:w-auto md:order-1 ${dropdown ? 'block' : 'hidden'} md:block`}>
                <ul className='flex flex-col mt-4 bg-gray-50 rounded-lg p-4 font-medium border border-gray-100 md:p-0 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white'>
                <li>
                        <button onClick={() => handleNavigation('/')} className={`md:hover:bg-transparent md:p-0 md:hover:text-blue-700 block w-full text-left py-2 px-3 rounded ${isActive('/') ? 'bg-blue-700 text-white md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100'}`}>
                            Home
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleNavigation('/about')} className={`md:hover:bg-transparent md:p-0 md:hover:text-blue-700 block w-full text-left py-2 px-3 rounded ${isActive('/about') ? 'bg-blue-700 text-white md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100'}`}>
                            About
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleNavigation('/services')} className={`md:hover:bg-transparent md:p-0 md:hover:text-blue-700 block w-full text-left py-2 px-3 rounded ${isActive('/services') ? 'bg-blue-700 text-white md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100'}`}>
                            Services
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleNavigation('/contact')} className={`md:hover:bg-transparent md:p-0 md:hover:text-blue-700 block w-full text-left py-2 px-3 rounded ${isActive('/contact') ? 'bg-blue-700 text-white md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100'}`}>
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar