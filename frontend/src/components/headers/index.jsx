import React from 'react'

import {Link} from 'react-router-dom'

const Header  = ()=> {
    console.log('test1')
    return (
        <section className='p-0 m-0 w-full px-20 content-center font-quick fixed z-50 '>
            <nav className='flex w-full justify-between items-center py-1'>
                <h1 className="text-blue-600 font-bold text-2xl text-white">Logo</h1>
                <ul className='flex [&>li]:px-5 [&>li]:font-semibold items-center'>
                    <li><Link to="/undangan" className='hover:text-red-400 text-thm-blue-font-nav text-white'>Demo</Link></li>
                </ul>
            </nav>
        </section>
    )
}


export default Header

