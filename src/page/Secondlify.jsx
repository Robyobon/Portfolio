import Secondlifycover from '../assets/Cover secondlify.svg'
import Foto1 from '../assets/Seconlify (1).svg'

const Secondlify = () => {
  return (
    <section className='overflow-hidden Secondlify'>
      <div className='w-screen relative '>
        <div className="flex justify-center">
          <div className=' smartphone:px-0 smartphone:mx-10'>
            <div className='gap-y-10 grid grid-cols-1  smartphone:w-[300px]'>
              <img className='z-10' src={Secondlifycover} />
        
              <img className='relative bottom-[110px]'src={Foto1} />
              
           
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Secondlify
