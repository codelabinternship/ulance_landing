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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section className="relative px-4 py-10 overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/995d39a878ffc35b5aa926d348d79b92.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10">
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
          className="relative z-10 bg-[#8C929B] p-8 rounded-xl w-full max-w-2xl mx-auto shadow-lg space-y-6"
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
                placeholder={t('Enter your first name')}
                className="w-full p-3 rounded-md bg-[#5F6877] text-white placeholder-gray-400"
                required
              />
            </div>

            <div className="w-1/2">
              <label className="block text-white mb-1">
                {t('Last name')}
              </label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder={t('Enter your last name')}
                className="w-full p-3 rounded-md bg-[#5F6877] text-white placeholder-gray-400"
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
              className="w-full p-3 rounded-md bg-[#5F6877] text-white placeholder-gray-400"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-1">
              {t('Message')}
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t('Tell us about your project...')}
              rows={4}
              className="w-full p-3 rounded-md bg-[#5F6877] text-white placeholder-gray-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md text-center font-semibold hover:opacity-90 transition"
          >
            {t('Send the Message')}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
