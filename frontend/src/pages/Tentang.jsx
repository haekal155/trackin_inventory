import React from 'react'
import { Carousel } from "flowbite-react"
import { Element } from 'react-scroll'

const Tentang = () => {
  return (
    <Element name='tentang'>
      <div className='bg-white mb-28'>
          <h1 className='text-2xl pt-8 font-semibold flex justify-center'>TrackIn</h1>
          <p className='text-base pt-1 flex justify-center mb-8'>Website yang menyediakan jasa untuk memanejemen produk anda agar lebih mudah dan teratur.</p>

          <div className="pt-14 relative flex items-center w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
            
              {/* Item pertama */}
              <div className="bg-fifth-color p-4 rounded-lg shadow-md mr-6 ml-6">
                <h2 className="text-xl font-semibold mb-2 flex gap-2"><span className="material-icons">inventory_2</span>Manajemen Stok</h2>
                <p className="list-disc list-inside text-gray-600 mt-6">Kemampuan untuk menambahkan, menghapus,</p>
                <p className="list-disc list-inside text-gray-600">dan memperbarui informasi produk dengan mudah</p>
              </div>

              {/* Item kedua */}
              <div className="bg-fifth-color p-4 rounded-lg shadow-md mr-6">
                <h2 className="text-xl font-semibold mb-2 flex gap-2"><span className="material-icons">find_in_page</span>Pelacakan Penjualan</h2>
                <p className="list-disc list-inside text-gray-600 mt-6">Memantau penjualan harian, mingguan, dan</p>
                <p className="list-disc list-inside text-gray-600">bulanan untuk setiap produk.</p>
              </div>

              {/* Item ketiga */}
              <div className="bg-fifth-color p-4 rounded-lg shadow-md mr-6">
                <h2 className="text-xl font-semibold mb-2 flex gap-2"><span className="material-icons">report_problem</span>Peringatan Stok Rendah</h2>
                <p className="list-disc list-inside text-gray-600 mt-6">Sistem akan memberikan notifikasi saat stok</p>
                <p className="list-disc list-inside text-gray-600">produk mencapai batas minimum.</p>
              </div>

              {/* Item keempat */}
              <div className="bg-fifth-color p-4 rounded-lg shadow-md mr-6">
                <h2 className="text-xl font-semibold mb-2 flex gap-2"><span className="material-icons">description</span>Laporan Inventaris</h2>
                <p className="list-disc list-inside text-gray-600 mt-6">Pengguna dapat mengunduh berbagai jenis</p>
                <p className="list-disc list-inside text-gray-600">laporan untuk analisis lebih lanjut.</p>
              </div>

              {/* Item kelima */}
              <div className="bg-fifth-color p-4 rounded-lg shadow-md mr-6">
                <h2 className="text-xl font-semibold mb-2 flex gap-2"><span className="material-icons">point_of_sale</span>Integrasi Point-of-Sale</h2>
                <p className="list-disc list-inside text-gray-600 mt-6">Dapat terhubung dengan sistem POS yang</p>
                <p className="list-disc list-inside text-gray-600">ada di sistem kami.</p>
              </div>
        </div> 
        </div>
    </Element>
  )
}

export default Tentang
