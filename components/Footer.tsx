import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb Works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>Chi Igbokwe</p>
            <p>Presents</p>
            <p>Created By Chi</p>
            <p>Community of Creatives</p>
            <p>Join Now</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>Pretty Awesome, right?</p>
            <p>Would you like to learn?</p>
            <p>Contact Me</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Centre</p>
            <p>Trust & Safety</p>
            <p>IT Issues</p>
            <p>Help Desk</p>
            <p>Support</p>
        </div>
    </div>
    
  )
}

export default Footer