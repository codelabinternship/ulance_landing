import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const data = [
    { id: 1, Image: '/zein.project.jpg' },
    { id: 2, Image: '' },
    { id: 3, Image: '' },
    { id: 4, Image: '' },
    { id: 5, Image: '/zein.project.jpg' },
    { id: 6, Image: '' },
  ];

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pageItems = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <section className="bg-[#1A2436] min-h-screen text-white p-6">
      <div id="projects" className="flex justify-center">
        <h3 className="inline-block text-sm text-[#86EFAC] bg-[#1E4741] px-4 py-2 mb-8 text-center rounded-full">
          {t('Portfolio')}
        </h3>
      </div>

      <h2 className="text-3xl font-bold text-center mb-4">
        {t('Our projects')}
      </h2>

      <p className="text-[#94A3B8] font-normal text-center mb-16">
        {t('Successfully implemented projects for various business sectors')}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pageItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center rounded-md"
            data-aos="flip-right"
            data-aos-delay={item.id * 100}
          >
            <img
              className="object-cover h-full w-full rounded-lg"
              src={item.Image}
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Gallery;
