import React from 'react'
import './contact.css'

export default function ContactPage() {
    return (
    <div className='contactContainer'>
        <div className='innerContainer'>
            <div>
            <h1>Contact Us</h1>
                <p>
                    Our mailing address is: <br />
                    123 brAIn HQ <br />
                    Phone: 123 456 789 <br />
                    Email: brain@gmail.com <br />
                </p>
            </div>
            <form>
                <div className='form'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" />
                    <label htmlFor="Inquiry">Inquiry:</label>
                    <input type="text" id="inquiry" name="inquiry" />
                </div>
            </form>
        </div>
    </div>
    )
}