import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div>
        <div className='w-full h-screen flex relative justify-center items-center'>
          <div className="bg-[url('../public/images/Homepageimage.png')] w-full h-screen absolute z-10"></div>
          <div
            className=' flex flex-col justify-center items-center   absolute z-20   
            vsm:w-[100%] vsm:h-[150px]
            ssm:w-[100%] ssm:h-[150px] 
           sm:w-[100%] sm:h-[150px]
           md:w-[100%] md:h-[200px] 
           lg:w-[100%] lg:h-[250px] '
          >
            <p className='font-serif font-normal text-[#ffff] vsm:text-[28px] ssm:text-[35px] sm:text-[40px] md:text-[65px] lg:text-[65px]'>Your One-Stop Shop</p>
            <p className='font-serif font-normal text-[#ffff] vsm:text-[28px] ssm:text-[35px] sm:text-[40px] md:text-[65px] lg:text-[65px]'>for Wholesale Fashion</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
