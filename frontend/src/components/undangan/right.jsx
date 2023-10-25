import React from 'react'


const Right = () => {
    return (
        <div className='relative h-full w-full text-right flex flex-col justify-center text-2xl [&>div]:my-2'>
            <div><i class="bi bi-whatsapp"></i></div>
            <div><i class="bi bi-instagram"></i></div>
            <div><i class="bi bi-facebook"></i></div>
            <div><i class="bi bi-envelope"></i></div>
        </div>
    )
}

export default Right