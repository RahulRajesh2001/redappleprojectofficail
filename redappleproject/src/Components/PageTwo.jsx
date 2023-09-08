import React from 'react'
import redapplepagetwo from '../assets/SecondPageRedapple.png'
import secondPageButton from '../assets/SecondPageButton.png'
import greenround from '../assets/greenround.png'
import arrowandlogo from '../assets/arrowandlogo.png'

const PageTwo = () => {
  return (
    <div
      className=' relative flex flex-col  items-center lg:w-[100%] lg:h-[800px]
                                                                   md:w-[100%] md:h-[750px]
                                                                   sm:w-[100%] sm:h-[700px]
                                                                   ssm:w-[100%] ssm:h-[800px]
                                                                   vsm:w-[100%] vsm:h-[900px]
                                                 '
    >
      <div className=' flex justify-center items-center absolute z-30 lg:w-[150px] lg:h-[150px] lg:mt-[-75px]
                                                                                    md:w-[150px] md:h-[150px] md:mt-[-75px]
                                                                                    sm:w-[120px] sm:h-[120px] sm:mt-[-60px]
                                                                                    ssm:w-[100px] ssm:h-[100px] ssm:mt-[-50px]
                                                                                    vsm:w-[90px] vsm:h-[90px] vsm:mt-[-45px]'>
        <img src={greenround} alt='' className='lg:w-[100px] lg:h-[100px]
                                                md:w-[90px]  md:h-[90px]
                                                sm:w-[80px] sm:h-[80px]
                                                ssm:w-[70px] ssm:h-[70px]
                                                vsm:w-[60px] vsm:h-[60px]' />
        <img
          src={arrowandlogo}
          alt=''
          className=' absolute lg:w-[130px] lg:h-[130px]
                                md:w-[110px] md:h-[120px]
                                sm:w-[100px] sm:h-[100px]
                                ssm:w-[90px] ssm:h-[90px] 
                                vsm:w-[80px] vsm:h-[80px]'
        />
      </div>
      <div
        className=' flex flex-col  items-center   lg:w-[100%] lg:h-[250px] lg:mt-[120px]
                                                                 md:w-[100%] md:h-[200px]  md:mt-[90px] 
                                                                 sm:w-[100%] sm:h-[220px] sm:mt-[80px]
                                                                 ssm:w-[100%] ssm:h-[250px] ssm:mt-[70px]
                                                                 vsm:w-[100%] vsm:h-[220px] vsm:mt-[60px]'
      >
        <p
          className='font-Forum lg:font-normal  lg:text-[50px] 
                                                 md:text-[45px] 
                                                 sm:text-[40px]
                                                 ssm:text-[30px]
                                                 vsm:text-[25px] vsm:mt-[10px]
                         '
        >
          We are here for you
        </p>
        {/* paragraph */}

        <div className=' flex flex-col justify-center items-center lg:w-[80%] lg:h-[120px] lg:mt-0
                                                                                md:w-[100%] md:h-[120px] md:mt-0
                                                                                sm:w-[100%] sm:h-[120px] sm:mt-0
                                                                                ssm:w-[78%] ssm:h-[300px] ssm:mt-[15px]
                                                                                vsm:w-[78%] vsm:h-[300px] vsm:mt-[10px]'>
            <div className='fontAdd lg:text-[16px]
                                    md:text-[15px]
                                    sm:text-[13px]
                                    ssm:text-[13px]
                                    vsm:text-[13px] '>We are one of the unique apparel industries in India where trend is handy to all. Explore our daily arrivals   </div>
            <div className='fontAdd lg:text-[16px]
                                    md:text-[15px]
                                    sm:text-[13px]
                                    ssm:text-[13px]
                                    vsm:text-[13px] '>to view the modish designer clothing, footwear and accessories in the market. Red Apple Apparels</div>
            <div className='fontAdd lg:text-[16px]
                                    md:text-[15px]
                                    sm:text-[13px]
                                    ssm:text-[13px]
                                    vsm:text-[13px] '>essentially targeted at the domestic and international brands, we are primarily manufacturers of all</div>
            <div className='fontAdd lg:text-[16px]
                                    md:text-[15px]
                                    sm:text-[13px]
                                    ssm:text-[13px]
                                    vsm:text-[13px] '>categories of casual and formal apparels.</div>
        </div>

      </div>
      <div 
        className=' flex  lg:w-[100%] lg:h-[600px]  lg:mb-6 lg:mt-[1px]
                                                                     md:w-[100%] md:h-[500px]  md:mt-[10px] 
                                                                    sm:w-[100%] sm:h-[390px]  sm:flex-row  sm:justify-around sm:items-center sm:mt-0
                                                                    ssm:w-[80%] ssm:h-[500px] ssm:justify-evenly ssm:items-center ssm:mt-0
                                                                     vsm:flex-col vsm:w-[80%]  vsm:h-[560px] vsm:justify-evenly vsm:items-center  vsm:mt-[50px]
                            
                                          '
      >
        <div
          className=' lg:w-[350px] lg:h-[350px] lg:mt-[100px] lg:ml-[10%]  
                                   md:w-[350px] md:h-[350px] md:mt-[40px]  md:ml-[10%]
                                    sm:w-[250px] sm:h-[250px] sm:mt-[40px] sm:ml-[5%]
                                    ssm:w-[220px] ssm:h-[250px] ssm:ml-[70px] ssm:mr-20
                                   vsm:w-[230px] vsm:h-[230px] 
                           '
        >
          <img src={redapplepagetwo} alt='' className=' lg:w-[350px] lg:h-[350px]
                                                         md:w-[300px] md:h-[350px]
                                                         sm:w-[250px] sm:h-[250px]
                                                         ssm:w-[2w0px] ssm:h-[250px]
                                                         vsm:w-[230px] vsm:h-[250px] 
                                                         ' />
        </div>
        <div
          className='         flex flex-col justify-center lg:w-[600px] lg:h-[450px] lg:mr-[100px]
                                                                         md:w-[400px]  md:h-[400px] md:mr-[50px]
                                                                         sm:w-[300px] sm:h-[350px] sm:mr-[30px]
                                                                         ssm:w-[100%] ssm:h-[200px]
                                                                          vsm:w-[100%] vsm:h-[250px]
                              
                              '
        >
          <h1
            className='   font-Forum font-normal 
                            lg:text-[80px] lg:w-[400px]
                            md:text-[70px] md:w-[350px] 
                            sm:text-[40px] sm:w-[100%]
                            ssm:text-[35px] ssm:w-[100%]
                            vsm:text-[35px] vsm:px-4
                            '
          >
            About Us
          </h1>
          <p
            className=' fontAdd font-400
                            lg:text-[16px]
                            md:text-[16px]
                            sm:text-[13px]
                            ssm:text-[13px]
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
