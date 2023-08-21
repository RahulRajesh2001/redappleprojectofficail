import React from 'react'
import gelei from "../assets/gelei.png"
import iza from "../assets/iza.png"
import msa from "../assets/msa.png"

const PageSix = () => {
  return (
    <div>
       <div className=' flex justify-around items-center lg:w-full lg:h-[100px]
                                                         bg-[#D9D9D9] '>
            <div className='lg:w-[180px] lg:h-[130px] lg:ml-0
                            md:w-[90px]  md:h-[60px] md:ml-0
                            sm:w-[50px]  sm:h-[50px] sm:ml-16
                            
                            
                            flex justify-center items-center '>
                <img src={iza} alt="" className='lg:w-[100px] lg:h-[80px]
                                                                      md:w-[60px]  md:h-[50px]
                                                                      hidden sm:block
                                                                      
                                                                      '/>
            </div>
            <div className='lg:w-[180px] lg:h-[130px]
                            md:w-[90px]  md:h-[60px]
                            sm:w-[70px]  sm:h-[50px]  flex justify-center items-center '>
            <img src={msa} alt="" className='lg:w-[100px] lg:h-[80px]
                                                                      md:w-[60px]  md:h-[50px]
                                                                      hidden sm:block' />
            </div>
            <div className='lg:w-[180px] lg:h-[130px] 
                            md:w-[90px]  md:h-[60px] 
                            sm:w-[70px]  sm:h-[50px] flex justify-center items-center '>
            <img src={gelei} alt="" className='lg:w-[100px] lg:h-[80px]
                                                                      md:w-[60px]  md:h-[50px]
                                                                      vsm:w-[70px] vsm:h-[40px]
                                                                      ' />
            </div>
            <div className='lg:w-[180px] lg:h-[130px] 
                          md:w-[90px]  md:h-[60px]
                          sm:w-[50px]  sm:h-[50px] flex justify-center items-center '>
            <img src={iza} alt=""  className='lg:w-[100px] lg:h-[80px]
                                                                      md:w-[60px]  md:h-[50px]
                                                                      vsm:w-[50px] vsm:h-[40px]
                                                                      ' />
            </div>
            <div className='lg:w-[180px] lg:h-[130px]
                            md:w-[90px]  md:h-[60px]
                            sm:w-[70px]  sm:h-[50px] flex justify-center items-center '>
            <img src={msa} alt=""  className='lg:w-[100px] lg:h-[80px]
                                                                      md:w-[60px]  md:h-[50px]
                                                                      vsm:w-[60px] vsm:h-[40px]
                                                                      
                                                                      ' />
            </div>
            <div className='lg:w-[180px] lg:h-[130px]
                            md:w-[90px]  md:h-[60px] flex justify-center items-center '>
            <img src={gelei} alt=""  className='lg:w-[100px] lg:h-[80px]
                                                                      md:w-[60px]  md:h-[50px]
                                                                      hidden md:block
                                                                      
                                                                      ' />
            </div>
            <div className='lg:w-[180px] lg:h-[130px] 
                             md:w-[90px]  md:h-[60px]     flex justify-center items-center '>
            <img src={iza} alt="" className='lg:w-[100px] lg:h-[80px]
                                                                      md:w-[60px]  md:h-[50px]
                                                                      hidden md:block
                                                                      
                                                                      
                                                                      ' />
            </div>
       </div>
    </div>
  )
}

export default PageSix