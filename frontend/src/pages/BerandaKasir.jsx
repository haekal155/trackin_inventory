import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Fragment, useState } from 'react'
import KeranjangKasir from '../components/KeranjangKasir'

const BerandaKasir = () => {
    const [showKeranjangKasir, setShowKeranjangKasir] = useState(false)
    const navigate = useNavigate()

  return (
    <Fragment>
    <div className='w-full h-screen flex items-start'>
        <div className='relative w-[323px] h-full flex flex-col bg-gradient-to-b from-second-color via-fourth-color to-second-color'>
            <div className='w-20 absolute top-[10%] left-[35%] flex flex-col'>
                <img src="public/trackinlogo.png" onClick={() => navigate('/')} className='cursor-pointer' />
                <h1 className='flex flex-col justify-center items-center'>TrackIn</h1>
            </div>

            <ul className='w-20 gap-5 absolute bottom-[40%] left-[35%] flex flex-col'>
                <li className='flex justify-center cursor-pointer transition duration-200 bg-primary-color w-32 text-white rounded-lg transform scale-110' onClick={() => navigate('/berandakasir')}>Beranda</li>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color w-32 hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/stokbarangkasir')}>Stok</li>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color w-32 hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/pengaturankasir')}>Pengaturan</li>
            </ul>
            
            <div className='gap-5 absolute bottom-[10%] left-[12%] flex justify-center'>
                <button className='w-48 py-2 bg-primary-color text-white rounded-md cursor-pointer hover:bg-black'>Logout</button>
            </div>
        </div>

        <div className=' bg-white p-10'>
            <div className='flex justify-between mb-5'>
                <h1 className='text-4xl font-semibold mb-2'>Kasir</h1>
    
                <div className="rounded-xl flex items-center justify-end">
                    <button className='text-primary-color text-3xl mr-5' onClick={() => setShowKeranjangKasir(true)}><ion-icon name="cart-outline"></ion-icon></button> 
                    <img src="public/orang.jpg" className='size-10 rounded-xl' />
                    <p className='pl-2 font-semibold'>Yoana</p>
                </div>
            </div>

            <div className='flex flex-wrap'>
                <div className="bg-third-color p-4 rounded-lg shadow-md flex items-center mr-6">
                    <div className='bg-white rounded-lg mr-6 flex justify-center items-center size-[150px]'>
                        <img src="public/royalcanin.png" className='size-[130px]' />
                    </div>
                    
                    <div className="text-xl mb-2">
                        <h3 className='font-semibold'>Royal Canin</h3>
                        <p className='text-base'>Rp 200.000</p>

                        
                        <div className='bg-white mt-2 mb-2 rounded-xl w-20 flex justify-center items-center'> 
                                <button className='text-primary-color'><ion-icon name="add-circle-outline"></ion-icon></button>
                                <p className='mb-1 ml-1 mr-1 text-base'>4</p>
                                <button className='text-red-500'><ion-icon name="remove-circle-outline"></ion-icon></button>
                        </div>
                        
                        <p className='font-semibold text-base'>Berat</p>

                        <div className='flex flex-wrap'>
                            <div className='bg-white text-base rounded-xl w-14 flex justify-center mr-2'>
                                <p>2 Kg</p>
                            </div>
                            <div className='bg-white text-base rounded-xl w-14 flex justify-center mr-2'>
                                <p>1,5 Kg</p>
                            </div>
                            <div className='bg-white text-base rounded-xl w-14 flex justify-center mr-2'>
                                <p>85 G</p>
                            </div>

                        </div>

                        <button className='px-2 mt-3 text-base bg-primary-color text-white rounded-lg hover:bg-black'>Tambah ke keranjang</button>
                    </div>
                    
                </div>

                <div className="bg-third-color p-4 rounded-lg shadow-md flex items-center">
                    <div className='bg-white rounded-lg mr-6 flex justify-center items-center size-[150px]'>
                        <img src="public/royalcanin.png" className='size-[130px]' />
                    </div>
                    
                    <div className="text-xl mb-2">
                        <h3 className='font-semibold'>Royal Canin</h3>
                        <p className='text-base'>Rp 200.000</p>

                        
                        <div className='bg-white mt-2 mb-2 rounded-xl w-20 flex justify-center items-center'> 
                                <button className='text-primary-color'><ion-icon name="add-circle-outline"></ion-icon></button>
                                <p className='mb-1 ml-1 mr-1 text-base'>4</p>
                                <button className='text-red-500'><ion-icon name="remove-circle-outline"></ion-icon></button>
                        </div>
                        
                        <p className='font-semibold text-base'>Berat</p>

                        <div className='flex flex-wrap'>
                            <div className='bg-white text-base rounded-xl w-14 flex justify-center mr-2'>
                                <p>2 Kg</p>
                            </div>
                            <div className='bg-white text-base rounded-xl w-14 flex justify-center mr-2'>
                                <p>1,5 Kg</p>
                            </div>
                            <div className='bg-white text-base rounded-xl w-14 flex justify-center mr-2'>
                                <p>85 G</p>
                            </div>

                        </div>

                        <button className='px-2 mt-3 text-base bg-primary-color text-white rounded-lg hover:bg-black'>Tambah ke keranjang</button>
                    </div>
                </div>

                <div className="bg-third-color p-4 rounded-lg shadow-md flex items-center mt-6">
                    <div className='bg-white rounded-lg mr-6 flex justify-center items-center size-[150px]'>
                        <img src="public/royalcanin.png" className='size-[130px]' />
                    </div>
                    
                    <div className="text-xl mb-2">
                        <h3 className='font-semibold'>Royal Canin</h3>
                        <p className='text-base'>Rp 200.000</p>

                        
                        <div className='bg-white mt-2 mb-2 rounded-xl w-20 flex justify-center items-center'> 
                                <button className='text-primary-color'><ion-icon name="add-circle-outline"></ion-icon></button>
                                <p className='mb-1 ml-1 mr-1 text-base'>4</p>
                                <button className='text-red-500'><ion-icon name="remove-circle-outline"></ion-icon></button>
                        </div>
                        
                        <p className='font-semibold text-base'>Berat</p>

                        <div className='flex flex-wrap'>
                            <div className='bg-white text-base rounded-xl w-14 flex justify-center mr-2'>
                                <p>2 Kg</p>
                            </div>
                            <div className='bg-white text-base rounded-xl w-14 flex justify-center mr-2'>
                                <p>1,5 Kg</p>
                            </div>
                            <div className='bg-white text-base rounded-xl w-14 flex justify-center mr-2'>
                                <p>85 G</p>
                            </div>

                        </div>

                        <button className='px-2 mt-3 text-base bg-primary-color text-white rounded-lg hover:bg-black'>Tambah ke keranjang</button>
                    </div>
                </div>
            
            </div>
        </div>

        
        

    </div>

    <KeranjangKasir isvisible={showKeranjangKasir} onClose={() => setShowKeranjangKasir(false)}>
            <div className='p-6'>
                <h3 className='text-base text-gray-500 mb-5'>Keranjang</h3>
                <div className='flex items-center justify-end'>
                    <img src="public/royalcanin.png" className='size-14 mr-4' />
                    <p className='text-sm'>Royal Canin 2 Kg</p>
                    <div className='ml-64 text-sm text-primary-color'>
                        Rp 200.000
                    </div>
                </div>

                <div className='flex items-center justify-end mt-4'>
                    <img src="public/royalcanin.png" className='size-14 mr-4' />
                    <p className='text-sm'>Royal Canin 2 Kg</p>
                    <div className='ml-64 text-sm text-primary-color'>
                        Rp 200.000
                    </div>
                </div>

                <div className='flex items-center justify-end mt-4'>
                    <img src="public/royalcanin.png" className='size-14 mr-4' />
                    <p className='text-sm'>Royal Canin 2 Kg</p>
                    <div className='ml-64 text-sm text-primary-color'>
                        Rp 200.000
                    </div>
                </div>

                <div className='flex items-center justify-end'>
                    <h3 className='text-base mb-5 mt-7 mr-44'>Total</h3>
                    <p className='ml-64 text-sm'>
                        Rp 600.000
                    </p>
                </div>

                <div className='flex justify-end'>
                    <button className='px-2 mt-3 text-base bg-primary-color text-white rounded-lg hover:bg-black'>Selesai</button>
                </div>
            </div>
            
        </KeranjangKasir>
    </Fragment>
  )
}

export default BerandaKasir
