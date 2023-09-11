import React from 'react'
import Homepageimage from '../assets/Homepageimage.png'
import greenround from '../assets/greenround.png'
import arrowandlogo from '../assets/arrowandlogo.png'

const HomePage = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Homepageimage})`,
    backgroundSize: 'cover',
  }
  return (
    <div className='bg-green-100  flex  justify-center items-center w-[100%] h-screen '>
      <div
        style={backgroundImageStyle}
        className='w-[100%] h-screen'
      ></div>
      <div className=' flex flex-col justify-center items-center  absolute z-20   w-[100%] sm:h-[200px] vvsm:h-[150px]'>
        <p className='font-Forum font-normal text-[#ffff]   lg:text-[90px] md:text-[70px] sm:text-[60px] ssm:text-[40px] vvsm:text-[30px]'>
          Your One-Stop Shop
        </p>
        <p className='font-Forum font-normal text-[#ffff]   lg:text-[90px] md:text-[70px] sm:text-[60px] ssm:text-[40px] vvsm:text-[30px]'>
          for Wholesale Fashion
        </p>
      </div>

      {/* Logo */}
      <div className=' flex justify-center items-center absolute -bottom-[75px]  z-30 w-[150px] h-[150px]'>
        <img src={greenround} alt='' className='w-[100px] h-[100px]' />
        <img
          src={arrowandlogo}
          alt=''
          className=' absolute w-[130px] h-[130px]'
        />
      </div>
    </div>
  )
}

export default HomePage
