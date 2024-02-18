
import Foto1 from '../assets/WPAP1.png'
import Foto2 from '../assets/WPAP2.png'

const Rh = () => {
  return (
    <section className='overflow-hidden wpap'>
      <div className='w-screen relative '>
        <div className="flex justify-center">
          <div className='px-[100px] mx-[100px] mt-10 smartphone:px-0 smartphone:mx-10'>
            <div className='gap-y-10 grid grid-cols-1 w-[500px] smartphone:w-[300px]'>
              <img className='shadow-lg shadow-black' src={Foto2} />
        
              <img className='shadow-lg shadow-black'src={Foto1} />
              
           
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rh
