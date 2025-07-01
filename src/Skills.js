import { faHtml5,faCss3Alt,faJs,faReact,faGithub,faDocker,faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { SiRedux, SiMysql, SiTailwindcss, SiReactrouter, SiTypescript,SiHtml5,SiCss3 ,SiReact,SiJavascript,SiGit,SiDocker} from 'react-icons/si';
import { forwardRef } from 'react';
const Skills = forwardRef((props, ref) => {
    return(
        <div ref={ref}>
            <p className="text-center text-2xl underline decoration-purple-700 underline-offset-8  ">Skills</p>
            <div className="mt-12 flex flex-col justify-center items-center space-y-6">

  <div className="flex max-phone:space-x-2 max-tablet:space-x-4 space-x-12">
  <div className='flex flex-col items-center justify-center'><SiHtml5 className="text-orange-500 max-phone:h-10 max-phone:w-10 h-12 w-12"  /><p className='text-sm mt-2'>HTML</p></div> 
  <div className='flex flex-col items-center justify-center'><SiCss3 className="text-blue-500 max-phone:h-10 max-phone:w-10 h-12 w-12"  /><p className='text-sm mt-2'>CSS</p></div>
  <div className='flex flex-col items-center justify-center'><SiReact className="text-sky-400 max-phone:h-10 max-phone:w-10 h-12 w-12"  /><p className='text-sm mt-2 '>React</p></div>
  <div className='flex flex-col items-center justify-center'><SiJavascript className="text-yellow-400 max-phone:h-10 max-phone:w-10 h-12 w-12"  /><p className='text-sm mt-2'>JavaScript</p></div>
 
  </div>
<div>

  </div>
</div>
<hr className='w-full h-12 mt-20'/>

        </div>
    )
})

export default Skills;