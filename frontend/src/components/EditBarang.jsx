import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditBarang = () => {
    const navigate = useNavigate()
    const [nama_barang, setNama] = useState("")
    const [jumlah_stok, setJumlah] = useState("")
    const [harga_barang, setHarga] = useState("")
    const {id} = useParams()

    const updateUser = async (e) => {
        e.preventDefault()
        try {
            await axios.patch(`http://localhost:5000/users/${id}`, {
                nama_barang,
                jumlah_stok,
                harga_barang
            })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
      }

    useEffect(() => {
        getUserById()
    }, [])

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`)
        setName(response.data.nama_barang)
        setHarga(response.data.harga_barang)
        setJumlah(response.data.jumlah_stok)
    }  

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
    <div className='columns mt-5 flex justify-center text-center'>
      <form onSubmit={updateUser} className="space-y-6">
                    <div>
                        <label htmlFor="text" className='block mb-2 text-sm font-medium text-gray-900'>Nama Barang</label>
                        <input type="text" name='namabarang' id='namabarang' className='mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' value={nama_barang} onChange={(e) => setNama(e.target.value)} placeholder='Masukkan Nama Barang' required/>

                        <label htmlFor="number" className='block mb-2 text-sm font-medium text-gray-900'>Harga Barang</label>
                        <input type="number" name='hargabarang' id='hargabarang' className='mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' value={jumlah_stok} onChange={(e) => setJumlah(e.target.value)} placeholder='Masukkan Harga Barang' required/>

                        <label htmlFor="number" className='block mb-2 text-sm font-medium text-gray-900'>Jumlah Stok</label>
                        <input type="number" name='jumlahstok' id='jumlahstok' className='mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' value={harga_barang} onChange={(e) => setHarga(e.target.value)} placeholder='Masukkan Jumlah Stok' required/>

                        <label htmlFor="file" className='block mb-2 text-sm font-medium text-gray-900'>Upload Foto Barang</label>
                        <input type="file" id='filefotokasir' className='text-gray-500' />


                        <div className='flex mt-3'>
                            <button onClick={showAlert} className=' bg-primary-color p-4 text-fourth-color flex gap-2 items-center rounded-md size-3 w-[120px] mt-5 hover:bg-black'><ion-icon name="save-outline"></ion-icon>Simpan</button>
                            <button className='ml-3 bg-red-500 p-4 text-fourth-color flex gap-2 items-center rounded-md size-3 w-[120px] mt-5 hover:bg-black'><ion-icon name="close-outline"></ion-icon>Batal</button>
                        </div>
                    </div>
                </form> 
    </div>
  )
}

export default EditBarang
