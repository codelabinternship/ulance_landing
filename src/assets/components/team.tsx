import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from 'react-i18next';

const teamData = [
  {
    name: "Odiljonov Behruz",
    role: "Frontend Developer",
    Image: '/bexruz-img.jpg',
  },
  {
    name: "Rustamov Ibrohim",
    role: "Frontend Developer",
    Image: '/ibrohim-img.jpg',
  },
  {
    name: "Azamova Laziza",
    role: "Frontend Developer",
    Image: '/laziza-img.jpg',
  },
  {
    name: "Abduraxmonov Sharif",
    role: "Project Manager",
    Image: '/sharif_img.jpg',
  },
  {
    name: "Xo`jayev Temur",
    role: "Team Leader",
    Image: '/temur-img.jpg',
  },
  {
    name: "Raximbayev Javohir ",
    role: "Backend Developer",
    Image: '/javohir-img.jpg',
  },
  {
    name: "Rahmatjonov Abdulloh",
    role: "Data Scientist", 
    Image: '/abdullox-img.jpg',
  },
  {
    name: "Xudaykulova Diyora",
    role: "Designer", 
    Image: '/diyora.png',
  },
];

function Team() {
  const { t } = useTranslation();
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(4);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

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
    <div id="team" className="w-full px-6 py-10 cursor-pointer">
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
          className={`absolute left-0 z-10 p-2 rounded-full text-whiten bg-gray-800 hover:bg-[#3F4E6B] transition-color  ${
            startIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-700"
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
              <div className="mx-auto w-[100px] h-[100px] rounded-full overflow-hidden mb-4">
                <img
                  className="object-cover h-full w-full rounded-full"
                  src={person.Image}
                  alt={person.name}
                />
              </div>
              <h3 className="text-lg font-semibold mt-5">{person.name}</h3>
              <p className="text-blue-400 text-sm mb-2">{person.role}</p>
            </div>
          ))}
        </div>

        <button  
          onClick={handleNext}
          disabled={startIndex + cardsToShow >= teamData.length}
          className={`absolute right-0 z-10 bg-gray-800  p-2 rounded-full text-white shadow-md transition cursor-pointer ${
            startIndex + cardsToShow >= teamData.length
              ? "opacity-30 cursor-pointer"
              : "hover:bg-gray-700"
          }`}
          aria-label="Next"
        >
          <ChevronRight className="cursor-pointer" size={28} />
        </button>
      </div>
    </div>
  );
}

export default Team;
