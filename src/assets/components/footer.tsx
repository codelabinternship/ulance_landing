

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md flex items-center justify-center text-white font-bold text-lg">
              U
            </div>
            <span className="ml-2 text-xl font-semibold">UZLANCE</span>
          </div>
          <p className="text-gray-400 text-sm">
            Создаем цифровые решения, которые помогают бизнесу расти и развиваться в современном мире.
          </p>
          <div className="flex gap-3 mt-4">
            <div className="w-8 h-8 bg-gray-700 rounded-md" />
            <div className="w-8 h-8 bg-gray-700 rounded-md" />
            <div className="w-8 h-8 bg-gray-700 rounded-md" />
            <div className="w-8 h-8 bg-gray-700 rounded-md" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">О нас</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Наша команда</a></li>
            <li><a href="#">Проекты</a></li>
            <li><a href="#">Отзывы</a></li>
            <li><a href="#">Карьера</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Услуги</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Веб-разработка</a></li>
            <li><a href="#">Мобильные приложения</a></li>
            <li><a href="#">Создание ботов</a></li>
            <li><a href="#">Консультации</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Контакты</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <span className="text-white font-medium">Телефон:</span><br />
              +998 (95) 010 44 13
            </li>
            <li>
              <span className="text-white font-medium">Email:</span><br />
              info@uzlance.uz
            </li>
            <li>
              <span className="text-white font-medium">Адрес:</span><br />
              Ташкент, Узбекистан
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm">
        © 2024 UZLANCE. Все права защищены. Создано с ❤️ в Узбекистане
      </div>
    </footer>
  );
};

export default Footer;


































































