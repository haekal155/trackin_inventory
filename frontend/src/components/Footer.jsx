import React from 'react'
import { Element } from 'react-scroll'

const Footer = () => {
  return (
    <Element name='kontak'>
      <div className='flex flex-col items-center justify-center bg-primary-color h-[300px]'>
        <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between max-w-4xl w-full p-8 mx-auto'>
          <div className='space-y-2 size-48 mb-6'>
            <img src="public/logo.png" />
            <h1 className='flex flex-col font-bold items-center text-3xl text-white'>TrackIn</h1>
          </div>
          <div className='space-y-4'>
              <h4 className='text-2xl font-bold text-white'>Tentang Kami</h4>
              <ul className='space-y-3'>
                  <li className='hover:text-[#000000] text-white'>Perusahaan</li>
                  <li className='hover:text-[#000000] text-white'>Mitra</li>
                  <li className='hover:text-[#000000] text-white'>Testimoni</li>
                  <br />
              </ul>
          </div>
          
          <div className='space-y-4'>
              <h4 className='text-2xl font-bold text-white mt-3'>Hubungi Kami</h4>
              <ul className='space-y-3'>  
                  <li className='hover:text-[#000000] text-white'><ion-icon name="call-outline"></ion-icon> 082498701234</li>
                  <li className='hover:text-[#000000] text-white'><ion-icon name="logo-whatsapp"></ion-icon> 085635890126</li>
                  <li className='hover:text-[#000000] text-white'><ion-icon name="logo-instagram"></ion-icon> track.in</li>
                  <li className='hover:text-[#000000] text-white'><ion-icon name="mail-outline"></ion-icon> trackin@gmail.com</li>
              </ul>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Footer
