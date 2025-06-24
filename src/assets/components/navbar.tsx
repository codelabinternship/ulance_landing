

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 border-b border-gray-700">
      <div className="flex "> 
        <img src="/logo.svg" alt="" />
       <div className="text-2xl font-bold">UZLANCE</div>
      </div>
      <ul className="hidden md:flex space-x-6 text-sm font-medium">
        <li><a href="#">Наша команда</a></li>
        <li><a href="#">О нас</a></li>
        <li><a href="#">Услуги</a></li>
        <li><a href="#">Проекты</a></li>
      </ul>
      <div className="flex gap-4">
      <button className="text-blue-400">+998 99 999 99 99</button>
        <button className="text-[#60A5FA] border rounded-lg px-2.5 py-1"> RU</button>
      <button className="text-[#475569] border rounded-lg px-2.5 py-1"> UZ</button>
      </div>
    </nav>
  );
}

export default Navbar;