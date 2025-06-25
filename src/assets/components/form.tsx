import { useState } from "react";
import { useTranslation } from 'react-i18next';

function Form() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section className="px-4 py-10">
      <div id="form" className="flex justify-center">
        <h3 className="inline-block text-sm text-[#93C5FD] bg-[#1E345B] px-4 py-2 mb-6 text-center rounded-full">
         {t('Contacts')}
        </h3>
      </div>

      <h2 className="text-3xl font-bold text-center mb-4">
        {t('Contact us')}
      </h2>

      <p className="text-[#94A3B8] font-normal text-center mb-16">
      {t('Are you ready to discuss your project? Write to us and we will contact you soon')}
      </p>

      <form
        onSubmit={handleSubmit}
        className=" p-8 rounded-xl w-full max-w-2xl mx-auto shadow-lg space-y-6 bg-[#8C929B]"
      >
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-white mb-1">
              {t('Name')}
              </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Введите ваше имя"
              className="w-full p-3 rounded-md bg-[#5F6877]   text-white placeholder-gray-400"
              required
            />
          </div>

          <div className="w-1/2">
            <label className="block text-white mb-1">
              {t('Firstname')}
            </label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Введите вашу фамилию"
              className="w-full p-3 rounded-md bg-[#5F6877]   text-white placeholder-gray-400"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-white mb-1">
            {t('Email')}
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full p-3 rounded-md bg-[#5F6877]   text-white placeholder-gray-400"
            required
          />
        </div>

        <div>
          <label className="block text-white mb-1">
            {t('Massage')}
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Расскажите о вашем проекте..."
            rows={4}
            className="w-full p-3 rounded-md bg-[#5F6877]   text-white placeholder-gray-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md text-center font-semibold hover:opacity-90 transition"
        >
          {t('Send the Massage')}
        </button>
      </form>
    </section>
  );
}

export default Form;
