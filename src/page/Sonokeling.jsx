import Banner1 from '../assets/Sonokeling/banner (2).png'
import Inspiration from '../assets/Sonokeling/Inspiration.png'
import Wireframe1 from '../assets/Sonokeling/Wirframe.png'
import Mockup1 from '../assets/Sonokeling/Mockup.png'
import Guide from '../assets/Sonokeling/Guid.png'


const Sonokeling = () => {
  return (
    <section className='overflow-hidden sonokeling'>
        <div className='w-screen relative '>
          <div className="flex justify-center">
            <img src={Banner1} alt="banner" className='desktop:h-[100vh] desktop:w-[76vw]' />
          </div>
          <div className='px-[100px] mx-[100px] mt-10 smartphone:px-0 smartphone:mx-10'>
          <div>
            <a
  href='https://robyobon.github.io/UI-Sonokeling/'
  target='_blank'
  rel="noopener noreferrer"
>
  <button className="Button-glow bg-[#61677A] hover:bg-transparent border border-[#61677A] text-white hover:text-[#61677A] font-medium py-2 tablet:py-2 tablet:px-4 px-4 rounded shadow-sm shadow-black">
    Demo UI
  </button>
</a>
            </div>
            <div className='text-white'>
            <h1 className='text-[40px] text-center pt-20 smartphone:text-2xl'>PT.SONOKELING</h1>
            <article className='text-xl pt-6 smartphone:text-sm'>
            PT. SONOKELING adalah Perusahaan Konsultan Nasional yang mengkhususkan diri pada usaha layanan konsultansi di bidang pengelolaan sumber daya alam,  kehutanan, dan agroindustri (pertanian, perkebunan, perikanan, dan peternakan, serta industri pengolahan hasil hutan dan pertanian), dengan berbagai bentuk dan jenis layanan jasa konsultansi lainnya.

Perusahaan ini didirikan pada tahun 2006 oleh sekelompok profesional yang telah pernah bekerja bersama-sama semenjak tahun 2000. Pendirian dilakukan pada tanggal 7 September  2006 dengan Akta Pendirian No. 5  di hadapan Notaris  Siti Zaenab, SH, Notaris di Bogor.
            </article>
              <h3 className='text-[24px] pt-10'>Website Inspiration</h3>
              <img src={Inspiration} alt="gambar Inspiration" className='pt-6' />
              <h3 className='text-[24px] pt-16 '>Wireframe</h3>
              <img src={Wireframe1} alt="gambar Wireframe 1" className='pt-6' />
              <h3 className='text-[24px] pt-16 '>Guide</h3>
              <img src={Guide} alt="gambar Guide" className='pt-6' />
              <h3 className='text-[24px] pt-16 '>Mockup</h3>
              <img src={Mockup1} alt="gambar Mockup" className='pt-6 pb-20' />
            
            </div>
          </div>
        </div>
    </section>
  )
}

export default Sonokeling