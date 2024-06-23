import React from 'react'
import { useNavigate } from 'react-router-dom'

const PengaturanKasir = () => {
    const navigate = useNavigate()

  return (
    <div className='w-full h-screen flex items-start'>
        <div className='relative w-[265px] h-full flex flex-col bg-gradient-to-b from-second-color via-fourth-color to-second-color'>
            <div className='w-20 absolute top-[10%] left-[35%] flex flex-col'>
                <img src="public/trackinlogo.png" onClick={() => navigate('/')} className='cursor-pointer' />
                <h1 className='flex flex-col justify-center items-center'>TrackIn</h1>
            </div>

            <ul className='w-20 gap-5 absolute bottom-[40%] left-[35%] flex flex-col'>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color w-32 hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/berandakasir')}>Beranda</li>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color w-32 hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/stokbarangkasir')}>Stok</li>
                <li className='flex justify-center cursor-pointer transition duration-200 bg-primary-color w-32 text-white rounded-lg transform scale-110' onClick={() => navigate('/pengaturankasir')}>Pengaturan</li>
            </ul>
            
            <div className='gap-5 absolute bottom-[10%] left-[12%] flex justify-center'>
                <button className='w-48 py-2 bg-primary-color text-white rounded-md cursor-pointer hover:bg-black'>Logout</button>
            </div>
        </div>

        <div className='items-center bg-white p-10'>
            <h1 className='text-4xl font-semibold mb-2'>Pengaturan</h1>
            <div className='mt-2'>
                <p className='font-bold'>Account Setting</p>
                <p>Setting your account</p>
            </div>
            <div className='mt-1'>
                <p className='font-bold'>Profile Picture</p>
                <img src="public/orang.jpg" className='size-24 rounded-full' />
                <p className='mt-2'>Click <span className='font-bold text-primary-color hover:text-black cursor-pointer'>HERE</span> to change the picture</p>
            </div>
            <div className='mt-2'>
                <p className='font-bold'>Personal Information & Phone Number</p>
                <div className='flex space-x-4'>
                    <label htmlFor="Email" className=''>First Name</label>
                    <input type="email" placeholder='First' className=''  />
                    <label htmlFor="Email">Last Name</label>
                    <input type="email" placeholder='Last' className=''  />
                </div>
                <div className='flex flex-col mt-2'>
                    <label htmlFor="Email">Email Address</label>
                    <input type="email" placeholder='admin@gmail.com' className=''  />
                    <label htmlFor="Email">Phone Number</label>
                    <input type="email" placeholder='08123456789' className=''  />
                </div>
            <div className='mt-6'>
                <button className='w-60 py-2 bg-primary-color text-white rounded-md cursor-pointer hover:bg-black'>Save Changes</button>
            </div>
            </div>
        </div>

        <div className='sticky w-80 h-full items-center p-10'>
            <div>
                <p className='font-bold'>Security</p>
                <p>Change your password</p>
            </div>

            <div className='mt-4'>
                    <label htmlFor="Email" className=''>Current Password</label>
                    <input type="email" placeholder='admin123'  />
            </div>
            <div className='mt-4'>
                    <label htmlFor="Email" className=''>New Password</label>
                    <input type="email" placeholder='123456'  />
            </div>
            <div className='mt-4'>
                    <label htmlFor="Email" className=''>Confirm New Password</label>
                    <input type="email" placeholder='123456'  />
            </div>

            <button className='w-60 py-2 bg-primary-color text-white rounded-md cursor-pointer hover:bg-black mt-6'>Save Changes</button>
        </div>
    </div>
  )
}

export default PengaturanKasir
