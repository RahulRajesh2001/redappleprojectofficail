import React from 'react'
import backgroundImage from '../assets/pageEightbgimg.png'
import blackshade from '../assets/blackshade.png'
import pageEightfooter from '../assets/PageEightfooter.png'
import vsmbgEightfooter from '../assets/vsmbackgroundimage.png'
import image from '../assets/image.png'
import truck from '../assets/truck.png'
import money from '../assets/money.png'

const PageEight = () => {
  return (
    <div
      className=' relative flex  justify-center items-center bg-cover w-[100%] sm:h-screen vvsm:h-[800px]  '
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className='absolute z-10 bg-cover w-[100%] sm:h-screen vvsm:h-[800px]'
        style={{ backgroundImage: `url(${blackshade})`, opacity: 0.5 }}
      ></div>

      <div className=' absolute z-20 font-Forum text-[#ffff]   md:text-[45px] sm:mb-0 ssm:text-[35px] vvsm:text-[32px] md:mb-[25px]  sm:-mt-[70px] vsm:mb-0 vsm:-mt-[270px] vvsm:mb-[300px]'>
        Together, let’s create the{' '}
      </div>
      <div className=' absolute z-20 font-Forum text-[#ffff]   md:text-[45px] sm:mb-0 ssm:text-[35px] vvsm:text-[32px] vsm:mb-[190px] vvsm:mb-[230px] '>
        next generation{' '}
      </div>
      <div className=' absolute z-20 font-Forum text-[#ffff]   md:text-[45px] sm:mb-0 ssm:text-[35px] vvsm:text-[32px] md:mt-[110px] sm:mt-[90px] vsm:mb-[100px]  vvsm:mb-[150px]'>
        of textile network
      </div>

      {/* footer part */}

      <div className=' bg-red-10 absolute z-20 bottom-0 w-[100%] h-[170px] sm:mb-0 vvsm:mb-[210px] '>
        <img
          src={pageEightfooter}
          alt=''
          className='absolute z-30 bottom-0 right-0 w-[90%] h-[170px] sm:block  vvsm:hidden '
        />

        <img
          src={vsmbgEightfooter}
          alt=''
          className=' sm:hidden vvsm:w-[700px]   vvsm:h-[380px]'
        />
        <div className=' flex sm:flex-row justify-evenly items-center absolute   z-30  sm:w-[85%] sm:h-[80%] sm:mr-0   ssm:top-0 ssm:right-0    vvsm:flex-col vvsm:w-[90%] vvsm:h-[360px] vvsm:top-0 vvsm:right-0  vvsm:mt-[30px] vsm:mr-[20px] vvsm:mr-[15px]'>
          {/* fotter division one */}
          <div className=' flex flex-col justify-center  lg:w-[200px] md:w-[160px]  sm:w-[160px]  sm:border-b-0  ssm:w-[70%]  ssm:border-b-2 vvsm:w-[70%] vvsm:h-[100px] vvsm:border-b-2 '>
            <div className=' font-Lora font-normal text-[#ffff]  lg:text-[35px] vvsm:text-[25px]'>
              Benifits
            </div>
            <div className='fontAdd text-[#ffff]  lg:text-[16px] sm:text-[14px] vvsm:text-[13px]'>
              Get your reselling hassle free from no where
            </div>
          </div>

          <div className=' h-[50px]  border-r-[1px] vvsm:hidden sm:block'></div>

          {/* footer division two */}

          <div className='  lg:w-[200px]   md:w-[140px]  sm:w-[160px]  sm:border-b-0   vvsm:w-[70%] vvsm:h-[100px] vvsm:border-b-2'>
            <div className='flex flex-col justify-center items-center '>
              <img
                src={money}
                alt=''
                className=' md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] vvsm:w-[35px] vvsm:h-[35px]'
              />
              <p className='font-Lora font-normal text-[#ffff]  sm:text-[16px] ssm:text-[15px] ssm:mt-[10px] vvsm:text-[18px] vvsm:mt-[5px]'>
                No Capital Needed
              </p>
            </div>
          </div>

          <div className=' h-[50px]  border-r-[1px] vvsm:hidden sm:block'></div>
          {/* footer division three */}

          <div className='  lg:w-[250px]  sm:w-[160px] sm:h-[100px]  vvsm:w-[70%] vvvsm:h-[130px]'>
            <div className='flex flex-col justify-center items-center'>
              <img
                src={truck}
                alt=''
                className=' vvsm:w-[40px] vvsm:h-[40px]'
              />
              <p className='font-Lora font-normal text-[#ffff] lg:text-[20px] vvsm:text-[17px]'>
                Drop shipping facility
              </p>
              <p className=' fontAdd text-[#ffff]  vvsm:text-[13px] '>
                All popular on our all outlets.
              </p>
            </div>
          </div>

          <div className=' h-[50px]  border-r-[1px] vvsm:hidden sm:block'></div>

          {/* footer division four */}
          <div className=' lg:w-[200px]  md:w-[130px]  sm:w-[100px] sm:h-[100px] sm:block hidden '>
            <div className='flex flex-col  justify-center items-center  '>
              <img src={image} alt='' className='sm:w-[40px] sm:h-[40px]' />
              <p className='font-Lora font-normal text-[#ffff]  sm:text-[16px] sm:mt-[15px] '>
                Use our Image
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageEight
