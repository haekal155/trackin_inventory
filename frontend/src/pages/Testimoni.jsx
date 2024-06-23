import React from 'react'
import { Element } from 'react-scroll'

const Testimoni = () => {
  return (
    <Element name='testimoni'>
      <div className='bg-white mb-14'>
        <h1 className='text-2xl pt-8 font-semibold flex justify-center'>Testimoni Pelanggan</h1>
        <p className='text-base pt-1 flex justify-center'>"Jangan hanya percaya pada kata-kata kami, lihat apa yang pelanggan kami katakan!</p>
        <p className='text-base pt-1 flex justify-center'>Temukan testimoni dari pemilik toko yang telah menggunakan TrackIn Web Inventory</p>
        <p className='text-base pt-1 flex justify-center mb-8'>dan rasakan perbedaannya dalam manajemen inventaris mereka."</p>

        <div className="flex justify-center md:grid-cols-2 lg:grid-cols-3 gap-20 mx-auto max-w-5xl">
          <div className="flex flex-col justify-center items-center bg-fourth-color border-4 border-slate-400 w-6/12 p-4 rounded-lg shadow-md">
            <img className='rounded-lg ' src="public/testimoni1.png" />
            <p className="mb-2 pt-6">“Aplikasi ini sangat membantu! Memudahkan pengelolaan inventaris dan menghemat waktu. Sangat direkomendasikan!”</p>
            <p className="font-semibold pt-12">Erik Lucatero, Pemilik Toko</p>
          </div>
        
          <div className="flex flex-col justify-center items-center bg-fourth-color border-4 border-slate-400 w-6/12 p-4 rounded-lg shadow-md">
            <img className='rounded-lg' src="public/testimoni2.png" />
            <p className="mb-2 pt-6">"Aplikasi sistem inventaris ini luar biasa! Membantu saya mengatur stok barang dengan mudah dan efisien. Sekarang saya dapat fokus pada pertumbuhan bisnis tanpa khawatir tentang persediaan barang. Terima kasih!"</p>
            <p className="font-semibold">Panitan, Pengusaha</p>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Testimoni
