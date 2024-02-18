import Foto1 from '../assets/Dormire/Dormire1.png'
import Foto2 from '../assets/Dormire/Dormire2.png'
import Foto3 from '../assets/Dormire/Dormire3.png'
import Foto4 from '../assets/Dormire/Dormire4.png'
import Foto5 from '../assets/Dormire/Dormire5.png'
import Foto6 from '../assets/Dormire/Dormire6.png'



const Rh = () => {
  return (
    <section className='overflow-hidden dormire'>
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
            
              
            </div>
          </div>
        </div>
    </div>
    </section>
  )
}

export default Rh