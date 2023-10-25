import React from 'react'
import LeftCompHome from './left'
import RightCompHome from './right'


const BodyComp = () => {
    console.log('test')
    return (
        <main className='bg-[url("unklab1.jpg")] w-full h-[100vh] bg-repeat bg-cover px-20'>
            <div className='w-full h-full absolute top-0 bottom-0 left-0 right-0 z-10 bg-black bg-opacity-60'>
            </div>
            <div className='flex justify-center h-full items-center font-quick [&>div]:w-1/2 gap-40 relative z-30'>
                <LeftCompHome />
                <RightCompHome />
            </div>
        </main>

    )
}


export default BodyComp