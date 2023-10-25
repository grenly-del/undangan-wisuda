import React from 'react'

const Center = () => {
    return (
        <div className='relative h-full w-full'>
            <div className='flex flex-col items-center'>
                <h1 className='text-xl font-quick text-[23px] font-bold'>UNDANGAN WISUDA</h1>
                <h2 className='text-2xl font-quick text-[25px] font-bold text-yellow-300'>UNIVERSITAS KLABAT</h2>
                <div className='w-72 h-[2px] bg-white'></div>
                <p>angkatan 2023 - 2027</p>
            </div>
            <div className='my-7'>
                <h1 className='text-xl font-semibold'>NAMA</h1>
                <h2 className='text-xl tracking-wider text-yellow-300 font-bold leading-4'>Grantly Antonio Edward Sorongan</h2>
                <h3 className='text-lg'>Fakultas Ilmu Komputer</h3>
            </div>
            <div>
                <h1 className='text-xl font-semibold'>TANGGAL</h1>
                <h3 className='text-xl tracking-wider font-bold leading-6'>20 September 2027 || 13.00 wita</h3>
            </div>
            <div className='my-14'>
                <q className='text-5xl text-sky-400 font-brilo '>Filkom Pasti Bisa</q>
                <p>~Sir Stenly Pungus</p>
            </div>
            <div>
                <button className='bg-white text-black font-bold font-itim text-xl px-5 py-2 ring-2 ring-white rounded-xl hover:bg-transparent hover:text-white transition transition-all'>Download</button>
            </div>
        </div>
    )
}


export default Center