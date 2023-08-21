import Hero from '../components/Hero'
import Cardskill from '../components/cardskill'
import Portfolio from '../components/Portfolio'
import Navbar from '../components/Navbar'
import Fotter from '../components/footer'
function Home() {
  return (
    <div className=' slider overflow-hidden'>
        <Navbar />
        <Hero />
        <Cardskill />
        <Portfolio />
        <Fotter />
    </div>
  )
}

export default Home