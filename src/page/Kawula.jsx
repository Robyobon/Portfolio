import Banner from '../assets/Kawula/BannerKawula.png'
import Sitemap from '../assets/Kawula/saitemapkw.png'
import Inspiration from '../assets/Kawula/Inspirationkw.png'
import UserFlow from '../assets/Kawula/Userflowkw.png'
import Wireframe1 from '../assets/Kawula/Wirframekw.png'
import Mockup1 from '../assets/Kawula/Mockupkw.png'


const Kawula = () => {
  return (
    <section className='overflow-hidden' id='kawula'>
        <div className='w-screen relative '>
          <div className="flex justify-center">
            <img src={Banner} alt="banner" className='desktop:h-[100vh]' />
          </div>
          <div className='px-[100px] mx-[100px] mt-10 smartphone:px-0 smartphone:mx-10'>
          <div>
            <a
  href='https://robyobon.github.io/UI-Kawula-Mood/'
  target='_blank'
  rel="noopener noreferrer"
>
  <button className="Button-glow bg-[#61677A] hover:bg-transparent border border-[#61677A] text-white hover:text-[#61677A] font-medium py-2 tablet:py-2 tablet:px-4 px-4 rounded shadow-sm shadow-black">
    Demo UI
  </button>
</a>
            </div>
            <div className='text-white'>
            <h1 className='text-[40px] text-center pt-20 smartphone:text-2xl'>Kawula</h1>
            <article className='text-xl pt-6 smartphone:text-sm'>
            Kawula is a new outerwear clothing brand in Indonesia. They are modern, young, and always innovating with new outerwear designs for the young generation. The majority of their customers are millennials.
            </article>
              <h1 className='text-[32px] pt-10 text-center'>Goals</h1>
              <article className='text-xl pt-6 smartphone:text-sm'>Increasing Brand Awareness. Showing that Kawula is a premium brand, convincing people that their products are excellent while maintaining high quality. Avoiding the perception of Kawula as just another clothing store among thousands of clothing stores in Indonesia. Having a website that demonstrates the seriousness and professionalism of Kawula. </article>
              <h3 className='text-[24px] pt-10'>Website Inspiration</h3>
              <img src={Inspiration} alt="gambar insprasi" className='pt-6' />
              <h3 className='text-[24px] pt-16 '>Sitemap</h3>
              <img src={Sitemap} alt="gambar Userflow" className='pt-6' />
              <h3 className='text-[24px] pt-16 '>User Flow</h3>
              <img src={UserFlow} alt="gambar wirframe" className='pt-6' />
              <h3 className='text-[24px] pt-16 '>Wireframe</h3>
              <img src={Wireframe1} alt="gambar Wireframe 1" className='pt-6' />
              <h3 className='text-[24px] pt-16 '>Mockup</h3>
              <img src={Mockup1} alt="gambar Mockup" className='pt-6 pb-20' />
            
            </div>
          </div>
        </div>
    </section>
  )
}

export default Kawula