import photo from './AGASH_PIC.jpg';
import { forwardRef } from 'react';
const Aboutme = forwardRef((props, ref) => {
    return(
        <div className='text-xl' ref={ref}>
            <p className="text-center text-2xl underline decoration-purple-700 underline-offset-8 mt-12 ">About Me</p>
   
            <div className='flex mt-12 justify-between max-tablet:flex-col-reverse'>
                <div className='basis-2/4'>
                <p>  Hi 👋🏼 , </p>
                <p> 
                I am a passionate <b className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text'>Front-End Developer</b> with a strong foundation in building responsive, user-friendly web interfaces.
                 I am focused on writing clean, efficient code and continuously improving my skills. I’m eager to join a collaborative team where I can contribute to creating engaging digital experiences and grow as a developer. </p>
                    </div>
            <div className='basis-1/3 relative max-tablet:flex max-tablet:justify-center'>
                <div className='w-60 h-60  absolute flex justify-center bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 p-1 rounded-full   blur-md opacity-15'>  </div>
                <img src={photo} className=" h-52 bottom-1/2  rounded-full backdrop-blur-md z-10 "/>
         
                </div>
              
            </div>

            <hr className='w-full h-12 mt-20'/>

        </div>
    )
})
export default Aboutme;