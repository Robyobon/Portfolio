import Foto1 from '../assets/Rh/1.png'
import Foto2 from '../assets/Rh/2.png'
import Foto3 from '../assets/Rh/3.png'
import Foto4 from '../assets/Rh/4.png'
import Foto5 from '../assets/Rh/5.png'
import Foto6 from '../assets/Rh/6.png'
import Foto7 from '../assets/Rh/7.png'
import Foto8 from '../assets/Rh/8.png'
import Foto9 from '../assets/Rh/9.png'
import Foto10 from '../assets/Rh/10.png'


const Rh = () => {
  return (
    <section className='overflow-hidden rh'>
        <div className='w-screen relative '>
          <div className="flex justify-center">
          <div className='px-[100px] mx-[100px] mt-10 smartphone:px-0 smartphone:mx-10'>
            <div className='gap-y-10 grid grid-cols-1 w-[700px] smartphone:w-[300px]'>
                <img src={Foto1} alt="Gambar 1" className='shadow-lg shadow-black' />
                <img src={Foto2} alt="Gambar 2" className='shadow-lg shadow-black' />
                <img src={Foto3} alt="Gambar 3" className='shadow-lg shadow-black' />
                <img src={Foto4} alt="Gambar 4" className='shadow-lg shadow-black' />
                <img src={Foto5} alt="Gambar 5" className='shadow-lg shadow-black' />
                <img src={Foto6} alt="Gambar 6" className='shadow-lg shadow-black' />
                <img src={Foto7} alt="Gambar 7" className='shadow-lg shadow-black' />
                <img src={Foto8} alt="Gambar 8" className='shadow-lg shadow-black' />
                <img src={Foto9} alt="Gambar 9" className='shadow-lg shadow-black' />
                <img src={Foto10} alt="Gambar 10" className='shadow-lg shadow-black mb-20' />
              
            </div>
          </div>
        </div>
    </div>
    </section>
  )
}

export default Rh