import { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
    return(
        <div className='pb-12' ref={ref}>
        {/* <div style={{backgroundColor:'#1b0b2e'}}> */}

            <p className="text-center text-2xl underline decoration-purple-700 underline-offset-8 ">Contact</p>
            <div className='flex-row space-y-4 mt-12'>
            <p className='flex items-center'>"I'm excited to begin my career by joining a team that works together, values new ideas, and builds websites or apps that are helpful and easy for people to use."</p>
            <p><b className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text'>E-mail :</b> agashk.2002@gmail.com </p>
            <p><b className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text'>Mobile number :</b> (+91) 7539932597 </p>
            <p><b className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text'>LinkedIn :</b> <a href='https://www.linkedin.com/in/agash-k' target='_blank'>https://www.linkedin.com/in/agash-k</a></p>
            </div>
        </div>
    )
})
export default Contact;
