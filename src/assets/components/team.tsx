import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from 'react-i18next';



const teamData = [
  {
    name: "Odiljonov Behruz",
    role: "Backend Developer",
    Image: '/bexruz-img.jpg'
  },

  {
    name: "Rustamov Ibrohim",
    role: "Frontend Developer",
    Image: '/ibrohim-img.jpg'
  },

  {
    name: "Azamova Laziza",
    role: "Frontend Developer",
    Image: '/laziza-img.jpg'
   
   },

  {
    name: "Abduraxmonov Sharif",
    role: "Project Manager",
    Image : '/sharif_img.jpg'
  },

  {
    name: "Xo`jayev Temur",
    role: "Team Leader",
    Image: '/temur-img.jpg'
  },

  {
    name: "Javohir Raximbayev",
    role: "Backend Developer",
    Image: '/javohir-img.jpg'
  },

  // {
  //   name: "Николай Фёдоров",
  //   role: "QA Engineer",
  // },


  // {
  //   name: "Ольга Алексеева",
  //   role: "Data Scientist",
  // },

  // {
  //   name: "Павел Морозов",
  //   role: "Product Owner",
  // },

];

function Team() {
  const { t } = useTranslation();
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 4;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, teamData.length - cardsToShow)
    );
  };

  const visibleCards = teamData.slice(startIndex, startIndex + cardsToShow);

  return (
    <div id="team" className="w-full px-6 py-10">
      <div className="flex justify-center">
        <h3 className="inline-block text-sm text-[#D8B4FD] px-4 py-2 mb-6 text-center rounded-2xl bg-[#382F5D]">
          {t("Our team")}
        </h3>
      </div>

      <h2 className="text-3xl font-bold text-center mb-4">
        {t("Professionals in their field")}
      </h2>

      <p className="text-[#94A3B8] font-normal text-center mb-16">
        {t("Experienced developers and designers who are ready to bring your ideas to life")}
      </p>

      <div className="relative flex items-center justify-center">

        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`absolute left-0 z-10 bg-gray-800 p-2 rounded-full text-white shadow-md transition ${startIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-700"
            }`}
          aria-label="Previous"
        >
          <ChevronLeft size={28} />
        </button>


        <div className="flex space-x-6 overflow-hidden px-12">
          {visibleCards.map((person, index) => (
            <div
              key={`${person.name}-${index}`}
              className="bg-gray-700 rounded-xl w-72 p-6 text-center text-white relative shadow-lg"
            >
              <div className="mx-auto w-[100px] h-20 rounded-full mb-4 ">
                <img className="
                 object-cover h-[100px] w-[100px] rounded-full " src={person.Image} alt="" />
              </div>
              <h3 className="text-lg font-semibold mt-5">{person.name}</h3>
              <p className="text-blue-400 text-sm mb-2">{person.role}</p>

              <div className="flex items-center justify-center space-x-1 text-yellow-400 text-sm">
                {/* {Array.from({ length: 5 }, (_, i) => (
                  // <span key={i}>{i < Math.round(person.rating) ? "★" : "☆"}</span>
                ))} */}
                {/* <span className="text-white ml-1 text-xs">{person.rating.toFixed(1)}</span> */}
              </div>
            </div>
          ))}
        </div>


        <button
          onClick={handleNext}
          disabled={startIndex + cardsToShow >= teamData.length}
          className={`absolute right-0 z-10 bg-gray-800 p-2 rounded-full text-white shadow-md transition ${startIndex + cardsToShow >= teamData.length
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-gray-700"
            }`}
          aria-label="Next"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}

export default Team;
