import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();
  
  return (
    <section className="relative text-center px-4 py-20 overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/qooly_video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
  
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

    
      <div className="relative z-20">
        <button className="text-sm text-[#93C5FD] border-1 rounded-4xl bg-[#42537C] p-2.5 mb-[30px]">
          🚀 {t('Innovative solutions')}
        </button>
        <h1 className="text-4xl text-[#DBEAFE] md:text-5xl font-bold mb-[26px]">
          {t('A digital solution for any business')}<br />
        </h1>
        <p className="font-normal mb-[48px] text-[#CBD5E1]">
          {t('apps that help your business grow and thrive in the digital world')}<br />
          {t('We create modern web solutions, bots, and mobile apps')}
        </p>
        <div className="flex justify-center gap-4 mb-[60px]">
          <button className="bg-[#9333EA] px-6 py-2.5 rounded-4xl">
            <a href="#form">{t('Contact us')}</a>
          </button>
          <button className="bg-[#FFFFFF] px-4 py-2.5 rounded-4xl text-black">
            <a href="#services">{t('To learn more')}</a>
          </button>
        </div>
        <div className="flex justify-center space-x-10 mt-6 text-lg font-semibold sm:mb-[150px] text-[#94A3B8]">
          <div><span className="text-blue-400">100+</span><br />{t('Projects')}</div>
          <div><span className="text-purple-400">50+</span><br />{t('Clients')}</div>
          <div><span className="text-green-400">24/7</span><br />{t('Support')}</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
