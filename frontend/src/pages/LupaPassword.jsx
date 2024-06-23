import React from 'react'
import { useNavigate } from 'react-router-dom'

const LupaPassword = () => {
    const navigate = useNavigate()

  return (
    <div className='w-full h-screen flex items-start'>
        <div className='relative w-1/2 h-full flex flex-col'>
            <div className='absolute top-[50%] left-[20%] flex flex-col'>
                <img src="public/logo.png" />
            </div>
            <img src="public/coverimage.png" />
        </div>

        <div className='w-1/2 items-center h-full bg-white flex flex-col p-20'>

            <div className='w-20 flex flex-col items-center justify-center mb-10'>
                <img src="public/trackinlogo.png" />
                <h3>TrackIn</h3>
            </div>

            <div className='w-full flex flex-col items-center justify-center pb-8'>
                <h3 className='text-3xl font-semibold mb-2 justify-center'>Lupa Password</h3>
                <p className='text-sm'>Masukkan alamat email anda dan kami akan mengirimkan</p>
                <p className='text-sm mb-2'>tautan untuk mengatur ulang kata sandi anda</p>
            </div>

            <div className='w-full flex flex-col'>
                <label htmlFor="Email">Email</label>
                <input type="email" placeholder='Masukkan Email Anda' className='w-full text-black py-2 my-2 bg-transparent border-black outline-none rounded-xl focus:outline-none' />
            </div>

            <div className='flex justify-center pt-10'>
                <button className='w-80 py-2 bg-primary-color text-white rounded-xl hover:bg-black'>Submit</button>
            </div>

            <div className='w-full flex items-center justify-center pt-3'>
                <p onClick={() => navigate('/login')} className='text-sm font-semibold cursor-pointer text-blue-700 underline underline-offset-2'>Kembali ke Login</p>
            </div>
        </div>
    </div>
  )
}

export default LupaPassword
