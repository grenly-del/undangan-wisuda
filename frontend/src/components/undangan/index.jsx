import React from 'react'
import Left from './left'
import Center from './center'
import Right from './right'



const UndanganComp = () => {
    return (
        <div className='w-full bg-red-300 relative font-quick h-[100vh]'>
            <div className='bg-[url("/unklab1.jpg")] relative w-full h-full flex justify-between items-center bg-cover bg-no-repeat bg-center after:w-full after:h-full after:absolute after:bg-black after:bg-opacity-50 after:z-10'>
                <div className='relative z-20 w-full h-full text-white flex justify-between items-center text-center px-20 py-8'>
                    <Left/>
                    <Center />
                    <Right />
                </div>
            </div>
        </div>
    )
}

export default UndanganComp