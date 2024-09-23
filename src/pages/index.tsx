import AboutMe from "@/components/AboutMe";
import Academics from "@/components/Academics";
import Contest from "@/components/Contest";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import Profile from "@/components/Profile";
import Research from "@/components/Research";
import useOnClickOutside from "@/hooks";
import Head from "next/head";
import { useRef, useState } from "react";

export default function Home() {
  const [state, setState] = useState({
    experience: true,
    research: false,
    aboutMe: false,
    academics: false,
    contests: false,
  });
  const handleTabChange = (tab: string) => {
    setState({
      experience: false,
      research: false,
      aboutMe: false,
      academics: false,
      contests: false,
      [tab]: true,
    });
    // setIsOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));
  return ( <>
   <Head>
        <title>Mamun | Info</title>
        <meta name="description" content="This is a description of the page content." />
        <meta property="og:title" content="Japan Professor" />
      </Head>
  <div
      className="bg-gray-200  bg-[url('https://s3.ap-south-1.amazonaws.com/bucket.portfolio.mamun/bgv3.png')] 
     bg-fixed bg-cover bg-center"
    >

      <div className="relative inline-block  pt-[2%] pl-[2%] md:hidden">

        <img
          onClick={() => setIsOpen(!isOpen)}
          src="./menu.png"
          alt="menu"
          className="w-[40px] h-[40px] hover:scale-110 hover:cursor-pointer"
        />

        {/* Dropdown menu */}
        {isOpen && (
          <div  ref={ref} className=" absolute right-0 w-10/12 mt-2   rounded-md shadow-lg z-20">
            <div className="py-1 items-start bg-slate-800" >
              <button
                type="button"
                onClick={() => handleTabChange('experience')}
                className={`nav-button ${state.experience ? 'focus' : ''}`}
              >              Experience
              </button>
              <button type="button" onClick={() => handleTabChange("research")} className={`nav-button ${state.research ? 'focus' : ''}`}>
                Research
              </button>

              <button type="button" onClick={() => handleTabChange("aboutMe")} className={`nav-button ${state.aboutMe ? 'focus' : ''}`}>About Me</button>

              <button type="button" onClick={() => handleTabChange("academics")} className={`nav-button ${state.academics ? 'focus' : ''}`}>Academics</button>
              <button type="button" onClick={() => handleTabChange("contests")} className={`nav-button ${state.contests ? 'focus' : ''}`}>Contests</button>

            </div>
          </div>
        )}
      </div>

      <Profile />

      <Navbar handleTabChange={handleTabChange} />
      {state.experience && <ProfessionalExperience />}

      {state.aboutMe && <AboutMe />}
      {state.academics && <Academics />}
      {state.research && <Research />}
      {state.contests && <Contest />}
      <Footer />
    </div>
  </>
    
  );
}
