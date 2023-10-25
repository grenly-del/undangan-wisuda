import React from 'react'


const Form = () => {
    return (
        <div className='relative flex justify-center'>
                <div className='bg-[#35FF35] w-[110px] h-[110px] rounded-full absolute right-5 -top-10'></div>
                <div className='bg-[#3F95FF] w-[50px] h-[50px] rounded-full absolute right-24 -top-10 z-10'></div>
                <div className="w-96 bg-[#FFF694] flex flex-col justify-center py-10 px-7 [&>form>div]:my-6 [&>form>div>input]:w-full [&>form>div>input]:py-2 [&>form>div>input]:px-2">
                    <h1 className='text-2xl font-bold font-sans text-[#3F95FF]'>Form</h1>
                    <form>
                        <div><input type="text" placeholder='Masukkan Nama'/></div>
                        <div><input type="text" placeholder='Masukkan Jurusan'/></div>
                        <div><input type="text" placeholder='Masukkan Fakultas'/></div>
                        <div>
                            <input type="date" placeholder='Masukkan Angkatan'/>
                            <p className='text-[14px] text-green-500'>masukkan tanggal wisuda anda !!</p>
                        </div>
                        <div className='text-center'><button className='bg-[#35FF35] px-7 py-2 font-bold rounded-full'>KIRIM</button></div>
                    </form>
                </div>
                <div className='bg-[#3F95FF] w-[130px] h-[130px] rounded-full absolute left-5 -bottom-10'></div>
                <div className='bg-[#35FF35] w-[40px] h-[40px] rounded-full absolute left-32 -bottom-7 z-10'></div>
            </div>
    )
}


export default Form