import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import RobotImage from '../../assets/images/robot.svg';
import InternetImage from '../../assets/images/internet.svg';
import MobileImage from '../../assets/images/mobile.svg';
import ChaqmooqImage from '../../assets/images/chaqmoq.svg';

function Services() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      title: t('Creating Bots'),
      description: t('Smart chatbots for business process automation'),
      color: 'bg-blue-500',
      image: RobotImage,
    },
    {
      title: t('Website development'),
      description: t('Effective and adaptive websites for any task'),
      color: 'bg-purple-500',
      image: InternetImage,
    },
    {
      title: t('Mobile applications'),
      description: t('Native and cross-platform solutions for iOS and Android'),
      color: 'bg-green-500',
      image: MobileImage,
    },
    {
      title: t('Automation'),
      description: t('Integration and optimization of business processes using AI'),
      color: 'bg-orange-500',
      image: ChaqmooqImage,
    },
  ];

  return (
    <section className="px-6 py-10 bg-[#1A2436] text-white cursor-pointer">
      <div id="services" className="flex justify-center">
        <h3 className="inline-block text-sm text-[#93C5FD] bg-[#42537C] px-4 py-2 mb-[30px] text-center rounded-full">
          {t('Our services')}
        </h3>
      </div>

      <h2 className="text-3xl font-bold text-center mb-4">
        {t('What we offer')}
      </h2>

      <p className="text-[#94A3B8] font-normal text-center mb-[60px]">
        {t('A full range of digital services to help you grow your business')}
      </p>

      <div className="grid md:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-[#2F3B52] hover:bg-[#3F4E6B] transition-color"
            data-aos="fade-right"
            data-aos-delay={i *100} 
          >
            <div className={`w-12 h-12 mb-4 mx-auto rounded ${service.color}`}>
              <img className="p-2" src={service.image} alt={service.title} />
            </div>

            <h4 className="text-xl font-semibold text-center mb-[12px]">
              {service.title}
            </h4>

            <p className="text-center text-[#CBD5E1]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
