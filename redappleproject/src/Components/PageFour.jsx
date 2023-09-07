import React from 'react'
import backgroundImage from '../assets/pagethreebgimg.png'
import fourpointseven from '../assets/4.7.png'
import fifteenplus from '../assets/15+.png'
import fiftysix from '../assets/56+.png'
import fourtysevenk from '../assets/47k+.png'

const PageFour = () => {
  return (
    <div
      className='bg-cover lg:w-full lg:h-[850px]
                  md:w-full md:h-[770px]
                  sm:w-full sm:h-[780px]
                  vsm:w-full vsm:h-[1760px]'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='flex flex-col justify-center items-center '>
        <div
          className='text-[#ffff] font-Lora font-normal lg:text-[60px] lg:mt-[10px]
                                                          md:text-[50px] md:mt-[20px]
                                                          sm:text-[40px] sm:mt-[15px]
                                                          vsm:text-[25px] vsm:mt-[20px]'
        >
          Why Choose Us
        </div>
        <div
          className='text-[#ffff] font-Poppins font-normal lg:text-[16px] lg:w-[800px] lg:mt-[10px]
                                                                md:text-[15px] md:w-[600px] md:mt-[10px]
                                                                sm:text-[14px] sm:w-[500px]
                                                                vsm:text-[14px] vsm:w-[300px]'
        >
          This is the right place if you are in search for the best women
          outfits. Let’s redefine your styling system with our huge store of
          trendy particulars. You can take online at us from the comfort of your
          home and get your favourites delivered right to your doorstep
        </div>
      </div>

      <div className='flex justify-center'>
        <div
          className='flex justify-evenly items-center lg:mt-[50px]   lg:w-[1500px] lg:h-[120px]
                                                    md:mt-[40px]   md:w-[900px] md:h-[100px]
                                                    sm:mt-[30px] sm:flex-row  sm:w-[650px] sm:h-[100px]
                                                    vsm:flex-col  vsm:mt-[20px]  vsm:w-[400px] vsm:h-[600px]  
                                        '
        >
          <div
            className='flex justify-center items-center lg:gap-5 lg:w-[250px] lg:h-[100px] 
                                                      md:gap-3 md:w-[180px]  md:h-[90px] 
                                                      sm:gap-2 sm:w-[140px] sm:h-[90px] 
                                                      vsm:gap-2 vsm:w-[350px] vsm:h-[130px] 
                                                     '
          >
            <img
              src={fifteenplus}
              alt=''
              className='lg:w-[160px] lg:h-[70px]
                                                                md:w-[100px] md:h-[60px]
                                                                sm:w-[80px] sm:h-[50px]
                                                                vsm:w-[150px] vsm:h-[70px]'
            />
            <p
              className='text-[#ffff]       lg:text-[18px]
                                            md:text-[13px]
                                            sm:text-[11px]
                                            vsm:text-[17px]'
            >
              Years of Experience
            </p>
          </div>
          <div
            className='flex justify-center items-center lg:gap-5 lg:w-[320px] lg:h-[100px] 
                                                      md:gap-3 md:w-[210px]  md:h-[90px] 
                                                      sm:gap-2 sm:w-[160px] sm:h-[90px] 
                                                      vsm:gap-2 vsm:w-[350px] vsm:h-[130px] '
          >
            <img
              src={fourtysevenk}
              alt=''
              className='lg:w-[190px] lg:h-[70px]
                                                                  md:w-[140px] md:h-[60px] 
                                                                  sm:w-[100px] sm:h-[50px]
                                                                  vsm:w-[180px] vsm:h-[70px]'
            />
            <p
              className='text-[#ffff]    lg:text-[18px]
                                            md:text-[13px]
                                            sm:text-[11px]
                                            vsm:text-[17px]'
            >
              Happy Customers
            </p>
          </div>
          <div
            className='flex justify-center items-center lg:gap-5 lg:w-[270px] lg:h-[100px] 
                                                       md:gap-3 md:w-[170px]  md:h-[90px] 
                                                       sm:gap-2 sm:w-[140px] sm:h-[90px] 
                                                       vsm:gap-2 vsm:w-[350px] vsm:h-[130px]  '
          >
            <img
              src={fiftysix}
              alt=''
              className='lg:w-[250px] lg:h-[70px]
                                                                md:w-[100px] md:h-[60px]
                                                                sm:w-[80px] sm:h-[50px]
                                                                vsm:w-[150px] vsm:h-[70px]'
            />
            <p
              className='text-[#ffff]  lg:text-[18px]
                                            md:text-[13px]
                                            sm:text-[11px]
                                            vsm:text-[17px]
                                            '
            >
              Exporting Countries
            </p>
          </div>
          <div
            className='flex justify-center items-center lg:gap-5 lg:w-[250px] lg:h-[100px] 
                                                      md:gap-3 md:w-[170px]  md:h-[90px] 
                                                      sm:gap-2 sm:w-[140px] sm:h-[90px] 
                                                      vsm:gap-2 vsm:w-[350px] vsm:h-[130px] '
          >
            <img
              src={fourpointseven}
              alt=''
              className='lg:w-[160px] lg:h-[70px]
                                                                md:w-[100px] md:h-[60px]
                                                                sm:w-[70px] sm:h-[50px]
                                                                vsm:w-[130px] vsm:h-[70px]'
            />
            <p
              className='text-[#ffff]  lg:text-[18px]
                                            md:text-[13px]
                                            sm:text-[11px]
                                            vsm:text-[17px]'
            >
              Customer Rating
            </p>
          </div>
        </div>
      </div>

      <div className='lg:mt-[30px] md:mt-[30px] sm:mt-[20px] vsm:mt-[20px]'>
        <div
          className='text-[#ffff] flex justify-center items-center font-Lora font-normal lg:text-[60px] 
                                                                                            md:text-[50px]
                                                                                            sm:text-[40px]
                                                                                            vsm:text-[30px]
                                                                                               '
        >
          Our Expertise
        </div>
        <div></div>

        <div className='flex justify-center'>
          <div
            className=' flex  justify-evenly items-center lg:mt-[30px] lg:w-[1200px] lg:h-[130px]
                                                        md:mt-[30px]  md:w-[800px] md:h-[130px]
                                                        sm:mt-[20px] sm:flex-row   sm:h-[160px] sm:w-[700px]
                                                         vsm:flex-col vsm:w-[300px] vsm:h-[500px] '
          >
            <div
              className='flex flex-col justify-center items-center lg:w-[300px] lg:h-[120px] 
                                                                  md:w-[230px] md:h-[120px] 
                                                                  sm:w-[200px] sm:h-[150px] 
                                                                  vsm:w-[250px] 
                                                                     '
            >
              <p
                className='text-[#ffff] font-Lora font-normal lg:text-[24px]
                                                                  md:text-[22px]
                                                                  sm:text-[20px]
                                                                  vsm:text-[23px]'
              >
                Exceed your Expectations
              </p>
              <p
                className='text-[#ffff] font-Poppins font-normal lg:text-[15px] lg:mt-[18px]
                                                                    md:text-[14px] md:mt-[15px]
                                                                    sm:text-[14px] sm:mt-[10px]
                                                                    vsm:text-[14px] vsm:mt-[10px]
                                                                    '
              >
                We assure your personal closet is filled with premium brands.
              </p>
            </div>

            <div
              className='flex flex-col justify-center items-center lg:w-[300px] lg:h-[120px] 
                                                                  md:w-[230px] md:h-[120px] 
                                                                  sm:w-[200px] sm:h-[150px] 
                                                                  vsm:w-[250px]
                                                                       '
            >
              <p
                className='text-[#ffff] font-Lora font-normal lg:text-[24px]
                                                                md:text-[22px]
                                                                sm:text-[20px]
                                                                vsm:text-[23px]
                                                                 '
              >
                Deliver 100% satisfaction
              </p>
              <p
                className='text-[#ffff] font-Poppins font-normal lg:text-[15px] lg:mt-[18px]
                                                                    md:text-[14px] md:mt-[15px]
                                                                    sm:text-[14px] sm:mt-[10px]
                                                                    vsm:text-[14px] vsm:mt-[10px]'
              >
                Shop with confidence. You’ll get your premium products time with
                best quality.
              </p>
            </div>
            <div
              className='flex flex-col justify-center items-center lg:w-[300px] lg:h-[120px] 
                                                                  md:w-[230px] md:h-[120px] 
                                                                  sm:w-[200px] sm:h-[150px] 
                                                                  vsm:w-[250px]  '
            >
              <p
                className='text-[#ffff] font-Lora font-normal lg:text-[24px]
                                                                md:text-[22px]
                                                                sm:text-[20px]
                                                                vsm:text-[23px]'
              >
                Professional Experts
              </p>
              <p
                className='text-[#ffff] font-Poppins font-normal lg:text-[15px] lg:mt-[18px]
                                                                    md:text-[14px] md:mt-[15px]
                                                                    sm:text-[14px] sm:mt-[10px]
                                                                    vsm:text-[14px] vsm:mt-[10px]'
              >
                We provide you a team with years of market experience in the
                field of clothing industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center '>
        <di
          className='flex justify-evenly  items-center lg:mt-[30px] lg:w-[800px] lg:h-[130px] 
                                                       md:mt-[30px] md:w-[600px] md:h-[130px] 
                                                       sm:mt-[30px] sm:w-[500px] sm:h-[160px]     
                                                         vsm:w-[300px] vsm:h-[350px]  sm:flex-row vsm:flex-col'
        >
          <div
            className='flex flex-col justify-center items-center lg:w-[300px] lg:h-[120px] 
                                                                  md:w-[230px] md:h-[120px] 
                                                                  sm:w-[220px] sm:h-[140px]
                                                                  vsm:w-[250px]  '
          >
            <p
              className='text-[#ffff] font-Lora font-normal lg:text-[24px]
                                                                md:text-[22px]
                                                                sm:text-[20px]
                                                                vsm:text-[23px]'
            >
              24/7 Premium support
            </p>
            <p
              className='text-[#ffff] font-Poppins font-normal lg:text-[15px] lg:mt-[18px]
                                                                  md:text-[14px] md:mt-[15px]
                                                                  sm:text-[14px] sm:mt-[10px]
                                                                  vsm:text-[14px] vsm:mt-[10px]'
            >
              Reach us at any time for any queries. We are ready to keep you
              always happy.
            </p>
          </div>
          <div
            className='flex flex-col justify-center items-center lg:w-[300px] lg:h-[120px] 
                                                                  md:w-[230px] md:h-[120px] 
                                                                  sm:w-[220px] sm:h-[140px] 
                                                                  vsm:w-[250px] vsm:h-[150px] '
          >
            <p
              className='text-[#ffff] font-Lora font-normal lg:text-[24px]
                                                                md:text-[22px]
                                                                sm:text-[20px]
                                                                vsm:text-[23px]'
            >
              24/7 Premium support
            </p>
            <p
              className='text-[#ffff] font-Poppins font-normal lg:text-[15px] lg:mt-[18px]
                                                                  md:text-[14px] md:mt-[15px]
                                                                  text-[14px] sm:mt-[10px]
                                                                  vsm:text-[14px] vsm:mt-[10px]'
            >
              Reach us at any time for any queries. We are ready to keep you
              always happy.
            </p>
          </div>
        </di>
      </div>
    </div>
  )
}

export default PageFour
