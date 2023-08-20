import Foto1 from '../assets/Herb Enthusiast/Herb 1.png'



const Herb = () => {
  return (
    <section className='overflow-hidden herb'>
        <div className='w-screen relative '>
          <div className="flex justify-center">
          <div className='px-[100px] mx-[100px] mt-10 smartphone:px-0 smartphone:mx-10'>
            <div className='smartphone:my-44 w-[700px] smartphone:w-[300px]'>
                <img src={Foto1} alt="Gambar 1" className='shadow-lg shadow-black' />
             
              
            </div>
          </div>
        </div>
    </div>
    </section>
  )
}

export default Herb