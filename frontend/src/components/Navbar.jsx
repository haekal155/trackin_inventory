import React from 'react'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className='w-full bg-white'>
      <ul className='pt-6 md:flex space-x-10 hidden text-[15px] flex-col md:flex-row justify-around items-center'>
      <a href="" className='text-1xl flex items-center space'><img src="public/trackinlogo.png" className='w-10 inline-block items-center' />TrackIn</a>
      <div className='flex justify-center items-center gap-12 cursor-pointer'>
        <Link to="beranda" smooth={true} duration={500}>
          <li className='border-transparent transition duration-200 py-5 hover:text-primary-color'>Beranda</li>
        </Link>
        <Link to="tentang" smooth={true} duration={500}>
          <li className='border-transparent transition duration-200 py-5 hover:text-primary-color'>Tentang</li>
        </Link>
        <Link to="mitra" smooth={true} duration={500}>
          <li className='border-transparent transition duration-200 py-5 hover:text-primary-color'>Mitra</li>
        </Link>
        <Link to="testimoni" smooth={true} duration={500}>
          <li className='border-transparent transition duration-200 py-5 hover:text-primary-color'>Testimoni</li>
        </Link>
        <Link to="kontak" smooth={true} duration={500}>
          <li className='border-transparent transition duration-200 py-5 hover:text-primary-color'>Kontak</li>
        </Link>
          
        </div>
        <button onClick={() => navigate('/register')} className='px-7 py-2 bg-primary-color text-white rounded hover:bg-black transition-all duration-300'>Register</button>
      </ul>
    </div>
  )
}

export default Navbar