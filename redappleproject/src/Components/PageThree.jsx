import React from 'react';
import curser from '../assets/cursorPagethree.png'

const PageThree = () => {
  return (
    <div className='   lg:w-[100%] lg:h-[700px] flex 
                       md:w-[100%] md:h-[700px]
    sm:flex-row
    vsm:flex-col
    '>
      <div
        className='  flex justify-center items-center relative z-10  sm:w-[40%] sm:h-[700px] border-t-2 sm:border-r-2 sm:border-b-0 
         vsm:h-[300px] vsm:border-b-2
            '
      >
        <img
          src={curser}
          alt=''
          className='absolute z-20 
            lg:w-[441px] lg:h-[425px]
            md:w-[300px]
            sm:w-[250px]
            vsm:w-[250px]'
        />

        <p
          className='absolute z-20
            font-Forum font-normal 
            lg:text-[45px] lg:w-[400px] lg:h-[200px] lg:ml-20
            md:text-[32px]  md:w-[300px] md:ml-[55px] 
            sm:text-[25px]  sm:w-[220px] sm:ml-[30px]
            vsm:text-[25px] vsm:w-[220px]
               
                        '
        >
          Find a Guide in the World of Style & Modern Trends
        </p>
      </div>

      <div className=' sm:w-[15%]  sm:h-[700px] flex flex-col justify-center items-center  sm:border-t-2 sm:border-r-2 vsm:border-b-2 sm:border-b-0'>

        <div className=' flex justify-center items-center sm:-rotate-90 font-Forum font-normal
        lg:w-[600px] lg:h-[106px]  lg:text-[70px]
        md:w-[500px] md:h-[80px] md:text-[60px] 
        sm:w-[400px] sm:h-[60px] sm:text-[50px] 
         vsm:w-[200px] vsm:h-[65px] vsm:text-[25px]

        '>Services We Offer</div>
        </div>
       

       <div className=' overflow-auto sm:w-[45%] sm:h-[700px] flex flex-col items-center justify-around sm:border-t-2 
                         '>
            <div className=' w-[70%] h-[25%] flex flex-col  justify-center'>
                   <div className='font-normal font-Forum 
                                    lg:text-[30px]  lg:mb-[10px]
                                    md:text-[25px] md:mb-[10px]
                                    sm:text-[20px] sm:mb-[7px]
                                    vsm:text-lg vsm:mb-2 vsm:mt-2
                   '>Classy & Comfy Inners</div>
                   <div className='font-Inter-font md:text-[16px] sm:text-[16px]   vsm:text-[14px]'>Your inner beauty reflects the way you are. Your inner health is as important as your outlook. Never Compromise on it.</div>

            </div>
           <div className=' w-[70%] h-[25%]'>
                   <div className='font-normal font-Forum
                                    lg:text-[30px] lg:mb-[10px]
                                    md:text-[25px] md:mb-[10px]
                                    sm:text-[20px] sm:mb-[7px]
                                    vsm:text-lg vsm:mb-2 vsm:mt-2 '>Brands You Design</div>
                   <div className='font-Inter-font md:text-[16px] sm:text-[16px]   vsm:text-[14px] '>Every top brand available in the market will be yours’ through Red Apple. The trust you rely upon those brands will be held tightly by us.</div>
            </div>
            <div className='w-[70%] h-[25%]'>
                   <div className='font-normal font-Forum 
                                    lg:text-[30px]  lg:mb-[10px]
                                    md:text-[25px] md:mb-[10px] 
                                    sm:text-[20px] sm:mb-[7px]
                                    vsm:text-lg vsm:mb-2 vsm:mt-10
                                    '>Woven with Love</div>
                   <div className='font-Inter-font md:text-[16px] sm:text-[16px]  vsm:text-[14px]'>Enjoy your special days with heartful smiles woven out of love. We are very much alert to reach you premium goods.</div>
            </div> 
            
      </div>  
    </div>
  )
}

export default PageThree
