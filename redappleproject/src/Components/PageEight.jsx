import React from 'react';
import backgroundImage from '../assets/pageEightbgimg.png';
import blackshade from '../assets/blackshade.png';
import pageEightfooter from '../assets/PageEightfooter.png'
import vsmbgEightfooter from '../assets/vsmbackgroundimage.png'
import image from '../assets/image.png';
import truck from '../assets/truck.png'
import money from '../assets/money.png'


const PageEight = () => {
  return (
    <div>
      <div
        className='relative lg:bg-cover lg:w-full lg:h-[760px]
                                         md:w-full md:h-[700px]
                                        sm:w-full sm:h-[650px] sm:block hideen
                                        vsm:w-full vsm:h-[800px] vsm:bg-cover
                              
                                        '
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >

      
        <div
          className='absolute z-10 lg:w-full lg:h-[760px]
                                      md:w-full md:h-[700px]
                                      vsm:w-full vsm:h-[800px]'
          style={{ backgroundImage: `url(${blackshade})`, opacity: 0.5 }}
        ></div>

        <div className='flex justify-center '>
          <div
            className='flex flex-col justify-center items-center absolute z-50   lg:w-[800px] lg:h-[200px] lg:mt-[200px]
                                                                                     md:w-[700px] md:h-[200px]  md:mt-[150px]
                                                                                     sm:w-[600px] sm:h-[200px] sm:mt-[100px]
                                                                                     vsm:w-[350px] vsm:h-[200px] vsm:mt-[80px]
                                                                                    '
          >
            <div
              className='font-Lora font-normal text-[#ffff] lg:h-[60px] lg:text-[50px]
                                                                  md:h-[50px] md:text-[40px]
                                                                  sm:h-[40px] sm:text-[30px] sm:block
                                                                  vsm:h-[40px] vsm:text-[27px] '
            >
              Together, let’s create the{' '}
            </div>
            <div
              className='font-Lora font-normal text-[#ffff]  lg:h-[60px] lg:text-[50px]
                                                                    md:h-[50px] md:text-[40px]
                                                                    sm:h-[40px] sm:text-[30px]
                                                                    vsm:h-[40px] vsm:text-[27px]'
            >
              next generation{' '}
            </div>
            <div
              className='font-Lora font-normal text-[#ffff] lg:h-[60px] lg:text-[50px]
                                                                   md:h-[50px] md:text-[40px]
                                                                   sm:h-[40px] sm:text-[30px]
                                                                   vsm:h-[40px] vsm:text-[27px]'
            >
              of textile network
            </div>
          </div>
        </div>

        <div
          className='absolute z-20 lg:left-32   lg:bottom-0   lg:right-0
                                      md:left-24   md:bottom-0   md:right-0
                                      sm:left-[120px]   sm:bottom-0   sm:right-0
                                      vsm:left-0    vsm:bottom-0  vsm:right-0'
        >
          <img
            src={pageEightfooter}
            alt=''
            className='lg:w-[1400px]   lg:h-[200px]
                                                                            md:w-[1200px]   md:h-[150px] 
                                                                            sm:w-[650px]    sm:h-[140px] sm:block  hidden

                                                                            '
          />

<img
            src={vsmbgEightfooter}
            alt=''
            className='lg:w-[1400px]   lg:h-[200px]
                                                                            md:w-[1200px]   md:h-[150px] 
                                                                            sm:w-[650px]    sm:h-[140px] sm:hidden block
                                                                            vsm:w-[700px]     vsm:h-[400px]

                                                                            '
          />
          

          <div
            className='flex sm:flex-row justify-evenly items-center absolute   lg:w-[90%] lg:h-full  lg:top-0 lg:right-0 lg:mt-0   z-30
                                                                               md:w-[90%] md:h-full md:top-0 md:right-0 md:mt-0
                                                                                sm:w-[90%] sm:h-full sm:top-0  sm:right-0 sm:mt-0
                                                      vsm:flex-col vsm:w-[100%] vsm:h-[360px] vsm:top-0 vsm:right-0 vsm:mt-[30px]'
          >
            <div
              className='flex flex-col justify-evenly   lg:w-[200px] lg:h-[120px]
                                                            md:w-[160px] md:h-[100px]
                                                           sm:w-[130px] sm:h-[100px]
                                                           vsm:w-[200px] vsm:h-[100px]
                                                          '
            >
              <div
                className='font-Lora font-normal text-[#ffff]  lg:text-[35px]
                                                                          md:text-[25px]
                                                                          sm:text-[23px]
                                                                          vsm:text-[27px]'
              >
                Benifits
              </div>
              <div
                className='font-Poppins font-normal text-[#ffff]  lg:text-[16px] lg:mt-[5px]
                                                                            md:text-[14px] md:mt-[5px]
                                                                            sm:text-[12px] sm:mt-[5px]
                                                                            vsm:text-[14px]'
              >
                Get your reselling hassle free from no where
              </div>
            </div>

            <div
              className=' lg:w-[200px] lg:h-[120px] 
                                          md:w-[140px] md:h-[100px]
                                          sm:w-[130px] sm:h-[100px]
                                          vsm:w-[150px] vsm:h-[100px]'
            >
              <div className='flex flex-col justify-center items-center '>
                <img
                  src={money}
                  alt=''
                  className='lg:w-[50px] lg:h-[50px]
                                  md:w-[50px] md:h-[50px]
                                  sm:w-[40px] sm:h-[40px]
                                  vsm:w-[50px] vsm:h-[50px]'
                />
                <p
                  className='font-Lora font-normal text-[#ffff] lg:text-[16px] lg:mt-[15px]
                                                                        md:text-[15px] md:mt-[10px]
                                                                        sm:text-[16px] sm:mt-[8px]
                                                                        vsm:text-[18px] vsm:mt-[5px]'
                >
                  No Capital Needed
                </p>
              </div>
            </div>

            <div
              className='lg:w-[250px] lg:h-[150px]
                                          md:w-[200px] md:h-[120px]
                                          sm:w-[200px] sm:h-[130px]
                                          vsm:w-[250px] vsm:[130px]'
            >
              <div className='flex flex-col justify-center items-center'>
                <img
                  src={truck}
                  alt=''
                  className='lg:w-[50px] lg:h-[50px] 
                                 md:w-[40px] md:h-[40px]
                                 sm:w-[40px] sm:h-[40px]
                                 vsm:w-[50px] vsm:h-[50px]'
                />
                <p
                  className='font-Lora font-normal text-[#ffff] lg:text-[18px]
                                                                        md:text-[16px]
                                                                        sm:text-[17px]
                                                                        vsm:text-[18px]'
                >
                  Drop shipping facility
                </p>
                <p
                  className='font-Poppins font-normal text-[#ffff] lg:text-[16px] lg:w-[250px] lg:mt-[5px]
                                                                          md:text-[13px] md:w-[200px] md:mt-[5px]
                                                                          sm:text-[13px] sm:w-[200px] sm:mt-[5px]
                                                                          vsm:text-[15px] vsm:w-[200px] vsm:mt-[5px]'
                >
                  All popular fashion designers products are available on our
                  all outlets.
                </p>
              </div>
            </div>
            <div
              className=' lg:w-[200px] lg:h-[120px]
                                          md:w-[130px] md:h-[80px]
                                          sm:w-[100px] sm:h-[60px] sm:block hidden
                                          '
            >
              <div className='flex flex-col  justify-center items-center  '>
                <img
                  src={image}
                  alt=''
                  className='lg:w-[50px] lg:h-[50px]
                                  md:w-[40px] md:h-[40px]
                                  sm:w-[40px] sm:h-[40px]'
                />
                <p
                  className='font-Lora font-normal text-[#ffff] lg:text-[16px] lg:mt-[10px]
                                                                        md:text-[15px] md:mt-[5px]
                                                                        sm:text-[16px] sm:mt-[5px] 
                                                                        '
                >
                  Use our Image
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
   
  )
}

export default PageEight
