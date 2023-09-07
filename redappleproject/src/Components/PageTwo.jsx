import React from 'react'
import redapplepagetwo from "../assets/SecondPageRedapple.png"
import secondPageButton from '../assets/SecondPageButton.png'

const PageTwo = () => {
  return (
    <div className='flex flex-col  items-center lg:w-[100%] lg:h-[700px]
                                                md:w-[100%] md:h-[700px]
                                                 '>
      <div
        className=' flex flex-col  items-center
                      lg:w-[1000px] lg:h-[250px] lg:mt-[30px]
                      md:w-[600px] md:h-[200px]  md:mt-[20px] 
                      sm:w-[500px] sm:h-[250px]
                       vsm:w-[350px] vsm:h-[220px]'
      >
        <p
          className='font-Lora lg:font-normal 
                         lg:text-[40px] 
                         md:text-[45px] 
                         sm:text-[35px]
                         vsm:text-[22px] vsm:mt-[10px]'
        >
          We are here for you
        </p>
        <p
          className='font-Poppins  
                          lg:mt-[10px] lg:text-[16px] 
                          md:text-[17px] md:mt-[10px]
                          sm:text-[16px]
                          vsm:text-[13px] vsm:mt-[5px]'
        >
          We are one of the unique apparel industries in India where trend is
          handy to all. Explore our daily arrivals to view the modish designer
          clothing, footwear and accessories in the market. Red Apple Apparels
          essentially targeted at the domestic and international brands, we are
          primarily manufacturers of all categories of casual and formal
          apparels.{' '}
        </p>
      </div>
      <div
        className='w-full flex justify-around items-center
                         lg:h-[600px]  lg:mb-6 lg:mt-[1px]   
                         md:h-[500px]  md:mt-[30px] 
                         sm:flex-row  
                        vsm:flex-col  vsm:h-[500px]                    '
      >
        <div
          className='   lg:w-[350px] lg:h-[400px]   lg:mt-[15px] ml-[60px] 
                           md:w-[300px] md:h-[350px]
                           sm:w-[250px] sm:h-[300px]
                           vsm:w-[250px] vsm:mt-[1px] vsm:mr-20 
                           '
        >
          <img src={redapplepagetwo} alt='' />
        </div>
        <div
          className='         flex flex-col justify-center
                              lg:w-[600px] lg:h-[450px]
                               md:w-[400px]  md:h-[400px] 
                              sm:w-[300px] sm:h-[350px]
                              vsm:w-[350px] vsm:h-[170px]
                              '
        >
          <h1
            className='   font-Lora font-normal 
                            lg:text-[90px] lg:w-[400px]
                            md:text-[76px] md:w-[350px] 
                            sm:text-[55px]
                            vsm:text-[35px] vsm:px-4
                            '
          >
            About Us
          </h1>
          <p
            className=' font-Poppins font-400
                            lg:text-[16px]
                            md:text-[17px]
                            sm:text-[15px]
                            vsm:mt-[5px]  vsm:px-4 vsm:text-[13px] 
            '
          >
            Our products come with the highest quality standards, which is the
            most important aspects all our customer expect from us. Our creative
            designs and to multinational conglomerates. We have creativity and
            technology that will help you attain your desired results.
          </p>

          <div>
            <img
              src={secondPageButton}
              alt=''
              className='lg:w-[250px] lg:mt-[60px]
                            md:w-[180px] md:mt-[40px] md:ml-[10px]
                            sm:w-[150px] sm:mt-[30px] sm:ml-[20px]
                            hidden sm:block
                           '
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTwo
