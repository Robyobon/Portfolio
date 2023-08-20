import Banner from '../assets/Desktop - 1 (2).png'
import Sitemap from '../assets/Gamestore/Sitemapgss.png'
import Inspiration from '../assets/Gamestore/Inspiration.png'
import UserFlow from '../assets/Gamestore/Userflowgss.png'
import Wireframe1 from '../assets/Gamestore/Wirframe1.png'
import Wireframe2 from '../assets/Gamestore/Wirframe2.png'
import Mockup1 from '../assets/Gamestore/Mochup1.png'
import Mockup2 from '../assets/Gamestore/Mockup2.png'
import Mockup3 from '../assets/Gamestore/Mockup3.png'

const Gamestore = () => {
  return (
    <section className='overflow-hidden gamestore'>
        <div className='w-screen relative '>
          <div className=" flex justify-center">
            <img src={Banner} alt="banner" className='desktop:h-[100vh]' />
          </div>
          <div className='px-[100px] mx-[100px] smartphone:px-0 smartphone:mx-10'>
            <div className='text-white'>
            <h1 className='text-[40px] text-center pt-20 smartphone:text-2xl'>Game Store APP</h1>
            <article className='text-xl pt-10 smartphone:text-sm'>
            The Game Store app is a new application that provides fast and easy game top-up and voucher services for various games. It offers a wide selection of games and vouchers, making it the perfect solution for gamers who want to enhance their gaming experience and enjoy exclusive bonuses. The Game Store app ensures a quick and convenient top-up process for players to level up, obtain special items, and enjoy other in-game benefits. With flexible payment options, secure transactions, and a transparent purchase history, the app guarantees a smooth and safe top-up process. Moreover, it offers attractive promotions and bonuses, adding more value to every transaction. The friendly customer support team is always ready to assist users with any inquiries or issues.
            </article>
              <h2 className='text-[32px] pt-10'>Process</h2>
              <h3 className='text-[24px] pb-[40px]'>Sitemap</h3>
              <img src={Sitemap} alt="gambar sitemap" />
              <h3 className='text-[24px] pt-[40px] pb-[40px]'>User Flow</h3>
              <img src={UserFlow} alt="gambar Userflow" />
              <h3 className='text-[24px] pt-[40px] pb-[40px]'>Inspiration</h3>
              <img src={Inspiration} alt="gambar Inspiration" />
              <h3 className='text-[24px] pt-[40px] pb-[40px]'>Wireframe</h3>
              <img src={Wireframe1} alt="gambar Wireframe 1" />
              <img src={Wireframe2} alt="gambar Wireframe 2" />
              <h3 className='text-[24px] pt-[40px] pb-[40px]'>Mockup</h3>
              <img src={Mockup1} alt="gambar Mockup 1" />
              <img src={Mockup2} alt="gambar Mockup 2" />
              <img src={Mockup3} alt="gambar Mockup 3" className='pb-20' />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Gamestore