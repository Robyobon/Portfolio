import Banner from '../assets/Secondlify/COVER (4).svg'
import Research from '../assets/Secondlify/research.svg'
import Taskflow from '../assets/Secondlify/Task Flow 1.svg'
import UserFlowuser from '../assets/Secondlify/User Flow 1.svg'
import UserFlowuser2 from '../assets/Secondlify/User Flow Penjual 1.svg'
import UserFlowpenawaran from '../assets/Secondlify/User Flow penjual penawaran 1.svg'
import Wireframe1 from '../assets/Secondlify/Wireframe 1.svg'
import Wireframe2 from '../assets/Secondlify/Flow user 1.svg'
import Wireframe3 from '../assets/Secondlify/Wireframe1.svg'
import Designsystem from '../assets/Secondlify/Designsystem.svg'
import Hifi from '../assets/Secondlify/Wireframe2.svg'
import contoh from '../assets/Secondlify/Halaman Awal Sebelum Login.svg'

const Secondlify = () => {
  return (
    <section className='overflow-hidden secondlify'>
        <div className='w-screen relative'>
          <div className="flex justify-center">
            <img src={Banner} alt="banner" className='desktop:h-[100vh] w-full' />
          </div>
          <div className='px-[100px] mx-[100px] smartphone:px-0 smartphone:mx-10'>
            <div className='text-white'>
            <h1 className='text-[40px] text-center pt-20 smartphone:text-2xl'>Secondlify</h1>
            <article className='text-xl pt-10 smartphone:text-sm'>
           Secondlify adalah platform jual beli barang bekas yang menghadirkan kemudahan bagi pengguna untuk menjual dan membeli barang bekas berkualitas. Dengan fitur unggulan pengecekan kualitas barang dan layanan pengiriman yang terpercaya, Secondlify memberikan pengalaman berbelanja online yang aman dan nyaman bagi setiap penggunanya. Temukan berbagai pilihan barang bekas dari elektronik, pakaian, furnitur, hingga perlengkapan rumah tangga dengan harga yang kompetitif dan kualitas terjamin. Jual barang bekas Anda dengan mudah atau temukan barang bekas yang Anda cari hanya di Secondlify, tempatnya belanja pintar untuk masa depan yang lebih berkelanjutan.
            </article>
              <h2 className='text-[32px] pt-10'>Process</h2>
              <h3 className='text-[24px] pb-[40px]'>Research</h3>
              <img src={Research} alt="gambar research" />
              <h3 className='text-[32px] pt-[40px] pb-[40px]'>User Flow & Task Flow</h3>
              
              <h4 className='text-[24px] pb-[40px]'>User Flow User</h4>
              
              <img src={UserFlowuser} alt="gambar Userflow" />
              <img src={UserFlowuser2} alt="gambar Userflow" />
              <h4 className='text-[24px] pb-[40px] pt-10'>User Flow Penawaran</h4>
              
              <img src={UserFlowpenawaran} alt="gambar Userflow" />

              <h3 className='text-[24px] pt-[40px] pb-[40px]'>Task Flow</h3>
              <img src={Taskflow} alt="gambar Task" />
              <h3 className='text-[24px] pt-[40px] pb-[40px]'>Wireframe & Wireframeflow</h3>
              <img src={Wireframe1} alt="gambar Wireframe 1" />
              <img src={Wireframe2} alt="gambar Wireframe 2" />
              <img src={Wireframe3} alt="gambar Wireframe 2" />
              <img src={Designsystem} alt="gambar Mockup 1" />
               <h3 className='text-[24px] pb-[40px] pt-12'>Hifi</h3>
              <img src={Hifi} alt="gambar research" />
           
              <img src={contoh} alt="gambar research" />
           
            </div>
          </div>
        </div>
    </section>
  )
}

export default Secondlify