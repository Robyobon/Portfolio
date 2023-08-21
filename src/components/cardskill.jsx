import { SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro, SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss } from 'react-icons/si';
import AOS from 'aos'
import 'aos/dist/aos.css' // Import CSS style for AOS
import { useEffect } from 'react'
import '../index.css'
import whimsacle from "../assets/Group 27.png"

function Skills() {

  useEffect(() => {
    AOS.init({
      offset: 100, // Offset dari bottom viewport sebelum animasi dimulai
      duration: 800, // Durasi animasi (dalam milidetik)
      easing: 'ease-in-sine', // Jenis easing yang digunakan
       // Animasi hanya akan berjalan sekali saat masuk ke dalam viewport
    });
  }, []);

  const skills = [
    { name: 'Figma', icon: <SiFigma />, level: 'Intermediate' },
    { name: 'Adobe Ai', icon: <SiAdobeillustrator />, level: 'Intermediate' },
    { name: 'Adobe Photoshop', icon: <SiAdobephotoshop />, level: 'Intermediate' },
    { name: 'Adobe Premiere', icon: <SiAdobepremierepro />, level: 'Intermediate' },
    { name: 'HTML 5', icon: <SiHtml5 />, level: 'Intermediate' },
    { name: 'CSS 3', icon: <SiCss3 />, level: 'Intermediate' },
    { name: 'JavaScript', icon: <SiJavascript />, level: 'Basic' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 'Basic' },
    { name: 'React JS', icon: <SiReact />, level: 'Basic' },
  ];

  return (
    <section className="px-8 py-20"id='skills'>
      <div className="py-10">
        <h2 className="desktop:px-24 desktop:text-4xl text-center tablet:text-2xl text-3xl leading-8 font-bold tracking-tight text-white pb-12 " data-aos="zoom-out">My Skills</h2>
      </div>
      <div className="container mx-auto px-4 tablet:px-[100px] desktop:-mt-10">
        <div className="grid desktop:grid-cols-3 gap-8 tablet:gap-14 justify-center tablet:grid-cols-3 smartphone:grid-cols-2 smartphone:gap-4 ">
          {skills.map((skill, index) => (
    <div key={index} className=" p-4 rounded-lg shadow-lg shadow-black text-center skill-item skill-item:hover" data-aos="zoom-in">
              <div className="grid justify-items-center items-center mb-4">
                <span className="text-white text-3xl mb-2">{skill.icon}</span>
                <span className="text-white text-lg font-medium">{skill.name}</span>
              </div>
              <p className="text-xs text-gray-300">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 tablet:px-[100px] desktop:mt-8 flex items-center justify-center tablet:mt-8 smartphone:right-0 ">
      <div className="tablet:w-[150px] w-[310px] smartphone:w-[35vw] smartphone:-mt-[34vw] smartphone:left-[20vw] smartphone:h-auto relative p-4  rounded-lg shadow-lg shadow-black text-center skill-item skill-item:hover" data-aos="zoom-in">
              <div className="grid justify-items-center items-center mb-4">
                <span className="text-white text-3xl mb-2 "><img src={whimsacle} alt="whimsacle" className='w-10' /></span>
                <span className="text-white text-lg font-medium smartphone:mt-">whimsical</span>
              </div>
              <p className="text-xs text-gray-300">Intermediate</p>
            </div>
      </div>
  
    </section>
  );
}

export default Skills;
