import React from 'react'
import Homepageimage from '../assets/Homepageimage.png'

const HomePage = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Homepageimage})`, 
    backgroundSize: 'cover',
  };
  return (
   
        <div className='  flex relative justify-center items-center lg:w-[100%] lg:h-[750px]
                                                                                md:w-[100%] md:h-[700px]
                                                                                sm:w-[100%] sm:h-[700px]
                                                                                ssm:w-[100%] ssm:h-[700px]
                                                                                vsm:w-[100%] vsm:h-[700px]'>
          <div
          style={backgroundImageStyle}
           className=" absolute z-10 lg:w-[100%] lg:h-[750px]
                                                        md:w-[100%] md:h-[700px]
                                                        sm:w-[100%] sm:h-[700px]
                                                        ssm:w-[100%] ssm:h-[700px]
                                                        vsm:w-[100%] vsm:h-[700px]">
            
          </div>
          <div
            className=' flex flex-col justify-center items-center  absolute z-20   lg:w-[100%] lg:h-[200px]
                                                                                                 md:w-[100%] md:h-[200px] 
                                                                                                 sm:w-[100%] sm:h-[200px]
                                                                                                 ssm:w-[100%] ssm:h-[150px]
                                                                                                 vsm:w-[100%] vsm:h-[150px]  

                                                                                  
             '
          >
            <p className='font-Forum font-normal text-[#ffff]   lg:text-[65px]
                                                                   md:text-[60px] 
                                                                   sm:text-[60px]
                                                                   ssm:text-[35px] 
                                                                   vsm:text-[28px] 
                                                                                                 
           '>Your One-Stop Shop</p>
            <p className='font-Forum font-normal text-[#ffff] lg:text-[65px]
                                                                   md:text-[60px] 
                                                                   sm:text-[60px]
                                                                   ssm:text-[35px] 
                                                                   vsm:text-[28px]'>for Wholesale Fashion</p>
          </div>
        </div>
    
  )
}

export default HomePage
