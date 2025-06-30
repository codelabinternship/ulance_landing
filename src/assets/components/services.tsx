import { useTranslation } from 'react-i18next';
import RobotImage from '../../assets/images/robot.svg'
import InternetImage from '../../assets/images/internet.svg'
import MobileImage from '../../assets/images/mobile.svg'
import ChaqmooqImage from '../../assets/images/chaqmoq.svg'
function Services() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("Creating Bots"),
      description: t("Smart chatbots for business process automation"),
      color: "bg-blue-500",
      image: RobotImage
    },
    {
      title: t("Website development"),
      description: t("Effective and adaptive websites for any task"),
      color: "bg-purple-500",
      image: InternetImage
    },
    {
      title: t("Mobile applications"),
      description: t("Native and cross-platform solutions for iOS and Android"),
      color: "bg-green-500",
      image: MobileImage
    },
    {
      title: t("Automation"),
      description: t("Integration and optimization of business processe using AI"),
      color: "bg-orange-500",
      image: ChaqmooqImage
    }
  ];

  return (
    <section className='px-6'>
      <div id="services" className="flex justify-center">
        <h3 className="inline-block text-sm text-[#93C5FD] bg-[#42537C] px-4 py-2 mb-[30px] text-center rounded-full">
          {t("Our services")}
        </h3>
      </div>

      <h2 className="text-3xl font-bold text-center mb-4">
        {t("What we offer")}
      </h2>

      <p className="text-[#94A3B8] font-normal text-center mb-[60px]">
        {t("A full range of digital services to help you grow your business")}
      </p>

      <div className="grid md:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <div key={i} className="p-6 rounded-xl bg-[#8B9099]">
            <div className={`w-12 h-12 mb-4 mx-auto rounded ${service.color}`}>
              <img className='p-2' src={service.image} alt=""  />
            </div>

            <h4 className="text-xl font-semibold text-center mb-[20px]">
              {service.title}
            </h4>

            <p className="text-center text-[#CBD5E1] mb-[20px]">
              {service.description}
            </p>

            <div className="w-[218px] h-[218px] bg-[#DACFE9] rounded mx-auto mb-[40px]"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
