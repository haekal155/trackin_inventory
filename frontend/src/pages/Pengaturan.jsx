import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Fragment, useState } from 'react'
import TambahTestimoni from '../components/TambahTestimoni'
import Swal from 'sweetalert2'

const Pengaturan = () => {
    const [showTambahTestimoni, setShowTambahTestimoni] = useState(false)
    const navigate = useNavigate()
    const showAlert = () => {
        Swal.fire({
            title: "Yakin ingin menambahkan?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya",
            cancelButtonText: "Tidak"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Berhasil!",
                icon: "success"
              });
            }
          });
    }

  return (
    <Fragment>
    <div className='w-full h-screen flex items-start'>
        <div className='relative w-[265px] h-full flex flex-col bg-gradient-to-b from-second-color via-fourth-color to-second-color'>
            <div className='w-20 absolute top-[10%] left-[35%] flex flex-col'>
                <img src="public/trackinlogo.png" onClick={() => navigate('/')} className='cursor-pointer' />
                <h1 className='flex flex-col justify-center items-center'>TrackIn</h1>
            </div>

            <ul className='w-20 gap-5 absolute bottom-[40%] left-[35%] flex flex-col'>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color w-32 hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/beranda')}>Beranda</li>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color w-32 hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/stokbarang')}>Stok</li>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color w-32 hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/laporan')}>Laporan</li>
                <li className='flex justify-center cursor-pointer transition duration-200 bg-primary-color w-32 text-white rounded-lg transform scale-110' onClick={() => navigate('/pengaturan')}>Pengaturan</li>
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

        <div className='sticky w-80 h-full bg-white items-center p-10'>
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

            <button className='w-60 py-2 bg-primary-color text-white rounded-md cursor-pointer hover:bg-black mt-52' onClick={() => setShowTambahTestimoni(true)}>Testimoni</button>
        </div>
        
    </div>
    <TambahTestimoni isvisible={showTambahTestimoni} onClose={() => setShowTambahTestimoni(false)}>
            <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-5'>Tambah Testimoni</h3>
                <form className="space-y-6" action='#'>
                    <div>
                        <label htmlFor="text" className='block mb-2 text-sm font-medium text-gray-900'>Nama</label>
                        <input type="text" name='namatestimoni' id='namatestimoni' className='mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Masukkan Nama' required/>

                        <label htmlFor="text" className='block mb-2 text-sm font-medium text-gray-900'>Pekerjaan</label>
                        <input type="text" name='texttestimoni' id='texttestimoni' className='mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Masukkan Pekerjaan' required/>

                        <label htmlFor="file" className='block mb-2 text-sm font-medium text-gray-900'>Upload Foto</label>

                        <input type="file" id='filefotokasir' className='text-gray-500' />

                        <div className='mt-2 flex justify-center'>
                            <textarea name="testimoni" id="testimoni" placeholder='Masukkan Testimoni' className='mt-2 w-96 size-56'></textarea>
                        </div>

                        <div className='flex'>
                            <button onClick={showAlert} className=' bg-primary-color p-4 text-fourth-color flex gap-2 items-center rounded-md size-3 w-[120px] mt-5 hover:bg-black'><ion-icon name="save-outline"></ion-icon>Simpan</button>
                            <button className='ml-3 bg-red-500 p-4 text-fourth-color flex gap-2 items-center rounded-md size-3 w-[120px] mt-5 hover:bg-black'><ion-icon name="close-outline"></ion-icon>Batal</button>
                        </div>
                    </div>
                </form>  
            </div>
            
        </TambahTestimoni>
    </Fragment>
  )
}

export default Pengaturan
