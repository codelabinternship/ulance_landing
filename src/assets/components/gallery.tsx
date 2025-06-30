
import { useState } from 'react';

import { useTranslation } from 'react-i18next';

const Gallery = () => {
   const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const data = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    title: `Card ${index + 1}`,
  }));

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pageItems = data.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <section className="bg-[#1A2436] min-h-screen text-white p-6">
      <div id="projects" className="flex justify-center">
        <h3 className="inline-block text-sm text-[#86EFAC] bg-[#1E4741] px-4 py-2 mb-[30px] text-center rounded-full">
          {t('Portfolio')}
        </h3>
      </div>

      <h2 className="text-3xl font-bold text-center mb-4">
      {t('Our projects')}
      </h2>

      <p className="text-[#94A3B8] font-normal text-center mb-[64px]">
        {t('Successfully implemented projects for various business sectors')}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pageItems.map((item) => (
          <div
            key={item.id}
            className="bg-purple-200 text-purple-800 h-60 flex flex-col justify-center items-center rounded-md shadow-md"
          >
            <p>{item.title}</p>
          </div>
        ))}
      </div>
{/* 
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 rounded hover:bg-gray-600 disabled:opacity-50"
        >
          {"<"}
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${page === i + 1
                 ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                 : '0 hover:bg-gray-600'
              }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-3 py-1 rounded hover:bg-gray-600 disabled:opacity-50"
        >
          {">"}
        </button>
      </div> */}
    </section>
  );
};

export default Gallery;
