import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS style for AOS
import { useEffect } from 'react';

const Projectitem = ({title, gambar, projectURL, project}) => {

  useEffect(() => {
    AOS.init({
      offset: 300, // Offset dari bottom viewport sebelum animasi dimulai
      duration: 800, // Durasi animasi (dalam milidetik)
      easing: 'ease-in-sine', // Jenis easing yang digunakan
      
    });
  }, []); // Pastikan useEffect memiliki array kosong untuk menjalankan AOS.init() hanya sekali saat komponen di-mount

  return (
  
    <div className="relative flex items-center justify-center h-full w-full shadow-lg shadow-[#61677A] rounded-xl group hover:bg-slate-600" data-aos="zoom-in">
    <img src={gambar} 
    alt="project 1"
    className="rounded-xl group-hover:opacity-10" />
    <div className="hidden group-hover:block absolute">
    <h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
    <p className="pb-4 pt-2 text-white text-center">{project}</p>
    <a href={projectURL} target='_blank' rel="noopener noreferrer">
      <p className="text-center py-3 rounded-lg bg-white text-black font-bold text-lg cursor-pointer">More info</p>
    </a>
    </div>
  </div>

  )
}

export default Projectitem