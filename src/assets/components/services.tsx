const services = [
  { title: "Создание Ботов", description:"Умные чат-боты для  автоматизации бизнес-процессов", color: "bg-blue-500" },
  { title: "Разработка веб-сайтов", description:"Умные чат-боты для автоматизации бизнес-процессов", color: "bg-purple-500" },
  { title: "Мобильные приложения", description:"Умные чат-боты для автоматизации бизнес-процессов", color: "bg-green-500" },
  { title: "Автоматизация", description:"Умные чат-боты для автоматизации бизнес-процессов", color: "bg-orange-500" },
];

function Services() {
  return (
<section>
  <div className="flex justify-center">
  <h3 className="inline-block text-sm text-[#93C5FD] bg-[#42537C] px-4 py-2 mb-[30px] text-center rounded-full">
    Наши услуги
  </h3>
  </div>

  <h2 className="text-3xl font-bold text-center mb-4">
    Что мы предлагаем
  </h2>

  <p className="text-[#94A3B8] font-normal text-center mb-[60px]">
    Полный спектр цифровых услуг для развития вашего бизнеса
  </p>

  <div className="grid md:grid-cols-4 gap-6">
    {services.map((service, i) => (
      <div key={i} className="p-6 rounded-xl bg-gray-700">
        <div className={`w-12 h-12 mb-4 mx-auto rounded ${service.color}`}></div>

        <h4 className="text-xl font-semibold text-center mb-[20px]">
          {service.title}
        </h4>

        <h4 className="text-xl font-normal text-center mb-[20px]">
          {service.description}
        </h4>

        <div className="w-[218px] h-[218px] bg-gray-600 rounded mx-auto mb-[40px]"></div>
      </div>
    ))}
  </div>
</section>


  );
}

export default Services;
