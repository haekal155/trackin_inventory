import React from 'react'
import { useNavigate } from 'react-router-dom'
import UserList from '../components/UserList'

const StokBarangKasir = () => {
    const navigate = useNavigate()

  return (
    <div className='w-full h-screen flex items-start'>
        <div className='relative w-[250px] h-full flex flex-col bg-gradient-to-b from-second-color via-fourth-color to-second-color'>
            <div className='w-20 absolute top-[10%] left-[35%] flex flex-col'>
                <img src="public/trackinlogo.png" onClick={() => navigate('/')} className='cursor-pointer' />
                <h1 className='flex flex-col justify-center items-center'>TrackIn</h1>
            </div>

            <ul className='w-20 gap-5 absolute bottom-[40%] left-[35%] flex flex-col'>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color w-32 hover:text-white rounded-lg transform hover:scale-110'onClick={() => navigate('/berandakasir')}>Beranda</li>
                <li className='flex justify-center cursor-pointer transition duration-200 bg-primary-color w-32 text-white rounded-lg transform scale-110' onClick={() => navigate('/stokbarangkasir')}>Stok</li>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color w-32 hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/pengaturankasir')}>Pengaturan</li>
            </ul>
            
            <div className='gap-5 absolute bottom-[10%] left-[12%] flex justify-center'>
                <button className='w-48 py-2 bg-primary-color text-white rounded-md cursor-pointer hover:bg-black'>Logout</button>
            </div>
        </div>

        <div className='items-center bg-white p-10'>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-semibold mb-2'>Stok Barang</h1>
            </div>

            <div className='flex flex-col'>
                <UserList />
                    <div className='bg-white p-4 rounded-xlflex items-center mt-6'>
                        <div className='flex items-center justify-between'>
                            <h1 className='ml-5 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing</h1>
                            <div className='ml-80'>
                                <p className='font-bold text-white'>lorem ipsum dolor</p>
                            </div>
                        </div>
                    </div>
                </div>  
            
        </div>

        
    </div>
  )
}

export default StokBarangKasir
