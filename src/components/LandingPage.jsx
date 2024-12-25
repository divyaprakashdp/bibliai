import { GiBookshelf } from "react-icons/gi";
import { MdOutlineSelfImprovement } from "react-icons/md";
import { GiSpy } from "react-icons/gi";
import { GiMaterialsScience } from "react-icons/gi";
import { BsRobot } from "react-icons/bs";
import { BiAnalyse } from "react-icons/bi";
import { VscOpenPreview } from "react-icons/vsc";
import AutoPlay from "./Autoplay";
import { Link } from "react-router-dom";

const LandingPage = () => {

  const features = [
    {
      name: "Search a book",
      icon: <>
        <GiBookshelf size={150} />
      </>
    },
    {
      name: "Genre-Specific Recommendations",
      icon: <>
        <MdOutlineSelfImprovement size={70} />
        <GiSpy size={70} />
        <GiMaterialsScience size={60} />
      </>
    },
    {
      name: "AI generated Summary",
      icon: <BsRobot size={130} />
    },
    {
      name: "Insights and Analysis",
      icon: <BiAnalyse size={130} />
    },
    {
      name: "Preview and Purchase",
      icon: <VscOpenPreview size={130} />
    },
    {
      name: "Reading Prompts",
      icon: <VscOpenPreview size={130} />
    },
    {
      name: "And More...",
      icon: null
    },

  ]

  const featurCards = () => {
    return features.map(feature => (
      <div key={feature.name} className="flex flex-col items-center justify-center text-center">
        <span className={`${feature.icon ? "text-xl" : "text-3xl"}`}>{feature.name}</span>
        <div className={`${feature.icon ? "flex" : "hidden"} text-center items-center justify-center`}>{feature.icon}</div>
      </div >
    ))
  }

  return (
    <div className="bg-[#F9C5D1] text-[#2D325B] min-h-screen justify-center items-center pt-36">
      <div className="grid md:grid-cols-6 items-center justify-center text-center font-semibold mx-[10%]">
        {/* first row */}
        <div className="border-l border-t border-r p-4 border-[#2D325B] col-span-2 col-start-4">Find Your Next Favorite Book</div>
        <div className="col-span-6 border border-[#2D325B] px-4 py-2 text-8xl font-extrabold font-[Formulacondensed] text-right  uppercase transform">Your Reading Journey Starts Here</div>
        <div className="flex col-span-3 col-start-2 items-start justify-start text-center">
          <div className="border-l border-[#2D325B] border-b px-4 py-2 ">We make book searching simple. Dive into books that captivate, challenge, and inspire you, curated with care for readers like you.
          </div>
          <div className="border-b border-r border-l border-[#2D325B] p-2 w-[50%]" >
            <AutoPlay ComponentList={featurCards()} />
          </div>

        </div>
        <div className="border-none decoration-transparent">
          <button className="group relative inline-block overflow-hidden bg-[#0d927d] py-2 px-4  md:font-medium font-bold text-4xl md:text-sm text-white ">
            <span className="absolute mb-0 flex w-full left-0 top-0 h-0 hover:origin-top transform bg-white opacity-90 transition-all duration-500 ease-out group-hover:h-full"></span>
            <span className="relative group-hover:text-[#2D325B] text-xl font-bold">
              <Link to={"/search"}>
                Explore
              </Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
