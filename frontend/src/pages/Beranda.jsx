import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Fragment, useState } from 'react'
import TambahKasir from '../components/TambahKasir'
import Swal from 'sweetalert2'

const Beranda = () => {
    const [showTambahKasir, setShowTambahKasir] = useState(false)
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
        <div className='relative w-[250px] h-full flex flex-col bg-gradient-to-b from-second-color via-fourth-color to-second-color'>
            <div className='w-20 absolute top-[10%] left-[35%] flex flex-col'>
                <img src="public/trackinlogo.png" onClick={() => navigate('/')} className='cursor-pointer' />
                <h1 className='flex flex-col justify-center items-center'>TrackIn</h1>
            </div>

            <ul className='w-20 gap-5 absolute bottom-[40%] left-[35%] flex flex-col'>
                <li className='flex justify-center cursor-pointer transition duration-200 bg-primary-color w-32 text-white rounded-lg transform scale-110' onClick={() => navigate('/beranda')}>Beranda</li>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color w-32 hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/stokbarang')}>Stok</li>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color w-32 hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/laporan')}>Laporan</li>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color w-32 hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/pengaturan')}>Pengaturan</li>
            </ul>
            
            <div className='gap-5 absolute bottom-[10%] left-[12%] flex justify-center'>
                <button className='w-48 py-2 bg-primary-color text-white rounded-md cursor-pointer hover:bg-black'>Logout</button>
            </div>
        </div>

        <div className='items-center bg-white p-10'>
            <h1 className='text-4xl font-semibold mb-2'>Beranda</h1>
        
        <div className='flex justify-between'>
            <div className="bg-green-200 p-4 rounded-lg shadow-md mb-6 size-1/1 mr-6 mt-5">
                <span className="material-icons  text-primary-color bg-white rounded-md size-10 flex items-center justify-center">shopping_cart</span>
                <h2 className="text-xl font-semibold mb-2 pt-5">10 Item</h2>
                <p className="list-disc list-inside">Total Order Hari ini</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6 size-3/1 mt-5">
                <span className="material-icons text-primary-color bg-white rounded-md size-10 flex items-center justify-center">monetization_on</span>
                <h2 className="text-xl font-semibold mb-2 pt-5">Rp 1.000.000</h2>
                <p className="list-disc list-inside">Total Pendapatan Hari ini</p>
            </div>

        </div>

        <div className="bg-second-color p-4 rounded-lg shadow-md w-[500px]">
                <h2 className="text-xl font-semibold mb-2 text-center">Top Item</h2>
                <div className='flex justify-center'>
                    <div className='bg-white rounded-lg text-center mr-6 w-32'>
                        <div className='bg-white flex justify-center'>
                            <img src="public/royalcanin.png" className='flex justify-center items-center size-24 mt-2' />   
                        </div>
                        <h1 className='font-bold text-sm'>Royal Canin</h1>
                        <p className='text-sm'>Rp 200.000</p>
                    </div>

                    <div className='bg-white rounded-lg text-center mr-6 w-32'>
                        <div className='bg-white flex justify-center'>
                            <img src="public/royalcanin.png" className='flex justify-center items-center size-24 mt-2' />   
                        </div>
                        <h1 className='font-bold text-sm'>Royal Canin</h1>
                        <p className='text-sm'>Rp 200.000</p>
                    </div>

                    <div className='bg-white rounded-lg text-center mr-6 w-32'>
                        <div className='bg-white flex justify-center'>
                            <img src="public/royalcanin.png" className='flex justify-center items-center size-24 mt-2' />   
                        </div>
                        <h1 className='font-bold text-sm'>Royal Canin</h1>
                        <p className='text-sm'>Rp 200.000</p>
                    </div>

                    
                </div>
        </div>
        </div>    
            
        
        <div className='sticky w-80 h-full bg-white items-center p-10'>
            <div className="rounded-xl flex items-center justify-start mt-5 ml-4 mb-5"> 
                <img src="public/orang.jpg" className='size-10 rounded-xl' />
                <div className='flex flex-col items-center'>
                    <p className='pl-2 font-semibold'>Ivan</p>
                    <div className='text-xs ml-2'><p>Admin</p></div>
                </div>
            </div>
            <h1 className='text-4xl font-semibold mb-2'>Daftar Kasir</h1>
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center">
                <img src="public/orang.jpg" className='size-10 rounded-xl' />
                <li className='pl-2 font-semibold cursor-pointer list-none' onClick={() => navigate('/berandakasir')}>Yoana</li>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center mt-5">
                <img src="public/orang.jpg" className='size-10 rounded-xl' />
                <p className='pl-2 font-semibold'>Yuni</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center mt-5">
                <img src="public/orang.jpg" className='size-10 rounded-xl' />
                <p className='pl-2 font-semibold'>Rizky</p>
            </div>
            
            <button className=' bg-primary-color p-4 text-fourth-color flex gap-2 items-center rounded-md size-8 w-44 mt-5 hover:bg-black' onClick={() => setShowTambahKasir(true)}><span className="material-icons">add_box</span>Tambah Kasir</button>
        </div>
    </div>
        <TambahKasir isvisible={showTambahKasir} onClose={() => setShowTambahKasir(false)}>
            <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-5'>Tambah Kasir</h3>
                <form className="space-y-6" action='#'>
                    <div>
                        <label htmlFor="text" className='block mb-2 text-sm font-medium text-gray-900'>Nama Kasir</label>
                        <input type="text" name='namakasir' id='namakasir' className='mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Masukkan Nama Anda' required/>

                        <label htmlFor="text" className='block mb-2 text-sm font-medium text-gray-900'>Email Kasir</label>
                        <input type="email" name='emailkasir' id='emailkasir' className='mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Masukkan Email Anda' required/>

                        <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-900'>Password Kasir</label>
                        <input type="password" name='passwordkasir' id='passwordkasir' className='mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Masukkan Password Anda' required/>

                        <label htmlFor="file" className='block mb-2 text-sm font-medium text-gray-900'>Upload Foto</label>
                        <input type="file" id='filefotokasir' className='text-gray-500' />


                        <div className='flex mt-3'>
                            <button onClick={showAlert} className=' bg-primary-color p-4 text-fourth-color flex gap-2 items-center rounded-md size-3 w-[120px] mt-5 hover:bg-black'><ion-icon name="save-outline"></ion-icon>Simpan</button>
                            <button className='ml-3 bg-red-500 p-4 text-fourth-color flex gap-2 items-center rounded-md size-3 w-[120px] mt-5 hover:bg-black'><ion-icon name="close-outline"></ion-icon>Batal</button>
                        </div>
                    </div>
                </form>  
            </div>
            
        </TambahKasir>
    </Fragment>
  )
}

export default Beranda
