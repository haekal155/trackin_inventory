import React from 'react'
import { Element } from 'react-scroll'

const Mitra = () => {
  return (
    <Element name='mitra'>
      <div className='pb-20 bg-gradient-to-b from-second-color via-fourth-color to-second-color py-8 p-10'>
        <h1 className='text-2xl pt-6 font-semibold flex justify-center'>Mitra Kami</h1>
        <p className='text-base pt-1 flex justify-center'>Bergabunglah dengan TrackIn untuk menghadirkan solusi terdepan dalam industri ini.</p>
        <p className='text-base pt-1 flex justify-center mb-8'>Bersama kami, memberdayakan pertumbuhan bisnis Anda dengan inovasi yang tak tertandingi.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-5xl">
        <div className="bg-white p-4 rounded-lg shadow-md flex justify-center">
          <img src="public/trackinlogo.png" />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md flex justify-center">
        <img src="public/endeavour.png" />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md flex justify-center">
        <img src="public/vault.png" />
        </div>
        
      </div>
      </div>
    </Element>
  )
}

export default Mitra
