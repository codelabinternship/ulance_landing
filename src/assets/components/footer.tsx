import { useTranslation } from 'react-i18next';



const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#0F172A] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md flex items-center justify-center text-white font-bold text-lg">
              U
            </div>
            <span className="ml-2 text-xl font-semibold">ULANCE</span>
          </div>
          <p className="text-gray-400 text-sm">
            {t("We create digital solutions that help businesses grow and develop in today's world.")}
          </p>
          <div className="flex gap-3 mt-4">
            <div className="w-8 h-8 bg-gray-700 rounded-md" />
            <div className="w-8 h-8 bg-gray-700 rounded-md" />
            <div className="w-8 h-8 bg-gray-700 rounded-md" />
            <div className="w-8 h-8 bg-gray-700 rounded-md" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3 cursor">
          {t('About us')}
            
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">
              {t('Our team')}
              </a></li>
            <li><a href="#">
             {t('Projects')}
              </a></li>
            <li><a href="#">
              {t('Reviews')}
              </a></li>
            <li><a href="#">
              {t('Career')}
              </a></li>

          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">
           {t('Services')}
            </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">
             {t('Website development')}
              </a></li>
            <li><a href="#" >
              {t('Mobile applications')}
            </a></li>
            <li><a href="#">
             {t('Creating Bots')}
              </a></li>
            <li><a href="#">
              {t('Consultations')}
              </a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">
            {t('Contacts')}
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <span className="text-white font-medium">
              {t('Number')}
                </span><br />
              +998 (95) 010 44 13
            </li>
            <li>
              <span className="text-white font-medium">
                {t('Email')}
              </span><br />
              info@ulance.uz
            </li>
            <li>
              <span className="text-white font-medium">
               {t('Adress')}
              </span><br />
              {t('Tashkent, Uzbekistan')}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm">
        {t('© 2024 ULANCE. All rights reserved. Created with ❤️ in Uzbekistan')}
      </div>
    </footer>
  );
};

export default Footer;


































































