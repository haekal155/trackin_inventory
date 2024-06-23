import React from 'react'
import { useNavigate } from 'react-router-dom'
import UserList from '../components/UserList'

const Laporan = () => {
    const navigate = useNavigate()

  return (
    <div className='w-full h-screen flex items-start'>
        <div className='relative fixed w-[250px] h-full flex flex-col bg-gradient-to-b from-second-color via-fourth-color to-second-color'>
            <div className='w-20 absolute top-[10%] left-[35%] flex flex-col'>
                <img src="public/trackinlogo.png" onClick={() => navigate('/')} className='cursor-pointer'/>
                <h1 className='flex flex-col justify-center items-center'>TrackIn</h1>
            </div>

            <ul className='w-20 gap-5 absolute bottom-[40%] left-[35%] flex flex-col'>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color w-32 hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/beranda')}>Beranda</li>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color w-32 hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/stokbarang')}>Stok</li>
                <li className='flex justify-center cursor-pointer transition duration-200 bg-primary-color w-32 text-white rounded-lg transform scale-110' onClick={() => navigate('/laporan')}>Laporan</li>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color w-32 hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/pengaturan')}>Pengaturan</li>
            </ul>
            
            <div className='gap-5 absolute bottom-[10%] left-[12%] flex justify-center'>
                <button className='w-48 py-2 bg-primary-color text-white rounded-md cursor-pointer hover:bg-black'>Logout</button>
            </div>
        </div>

        <div className='items-center bg-white p-9'>
            <h1 className='text-4xl font-semibold mb-2'>Laporan</h1>

            <div className="bg-green-200 p-4 rounded-lg shadow-md mt-3">
                <h2 className="text-xl font-semibold mb-2">Penjualan Terbanyak</h2>
                <div className='bg-white p-4 rounded-xl shadow-md flex items-center mt-6'>
                        <div className='flex items-center justify-between'>
                            <div className='bg-second-color flex justify-center rounded-xl size-14'>
                                <img src="public/royalcanin.png" className='flex justify-center items-center size-10 mt-2'/>
                            </div>
                            <h1 className='ml-5'>Royal Canin</h1>
                            <div className='ml-80'>
                                <p className='font-bold'>Rp 200.000</p>
                            </div>
                        </div>
                </div>

                <div className='flex flex-col'>
                    <div className='bg-white p-4 rounded-xl shadow-md flex items-center mt-6'>
                        <div className='flex items-center justify-between'>
                            <div className='bg-second-color flex justify-center rounded-xl size-14'>
                                <img src="public/royalcanin.png" className='flex justify-center items-center size-10 mt-2'/>
                            </div>
                            <h1 className='ml-5'>Royal Canin</h1>
                            <div className='ml-80'>
                                <p className='font-bold'>Rp 200.000</p>
                            </div>
                        </div>
                    </div>
                </div>    
                
        </div>

            <UserList />
        </div>

        <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-6 size-1/1 mr-6 mt-[8%]">
                <span className="text-primary-color material-icons bg-white rounded-md size-10 flex items-center justify-center">monetization_on</span>
                <h2 className="text-xl font-semibold mb-2 pt-5">Rp 10.000.000</h2>
                <p className="list-disc list-inside">Total Pendapatan Bulan ini</p>
        </div>
    </div>
  )
}

export default Laporan
