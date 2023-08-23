import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Typewriter from 'typewriter-effect'
import foto from '../assets/herooooooo 1 (1).png'
import profilePic from '../assets/aboute.png'
import '../index.css'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import RobyHidayatPDF from '../assets/CV RobyHidayat.pdf';

function Hero() {
  React.useEffect(() => {
    AOS.init({
      offset: 150, // Offset dari bottom viewport sebelum animasi dimulai
      duration: 800, // Durasi animasi (dalam milidetik)
      easing: 'ease-in-sine', // Jenis easing yang digunakan
    });
  }, []);
  return (
    <>
    <section name='home' className='h-screen w-full flex items-center justify-between tablet:px-14 px-12 pb-36 desktop:px-[100px] mx-auto'>
      <div className="desktop:text-left mt-52 ">
        <h1 className="text-xs tablet:text-sm desktop:text-base font-light leading-tight mb-5 text-[#D8D9DA]" data-aos="zoom-out-right">Welcome to My Portfolio</h1>
        <p className="text-lg tablet:text-2xl desktop:text-4xl mb-5 text-black font-medium" data-aos="zoom-in" >Hi, I am <span className="font-bold tablet:text-4xl text-lg desktop:text-5xl text-[#FFF6E0]" data-aos="zoom-in">Roby Hidayat</span></p>
        <div className="desktop:text-base text-xs tablet:text-base font-light tablet:mb-15 mb-10 text-[#D8D9DA]" data-aos="zoom-in-left">
          <Typewriter
            options={{
              strings: ['UI/UX Design', 'Design Graphic'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <a
  href={RobyHidayatPDF}
  download="CV RobyHidayat.pdf"
>
  <button className="Button-glow smartphone:bg-transparent hover:bg-[#61677A] border border-[#61677A] text-[#61677A] hover:text-white font-medium py-2 tablet:py-2 tablet:px-4 px-4 rounded shadow-sm shadow-black">
    Download CV
  </button>
</a>
        <div className="flex mt-4 space-x-6">
          <a href="https://www.instagram.com/RobyObon" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={40}  className='icon'/>
          </a>
          <a href="https://wa.me/+6281214113867" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={40} className='icon' />
          </a>
        </div>
      </div>
      <div className="desktop:block mt-[122px] bg-gradient-to-t bg-[#61677A] h-52 w-28 desktop:h-[500px] desktop:w-[232px] desktop:mt-0 tablet:h-[380px] tablet:w-[160px] absolute right-12 tablet:right-14 desktop:right-24 z-[-20] desktop:top-28 smartphone:top-[21vh] tablet:top-10 shadow-2xl shadow-[#61677A]" data-aos="zoom-out-left">
      </div>
      <div className="desktop:block mt-[184px] tablet:mt-[208px] tablet:absolute tablet:right-11 desktop:absolute desktop:right-[88px] desktop:top-[-108px] mb-10 -mr-2 tablet:-top-10" data-aos="zoom-out-left">
        <img
          src={foto}
          alt="Foto"
          className="desktop:w-80 tablet:w-56 w-40 transform hover:scale-110 transition-transform duration-300 rotate-x-6 hover:mt-[12px] tablet:hover:-mt-4 desktop:hover:scale-95 hover:mb-10"
        />
      </div>
    </section>

    <section className="py-[50px] tablet:py-6" id="about">
      <h2 className="desktop:px-24 desktop:text-4xl text-center tablet:text-2xl text-3xl leading-8 font-bold tracking-tight text-white pb-12 " data-aos="fade-top" data-aos-anchor-placement="center-center">
        About Me
      </h2>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="desktop:grid desktop:grid-cols-2 gap-8 items-center tablet:grid tablet:grid-cols-2"
      >
        <div>
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-lg shadow-lg shadow-[#61677A] w-[180px] desktop:mx-28 desktop:w-64 smartphone:mx-auto tablet:mx-16 smartphone:my-10"
          />
        </div>
        <div className="tablet:pt-0 desktop:mr-20 desktop:-ml-40 desktop:pt-0 smartphone:px-10 tablet:-ml-40 tablet:mr-12 text-white desktop:-mt-16">
        <p className="desktop:text-xl tablet:text-base text-ms smartphone:text-center tablet:text-left mt-4" data-aos="fade-left">
  Hello! Let me introduce myself, my name is Roby Hidayat. I am a fresh graduate with a degree in Computer Engineering (S1 Teknik Informatika) who is passionate about the world of User Interface (UI) and User Experience (UX) Design.
</p>

          <p className="desktop:text-xl text-base tablet:text-base mt-4 smartphone:text-center tablet:text-left " data-aos="fade-left">
            During my studies, I have learned the fundamentals of computer science and programming, including understanding user needs, creating prototypes, visual design, as well as testing and evaluation techniques. I also have skills in using various design tools such as Adobe Illustrator, Whimesical, and Figma.
          </p>
          <p className="desktop:text-xl text-base tablet:text-base mt-4 smartphone:text-center tablet:text-left" data-aos="fade-left">
            I aspire to make meaningful contributions and continue to get work experience in the UI/UX design industry. I am very enthusiastic about participating in exciting projects and growing as a professional.
          </p>
        </div>
      </div>
    </section>

</>
    
  );
}

export default Hero;
