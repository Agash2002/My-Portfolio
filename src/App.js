import { useRef } from 'react';
import './App.css';
import './index.css';
import Aboutme from './Aboutme';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact.js';
import '@fortawesome/fontawesome-free/css/all.css';
import { useState } from 'react';
import nav from './menus.png';

function App() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  const scrollToSkills = () => {
    skillRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  const scrollToProjects = () => {
    projectRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
 

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{backgroundColor:'#11071f'}} className=' text-white text-lg  tracking-wider overflow-x-hidden '>
      <div  >
      <div style={{backgroundColor:'#1b0b2e'}} className='flex py-5 px-16  max-phone:px-8  justify-between'>
    <ul className='font-serif'>
      <li>
      Agash K</li></ul>
    <ul className='flex justify-end max-tablet:hidden'>
        <li className='mr-5 font-serif'><a href="#" className='hover:cursor-pointer' onClick={()=>scrollToAbout()}>About me</a></li>
        <li className='mr-5 font-serif'><a href="#" className='hover:cursor-pointer' onClick={()=>scrollToSkills()}>Skills</a></li>
        <li className='mr-5 font-serif' ><a href="#" className='hover:cursor-pointer' onClick={()=>scrollToProjects()}>Projects</a></li>
        <li className='mr-5 font-serif'><a href="#" className='hover:cursor-pointer' onClick={()=>scrollToContact()}>Contact</a></li>
      </ul> 
      <ul className='block tablet:hidden'>
      <li onClick={()=>setIsOpen(!isOpen)}><img alt='nav' src={nav} className='w-7 h-7'/></li></ul>
    
      </div>
      {isOpen ? <ul style={{backgroundColor:'#1b0b2e'}} className='flex flex-col rounded-b-xl items-center absolute right-0 z-20 '>
        <hr className='w-full h-2 opacity-25  mt-2 block tablet:hidden'/>
        <li className='mx-8 font-serif block tablet:hidden'><a className='hover:cursor-pointer' 
        onClick={()=>scrollToAbout()}>About me</a>  </li>   
        <hr className='w-full h-2 opacity-25  mt-2 block tablet:hidden'/>
        <li className='mx-8  font-serif block tablet:hidden'><a className='hover:cursor-pointer' onClick={()=>scrollToSkills()}>Skills</a></li>
        <hr className='w-full h-2 opacity-25  mt-2 block tablet:hidden'/>
        <li className='mx-8  font-serif block tablet:hidden' ><a className='hover:cursor-pointer' onClick={()=>scrollToProjects()}>Projects</a></li>
        <hr className='w-full h-2  opacity-25 mt-2 block tablet:hidden'/>
        <li className='mx-8 mb-4 font-serif block tablet:hidden'><a className='hover:cursor-pointer' onClick={()=>scrollToContact()}>Contact</a></li>
        

    </ul>   :""}
      </div>
      <div className='max-tablet:px-8 px-16'>
      <Aboutme ref={aboutRef}/>
      <Skills ref={skillRef}/>
      <Projects ref={projectRef}/>
      <Contact ref={contactRef}/>
      </div>
   
    </div>
  );
}

export default App;
