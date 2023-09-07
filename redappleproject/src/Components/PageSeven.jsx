import React from 'react'
import backgroundImage from '../assets/PageSevenbgimg2.png'
import gif1 from "../assets/gif1.png"
import glassgif1 from "../assets/glassgif1.png"
import gif2 from "../assets/gif2.png"
import glassgif2 from "../assets/glassgif2.png"
import gif3 from "../assets/gif3.png"
import glassgif3 from "../assets/glassgif3.png"
import gif4 from "../assets/gif4.png"
import glassgif4 from "../assets/glassgif4.png"
import PageSevenButton from '../assets/PageSevenButton.png'

const PageSeven = () => {
  return (
    <div>
      <div
        className=' bg-cover lg:w-full lg:h-[760px]
                              md:w-full md:h-[650px]
                              sm:w-full sm:h-[600px]
                              vsm:w-full vsm:h-[650px]'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className='flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center   lg:w-[900px] lg:h-[150px] lg:mt-[50px]
                                                                     md:w-[700px] md:h-[150px] md:mt-[30px]
                                                                     sm:w-[550px] sm:h-[150px] sm:mt-[30px]
                                                                     vsm:w-[320px] vsm:h-[180px] vsm:mt-[20px]'>
            <div className='font-Lora font- text-[#ffff] lg:text-[60px]
                                                            md:text-[50px]
                                                            sm:text-[40px]
                                                            vsm:text-[30px]'>
              What our Client Says
            </div>
            <div className='font-Poppins font-normal text-[#ffff] lg:text-[16px]
                                                                    md:text-[15px]
                                                                    sm:text-[14px]
                                                                    vsm:text-[13px]'>
              This is the right place if you are in search for the best women
              outfits. Let’s redefine your styling system with our huge store of
              trendy particulars. You can take online at us from the comfort of
              your home and get your favourites delivered right to your doorstep
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='flex justify-evenly items-center   lg:w-[1300px] lg:h-[380px] lg:mt-[40px]
                                                               md:w-[850px] md:h-[300px] md:mt-[30px] 
                                                              sm:w-[640px] sm:h-[300px] sm:mt-[30px]
                                                               vsm:w-[260px] vsm:h-[350px] vsm:mt-[20px]'>
            <div>
              <div className='relative   lg:w-[280px] lg:h-[310px] 
                                         md:w-[200px] md:h-[260px]
                                         sm:w-[200px] sm:h-[250px]
                                         vsm:w-[260px] vsm:h-[300px]'>
                <img
                  src={gif1}
                  alt=''
                  className='absolute z-10  lg:w-[280px] lg:h-[310px]
                                            md:w-[200px] md:h-[260px]
                                            sm:w-[200px] sm:h-[250px]
                                            vsm:w-[260px] vsm:h-[300px] '
                />
                <img
                  src={glassgif1}
                  alt=''
                  className='absolute z-20 bottom-0 lg:w-[280px] lg:h-[110px]
                                                     md:w-[200px] md:h-[100px]
                                                     sm:w-[200px] sm:h-[100px]
                                                     vsm:w-[260px] vsm:h-[110px]'
                />
                <p className=' absolute z-30  font-Poppins font-normal lg:text-[12px] lg:bottom-2 lg:p-[5px] 
                                                                        md:text-[11px] md:bottom-0 md:p-[3px]
                                                                        sm:text-[10px] sm:bottom-0 sm:p-[3px]
                                                                        vsm:text-[12px] vsm:bottom-2 vsm:p-[3px]'>
                  “I wanted a unique and personalized gift for my friend's
                  wedding, and a custom-made tie seemed like the perfect idea.
                  The tie turned out even better than I imagined, with beautiful
                  craftsmanship and attention to detail.”
                </p>
              </div>
              <div className=' text-[#ffff] font-Poppins font-[500] lg:text-[15px] lg:mt-[5px]
                                                                      md:text-[14px] md:mt-[4px]
                                                                      sm:text-[13px] sm:mt-[4px]
                                                                      vsm:text-[15px] vsm:mt-[5px]'>
                Neenu Maria @neenu_fuzz
              </div>
            </div>



            <div>
              <div className='relative  lg:w-[280px] lg:h-[310px] 
                                        md:w-[200px] md:h-[260px]
                                         sm:w-[200px] sm:h-[250px] hidden sm:block'>
                <img
                  src={gif2}
                  alt=''
                  className='absolute z-10  lg:w-[280px] lg:h-[310px]
                                            md:w-[200px] md:h-[260px]
                                            sm:w-[200px] sm:h-[250px] '
                />
                <img
                  src={glassgif2}
                  alt=''
                  className='absolute z-20 bottom-0 lg:w-[280px] lg:h-[110px]
                                                     md:w-[200px] md:h-[100px]
                                                     sm:w-[200px] sm:h-[100px]'
                />
                <p className=' absolute z-30  font-Poppins font-normal lg:text-[12px] lg:bottom-2 lg:p-[5px] 
                                                                        md:text-[11px] md:bottom-0 md:p-[3px]
                                                                        sm:text-[10px] sm:bottom-0 sm:p-[3px]'>
                  “I wanted a unique and personalized gift for my friend's
                  wedding, and a custom-made tie seemed like the perfect idea.
                  The tie turned out even better than I imagined, with beautiful
                  craftsmanship and attention to detail.”
                </p>
              </div>
              <div className=' text-[#ffff] font-Poppins font-[500] lg:text-[15px] lg:mt-[5px]
                                                                      md:text-[14px] md:mt-[4px]
                                                                      sm:text-[13px] sm:mt-[4px] hidden sm:block'>
                Neenu Maria @neenu_fuzz
              </div>
            </div>

            <div>
              <div className='relative   lg:w-[280px] lg:h-[310px] 
                                         md:w-[200px] md:h-[260px]
                                         sm:w-[200px] sm:h-[250px] hidden sm:block'>
                <img
                  src={gif3}
                  alt=''
                  className='absolute z-10  lg:w-[280px] lg:h-[310px]
                                            md:w-[200px] md:h-[260px]
                                            sm:w-[200px] sm:h-[250px] '
                />
                <img
                  src={glassgif3}
                  alt=''
                  className='absolute z-20 bottom-0 lg:w-[280px] lg:h-[110px]
                                                     md:w-[200px] md:h-[100px]
                                                     sm:w-[200px] sm:h-[100px]'
                />
                <p className=' absolute z-30  font-Poppins font-normal lg:text-[12px] lg:bottom-2 lg:p-[5px] 
                                                                        md:text-[11px] md:bottom-0 md:p-[3px]
                                                                        sm:text-[10px] sm:bottom-0 sm:p-[3px]'>
                  “I wanted a unique and personalized gift for my friend's
                  wedding, and a custom-made tie seemed like the perfect idea.
                  The tie turned out even better than I imagined, with beautiful
                  craftsmanship and attention to detail.”
                </p>
              </div>
              <div className=' text-[#ffff] font-Poppins font-[500] lg:text-[15px] lg:mt-[5px]
                                                                      md:text-[14px] md:mt-[4px]
                                                                      sm:text-[13px] sm:mt-[4px] hidden sm:block'>
                Neenu Maria @neenu_fuzz
              </div>
            </div>

            
            <div>
              <div className='relative   lg:w-[280px] lg:h-[310px] 
                                         md:w-[200px] md:h-[260px] hidden md:block
                                        '>
                <img
                  src={gif4}
                  alt=''
                  className='absolute z-10  lg:w-[280px] lg:h-[310px]
                                            md:w-[200px] md:h-[260px] '
                />
                <img
                  src={glassgif4}
                  alt=''
                  className='absolute z-20 bottom-0 lg:w-[280px] lg:h-[110px]
                                                     md:w-[200px] md:h-[100px]'
                />
                <p className=' absolute z-30  font-Poppins font-normal lg:text-[12px] lg:bottom-2 lg:p-[5px] 
                                                                        md:text-[11px] md:bottom-0 md:p-[3px]'>
                  “I wanted a unique and personalized gift for my friend's
                  wedding, and a custom-made tie seemed like the perfect idea.
                  The tie turned out even better than I imagined, with beautiful
                  craftsmanship and attention to detail.”
                </p>
              </div>
              <div className=' text-[#ffff] font-Poppins font-[500] lg:text-[15px] lg:mt-[5px]
                                                                      md:text-[14px] md:mt-[4px] hidden md:block'>
                Neenu Maria @neenu_fuzz
              </div>
            </div>



          </div>
        </div>

        <div className='flex justify-center'>
          <div className=' flex justify-center items-center  lg:w-[300px] lg:h-[60px] lg:mt-[30px]
                                                             md:w-[200px md:h-[50px]  md:mt-[30px]
                                                             sm:w-[180px] sm:h-[50px] sm:mt-[20px]
                                                             vsm:w-[150px] vsm:h-[50px] vsm:mt-[20px]'>
            <img
              src={PageSevenButton}
              alt=''
              className='lg:w-[200px] lg:h-[50px]
                          md:w-[200px md:h-[40px]
                          sm:w-[160px] sm:h-[40px]
                          vsm:w-[150px] vsm:h-[40px]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default PageSeven
