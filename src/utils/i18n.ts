import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  uz: {
    translation: {
      "Our team": "Bizning jamoamiz",
      "About us": "Biz haqimizda ",
      "Projects": "Loyihalar ",
      "Innovative solutions": "Innovatsion echimlar",
      "A digital solution for any business": "Har qanday biznes uchun raqamli echim",
      "apps that help your business grow and thrive in the digital world": "sizning biznesingiz raqamli dunyoda o'sishi va gullab-yashnashiga yordam beradigan ilovalar",
      "We create modern web solutions, bots, and mobile apps": "Zamonaviy veb-yechimlar, botlar va mobil qurilmalarni yaratish",
      "Contact us": "Biz bilan bog'laning",
      "To learn more": "Ko'proq bilib oling",
      "Clients": "Mijozlar",
      "Support": "Qo'llab-quvvatlash",
      "Our services": "Bizning xizmatlar",
      "What we offer": "Biz nimani taklif qilamiz",
      "A full range of digital services to help you grow your business": "Biznesingizni rivojlantirish uchun to'liq raqamli xizmatlar",
      "Creating Bots": "Botlarni Yaratish",
      "Website development": "Veb-saytlarni ishlab chiqish",
      "Mobile applications": "Mobil ilovalar",
      "Automation": "Avtomatlashtirish",
      "Smart chatbots for business process automation": "Biznes jarayonlarini avtomatlashtirish uchun aqlli chatbotlar",
      "Effective and adaptive websites for any task": "Har qanday vazifa uchun samarali va sezgir saytlar",
      "Native and cross-platform solutions for iOS and Android": "IOS va Android uchun mahalliy va platformalararo echimlar",
      "Integration and optimization of business processes using AI": "AI bilan biznes jarayonlarini birlashtirish va optimallashtirish",
      "Professionals in their field": "O'z sohasidagi professionallar",
      "Experienced developers and designers who are ready to bring your ideas to life": "Sizning g'oyalaringizni hayotga tatbiq etishga tayyor bo'lgan tajribali ishlab chiquvchilar va dizaynerlar",
      "Portfolio": "Portfoliyo",
      "Our projects": "Bizning loyihalar",
      "Successfully implemented projects for various business sectors": "Biznesning turli sohalari uchun muvaffaqiyatli amalga oshirilgan loyihalar",
      "Contacts": "Aloqa",
      "Are you ready to discuss your project? Write to us and we will contact you soon": "Loyihangizni muhokama qilishga tayyormisiz? Bizga yozing va biz tez orada siz bilan bog'lanamiz",
      "Name": "Ism",
      "Firstname": "Familiya",
      "Email": "Elektron pochta",
      "Massage": "Xabarnoma",
      "Send the Massage": "Xabarnoma jo`natish",
      "We create digital solutions that help businesses grow and develop in today's world.": "Biz bugungi dunyoda biznesning o'sishi va rivojlanishiga yordam beradigan raqamli echimlarni yaratamiz.",
      "Reviews": "Sharhlar",
      "Career": "Karyera",
      "Services": "Xizmatlar",
      "Consultations": "Maslahat",
      "Number": "Raqam",
      "Adress": "Manzil",
    }
  },
  ru: {
    translation: {
      "Our team": "Наша команда",
      "About us": "О нас",
      "Projects": "Проекты",
      "Innovative solutions": "Инновационные решения",
      "A digital solution for any business": "Цифровое решение для любого бизнеса",
      "apps that help your business grow and thrive in the digital world": "приложения, которые помогают вашему бизнесу расти и процветать в цифровом мире",
      "We create modern web solutions, bots, and mobile apps": "Мы создаём современные веб-решения, ботов и мобильные приложения",
      "Contact us": "Свяжитесь с нами",
      "To learn more": "Узнать больше",
      "Clients": "Клиенты",
      "Support": "Поддержка",
      "Our services": "Наши услуги",
      "What we offer": "Что мы предлагаем",
      "A full range of digital services to help you grow your business": "Полный спектр цифровых услуг для развития вашего бизнеса",
      "Creating Bots": "Создание ботов",
      "Website development": "Разработка сайтов",
      "Mobile applications": "Мобильные приложения",
      "Automation": "Автоматизация",
      "Smart chatbots for business process automation": "Умные чат-боты для автоматизации бизнес-процессов",
      "Effective and adaptive websites for any task": "Эффективные и адаптивные сайты для любых задач",
      "Native and cross-platform solutions for iOS and Android": "Нативные и кроссплатформенные решения для iOS и Android",
      "Integration and optimization of business processes using AI": "Интеграция и оптимизация бизнес-процессов с использованием ИИ",
      "Professionals in their field": "Профессионалы своего дела",
      "Experienced developers and designers who are ready to bring your ideas to life": "Опытные разработчики и дизайнеры, готовые воплотить ваши идеи в жизнь",
      "Portfolio": "Портфолио",
      "Our projects": "Наши проекты",
      "Successfully implemented projects for various business sectors": "Успешно реализованные проекты для различных отраслей бизнеса",
      "Contacts": "Контакты",
      "Are you ready to discuss your project? Write to us and we will contact you soon": "Готовы обсудить ваш проект? Напишите нам, и мы скоро с вами свяжемся",
      "Name": "Имя",
      "Firstname": "Фамилия",
      "Email": "Электронная почта",
      "Massage": "Сообщение",
      "Send the Massage": "Отправить сообщение",
      "We create digital solutions that help businesses grow and develop in today's world.": "Мы создаем цифровые решения, которые помогают бизнесу расти и развиваться в современном мире.",
      "Reviews": "Отзывы",
      "Career": "Карьера",
      "Services": "Услуги",
      "Consultations": "Консультации",
      "Number": "Номер",
      "Adress": "Адрес"

    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "uz", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;