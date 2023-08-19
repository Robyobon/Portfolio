import gambar1 from "../assets/Desktop - 1 (1).png";
import gambar2 from "../assets/Frame 1 (7).png";
import gambar3 from "../assets/Sonokeling/banner (2).png";
import gambar4 from "../assets/11.jpg";
import gambar5 from "../assets/12.jpg";
import gambar6 from "../assets/13.jpg";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Projectitem from './Projectitem';


const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 800,
      easing: 'ease-in-sine',
    });
  }, []);

  const projects = [
    {
      title: 'Kawula Mood',
      gambar:gambar2,
      project: 'Web Design',
      projectURL: '/kawula',
      animation: 'zoom-in',
    },
    {
      title: 'Game Store',
      gambar: gambar1,
      project: 'Mobile apps Design',
      projectURL: '/gamestore', 
      animation: 'fade-left',
    },
    {
      title: 'PT.Sonokeling',
      gambar: gambar3,
      project: 'Redesign Web',
      projectURL: '/sonokeling', 
      animation: 'fade-up',
    },
    {
      title: 'Rh Logo',
      gambar: gambar4,
      project: 'logo design',
      projectURL: '/rh', 
      animation: 'fade-right',
    },
    {
      title: 'Palm Beach Logo',
      gambar: gambar5,
      project: 'logo design',
      projectURL: '/palmbeach', 
      animation: 'fade-left',
    },
    {
      title: 'Herb Enthusiast Logo',
      gambar: gambar6,
      project: 'logo design',
      projectURL: '/herb', 
      animation: 'fade-up',
    },
  ];

  return (
    <div className="w-full" id="portfolio">
      <div className="px-12 desktop:px-20 py-10">
        <h2 className="desktop:px-24 desktop:text-4xl text-center tablet:text-2xl text-3xl leading-8 font-bold tracking-tight text-white pb-12" data-aos="zoom-in">
          Portfolio
        </h2>
        <div className="desktop:grid desktop:grid-cols-3 desktop:gap-8 grid grid-cols-1 gap-10 tablet:grid-cols-2 tablet:grid">
          {projects.map((project, index) => (
        <Link to={project.projectURL} key={index} target="_blank" rel="noopener noreferrer">
        <Projectitem
          title={project.title}
          gambar={project.gambar}
          project={project.project}
          projectURL={project.projectURL}
          data-aos={project.animation}
        />
      </Link>
      
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;