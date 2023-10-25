import React from 'react'
import { Link } from 'react-router-dom'


const Left = () => {
    return (
        <div className='relative h-full w-full'>
            <div className='text-left text-yellow-400 font-serif text-lg font-bold'><Link to={'/'}>{'<<'}</Link></div>
            <div className='w-56 h-56 absolute top-[50%] translate-y-[-50%] rounded-full ring-4 ring-yellow-300 overflow-hidden'>
                <img src="/gren.jpg" alt="" className='relative -top-14'/>
            </div>
        </div>
    )
}

export default Left