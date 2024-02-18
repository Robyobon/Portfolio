
import Video1 from '../assets/Filos.mp4'
import Video2 from '../assets/Robyobon.mp4'
import Video3 from '../assets/vid.mp4'

const Rh = () => {
  return (
    <section className='overflow-hidden video'>
      <div className='w-screen relative '>
        <div className="flex justify-center">
          <div className='px-[100px] mx-[100px] mt-10 smartphone:px-0 smartphone:mx-10'>
            <div className='gap-y-10 grid grid-cols-1 w-[700px] smartphone:w-[300px]'>
              <video controls  className='shadow-lg shadow-black'>
                <source src={Video1} type='video/mp4'/>
                maaf, browser anda tidak mendukung tag video
                </video>
              <video controls className='shadow-lg shadow-black'>
                <source src={Video2} type="video/mp4" />
                Maaf, browser Anda tidak mendukung tag video.
              </video>
              <video controls className='shadow-lg shadow-black'>
                <source src={Video3} type="video/mp4" />
                Maaf, browser Anda tidak mendukung tag video.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rh
