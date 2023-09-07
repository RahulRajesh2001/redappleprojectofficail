import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div>
        <div className='w-full h-screen flex relative justify-center items-center'>
          <div className="bg-[url('../public/images/Homepageimage.png')] w-full h-screen absolute z-10"></div>
          <div
            className='flex flex-col justify-center items-center   absolute z-20   
            vsm:w-[300px] vsm:h-[150px] 
           sm:w-[500px] sm:h-[150px]
           md:w-[650px] md:h-[200px] 
           lg:w-[700px] lg:h-[250px] '
          >
            <p className='font-serif font-normal text-[#ffff] vsm:text-[32px]  sm:text-[45px] md:text-[65px] lg:text-[65px]'>Your One-Stop Shop</p>
            <p className='font-serif font-normal text-[#ffff] vsm:text-[32px]  sm:text-[45px] md:text-[65px] lg:text-[65px]'>for Wholesale Fashion</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
