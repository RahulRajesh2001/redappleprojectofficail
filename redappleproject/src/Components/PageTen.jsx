import React from 'react'
import location from '../assets/location.png';
import send from '../assets/send.png';
import phone from '../assets/phone.png'
import button from "../assets/SecondPageButton.png"

const PageTen = () => {
  return (

    <div className=' w-full h-[800px]'>
      <div className=' flex flex-col justify-center items-center'>
        <div
          className='bg-red-200 flex flex-col justify-center items-center
                                       lg:w-[100%] lg:h-[200px] lg:mt-[10px]
                                       md:w-[100%]  md:h-[200px] md:mt-[100px] 
                                       sm:w-[100%]  sm:h-[150px] sm:mt-[70px] 
                                       ssm:w-[100%] ssm:h-[150px] ssm:mt-[70px]
                                       vsm:w-[100%] vsm:h-[100px] vsm:mt-[30px]      '
        >
          <p
            className='font-serif font-normal lg:text-[50px] 
                                              md:text-[40px]
                                              sm:text-[40px]
                                              ssm:text-[35px]
                                              vsm:text-[30px]'
          >
            Let's build a{' '}
          </p>
          <p
            className='font-serif font-normal  lg:text-[50px] 
                                              md:text-[40px]
                                              sm:text-[40px]
                                              ssm:text-[35px]
                                              vsm:text-[30px]'
          >
            great textile network
          </p>
        </div>
      </div>

      <div className='flex justify-center'>
        <div
          className='  flex justify-evenly items-center 
                                        lg:w-[900px] lg:h-[150px] lg:mt-[30px]
                                        md:w-[750px] md:h-[100px]  md:mt-[30px] 
                                         sm:w-[630px] sm:mt-[70px] sm:flex-row
                                         vsm:flex-col'
        >
          <div
            className=' flex flex-col justify-center items-center gap-3 sm:border-r-2 sm:border-b-0 
                          lg:w-[300px] lg:h-[100px]
                          md:w-[220px]  md:h-[100px] md:text-[15px]
                          sm:w-[200px]  sm:h-[80px] sm:text-sm
                         vsm:w-[200px] vsm:mt-[20px] vsm:border-b-2
                           '
          >
            <img
              src={location}
              alt=''
              className='md:w-9 sm:w-8 vsm:w-7'
            />
            <p>Hilite Platino, Maradu, Kochi</p>
          </div>

          <div
            className='flex flex-col justify-center items-center gap-3 sm:border-r-2 sm:border-b-0
                               lg:w-[300px] lg:h-[100px] 
                               md:w-[220px]  md:h-[100px] md:text-[15px]
                               sm:w-[200px]  sm:h-[80px] sm:text-sm
                               vsm:w-[200px] vsm:mt-[20px] vsm:border-b-2 '
          >
            <img
              src={send}
              alt=''
              className='md:w-9 sm:w-8 vsm:w-7'
            />
            <p>info@redappleapparels.com</p>
          </div>

          <div
            className='flex flex-col justify-center items-center gap-3 
                             lg:w-[300px] lg:h-[100px]
                              md:w-[220px]  md:h-[100px] md:text-[15px] 
                              sm:w-[200px]  sm:h-[80px] sm:text-sm
                              vsm:w-[200px] vsm:mt-[20px] '
          >
            <img
              src={phone}
              alt=''
              className='md:w-9 sm:w-8 vsm:w-7'
            />
            <p>+91 9946470099</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center  '>
        <div
          className='     lg:mt-[40px]
                          md:mt-[70px]
                          sm:mt-[60px] 
                          vsm:mt-[20px]'
        >
          <img
            src={button}
            alt=''
            className='lg:w-[250px] lg:h-[70px]
                        md:w-[180px] md:h-[50px]
                        sm:w-[180px] sm:h-[50px]
                        vsm:w-[120px] vsm:h-[30px]'
          />
        </div>
      </div>

      <div
        className='flex justify-center lg:mt-[80px]
                                          md:mt-[60px]
                                          sm:mt-[60px] 
                                           vsm:mt-[20px] '
      >
        <div
          className='flex justify-evenly items-center  
                            lg:w-[1200px] lg:h-[100px]
                            md:w-[600px] 
                            sm:w-[600px] sm:flex-row
                            vsm:flex-col
                                      '
        >
          <div
            className=' flex justify-center items-center sm:border-r-2
                                 lg:w-[240px] lg:h-[50px]
                                 md:w-[150px  md:h-[40px]
                                  sm:w-[120px]
                                  
                                   '
          >
            <a
              href='#'
              class=' no-underline font-Lora font-normal lg:text-[22px] md:text-[17px]'
            >
              INSTAGRAM
            </a>
          </div>
          <div
            className='flex justify-center items-center sm:border-r-2 
                                lg:w-[240px] lg:h-[50px]
                                md:w-[150px]  md:h-[40px]
                                sm:w-[120px] 
                                vsm:mt-[10px]
                                '
          >
            <a
              href='#'
              class=' no-underline font-Lora font-normal lg:text-[22px] md:text-[17px]'
            >
              FACEBOOK
            </a>
          </div>
          <div
            className='flex justify-center items-center sm:border-r-2
                              lg:w-[240px] lg:h-[50px]
                               md:w-[150px]  md:h-[40px] 
                               sm:w-[120px] 
                               vsm:mt-[10px]
                               '
          >
            <a
              href='#'
              class=' no-underline font-Lora font-normal lg:text-[22px] md:text-[17px]'
            >
              TWITTER
            </a>
          </div>
          <div
            className=' flex justify-center items-center sm:border-r-2
                                 lg:w-[240px] lg:h-[50px] 
                                 md:w-[150px]  md:h-[40px]
                                 sm:w-[120px] 
                                 vsm:mt-[10px]'
          >
            <a
              href='#'
              class=' no-underline font-Lora font-normal lg:text-[22px] md:text-[17px]'
            >
              LINKDIN
            </a>
          </div>
          <div
            className='flex justify-center items-center
                               lg:w-[240px] lg:h-[50px] 
                               md:w-[150px]  md:h-[40px]
                               sm:w-[120px] 
                               vsm:mt-[10px]'
          >
            <a
              href='#'
              class=' no-underline font-Lora font-normal lg:text-[22px] md:text-[17px] '
            >
              WHATSAPP
            </a>
          </div>
        </div>
      </div>

      <div
        className='flex justify-center items-center  font-Poppins
                                                lg:mt-[20px]
                                                md:mt-[20px] md:text-[15px]
                                                sm:mt-[45px] sm:text-sm
                                                vsm:mt-[20px] vsm:text-[12px]'
      >
        <p>Copyright &copy; redappleapparels.com  All Rights Reserved</p>
      </div>
    </div>
  )
}

export default PageTen


