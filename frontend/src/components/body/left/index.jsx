import React from 'react'

const Left = () => {
    return (
        <div className='relative w-full h-full flex justify-center flex-col text-left text-white'>
            <div className="content">
            <h1 className='text-2xl text-white font-bold'>Welcome To Undangan Digital</h1>
            <p className='mb-5'>ini adalah website membuat undangan digital, di website ini mempunyai template yang di sediakan, tinggal di terapkan dengan data yang sesuai dengan anda</p>
            <p>
tujuan dibuatnya website ini, pertama hanya untuk membuatlatihan project bagi sang developer, kedua untuk menjadi motivasibagi anak-anak filkom yang lain,ketiga agar ada bahan story untuk media sosial pengguna.</p>
            </div>
            <div className='mt-32'>
                <div className='w-80 h-1 bg-white'></div>
                <div className='flex gap-8 text-2xl'>
                    <div>
                        <i class="bi bi-whatsapp"></i>
                    </div>
                    <div>
                        <i class="bi bi-instagram"></i>
                    </div>
                    <div>
                        <i class="bi bi-facebook"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Left