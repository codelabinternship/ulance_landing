

function Hero() {
  return (
    <section className="text-center px-4 py-20">
      <button className="text-sm text-[#93C5FD] border-1 rounded-4xl bg-[#42537C] p-2.5 mb-[30px]">🚀 Инновационные решения</button>
      <h1 className="text-4xl text-[#DBEAFE] md:text-5xl font-bold mb-[26px]">Цифровое решение для любого <br/>бизнеса!</h1>
      <p className="font-normal mb-[48px] text-[#CBD5E1]">Создаем современные веб-решения, боты и мобильные <br/> приложения, которые помогают вашему бизнесу расти и процветатье <br />в цифровом мире</p>
      <div className="flex justify-center gap-4 mb-[60px]">
          <button  className="bg-[#9333EA] px-6 py-2.5 rounded-4xl"> Связаться с нами</button>
         <button className="bg-[#FFFFFF] px-4  py-2.5 rounded-4xl text-black"> Узнать больше</button>
      </div>
      <div className="flex justify-center space-x-10 mt-6 text-lg font-semibold mb-[150px]">
        <div className="text-[#94A3B8]"><span className="text-blue-400">100+</span><br/>Проектов</div>
        <div className="text-[#94A3B8]"><span className="text-purple-400">50+</span><br/>Клиентов</div>
        <div  className="text-[#94A3B8]"><span className="text-green-400">24/7</span><br/>Поддержка</div>
      </div>
    </section>
  );
}

export default Hero;