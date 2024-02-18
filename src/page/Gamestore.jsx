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
            Aplikasi Game Store adalah aplikasi baru yang menyediakan layanan pengisian cepat dan mudah serta voucher untuk berbagai game. Aplikasi ini menawarkan beragam game dan voucher, menjadikannya solusi sempurna bagi para gamer yang ingin meningkatkan pengalaman bermain game dan menikmati bonus eksklusif. Aplikasi Game Store memastikan proses pengisian saldo cepat dan nyaman bagi pemain untuk naik level, mendapatkan item khusus, dan menikmati manfaat lainnya dalam permainan. Dengan pilihan pembayaran yang fleksibel, transaksi yang aman, dan riwayat pembelian yang transparan, aplikasi ini menjamin proses pengisian saldo yang lancar dan aman. Selain itu, aplikasi ini menawarkan promosi dan bonus menarik, menambah nilai pada setiap transaksi. Tim dukungan pelanggan yang ramah selalu siap membantu pengguna dengan pertanyaan atau masalah apa pun.
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