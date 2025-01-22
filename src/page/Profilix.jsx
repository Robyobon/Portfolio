import Banner from '../assets/COVER (2).svg'
import Gambar1 from '../assets/Profilix/Portfolio4.svg'
import Gambar2 from '../assets/Profilix/Mac Studio.svg'
import Gambar3 from '../assets/Profilix/Group 1000003989.svg'
import Gambar4 from '../assets/Profilix/MacBook Pro and iPhone 15 Pro Mockup.svg'
import Gambar5 from '../assets/Profilix/Group 1000003990.svg'
import Gambar6 from '../assets/Profilix/Group 1000003991.svg'
import Gambar7 from '../assets/Profilix/Group 1000003992.svg'
import Gambar8 from '../assets/Profilix/iPad Pro 12.9-inch Space Gray Mockup.svg'
import Gambar9 from '../assets/Profilix/Portfolio 2025.svg'

const Profilix = () => {
  return (
    <section className='overflow-hidden profilix bg-black'>
        <div className='w-screen relative'>
          <div className="flex justify-center">
            <img src={Banner} alt="banner" className='desktop:h-[100vh] w-full' />
          </div>
          <div className='px-[100px] mx-[100px] smartphone:px-0 smartphone:mx-10'>
            <div className='text-white'>
              <h1 className='text-[40px] text-center pt-20 smartphone:text-2xl'>Thema Profilix</h1>
              <article className='text-xl pt-10 smartphone:text-sm'>
                Portofolio Tema untuk CMS Profilix Oxinos
                Saya telah mengembangkan sebuah tema portofolio dan Company Profile untuk tema tema di CMS Profilix Oxinos. Tema ini dirancang untuk memberikan tampilan yang profesional dan menarik, memudahkan pengguna dalam membuat portofolio yang elegan dan fungsional. Hasil kerja ini mencerminkan kemampuan saya dalam menciptakan desain web yang responsif dan modern, memastikan pengalaman pengguna yang mulus di berbagai perangkat.
              </article>
              <img src={Gambar1} alt="gambar Portfolio" className='pt-6' />
              <img src={Gambar9} alt="gambar companyprofile" className='pt-6' />
              <img src={Gambar2} alt="gambar Userflow" className='' />
              <img src={Gambar3} alt="gambar Userflow" className='relative bottom-96 smartphone:bottom-16' />
              <img src={Gambar4} alt="gambar Wireframe 1" className='relative bottom-[540px] smartphone:bottom-16' />
            
              <img src={Gambar5} alt="gambar Userflow" className='relative bottom-[740px] smartphone:bottom-16' />
                <img src={Gambar8} alt="gambar Wireframe 1" className='relative bottom-[540px] smartphone:bottom-16' />
              <img src={Gambar6} alt="gambar Userflow" className='relative bottom-[740px] smartphone:bottom-16' />
              <img src={Gambar7} alt="gambar Userflow" className='relative bottom-[740px] smartphone:bottom-16' />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Profilix