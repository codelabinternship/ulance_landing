function Form() {
  return (
    <section>
      <div className="flex justify-center">
        <h3 className="inline-block text-sm text-[#93C5FD] bg-[#1E345B] px-4 py-2 mb-[30px] text-center rounded-full mt-4">
          Контакты
        </h3>
      </div>

      <h2 className="text-3xl font-bold text-center mb-4 ">
        Связаться с нами
      </h2>

      <p className="text-[#94A3B8] font-normal text-center mb-[64px]">
        Готовы обсудить ваш проект? Напишите нам, и мы свяжемся с вами в <br />
        ближайшее время
      </p>
      <div className="border-2 w-[672px] h-[470px] ml-[384px]  mb-10 bg-[#8B9099]">
        <p className="mt-[33px] ml-[33px]">Имя</p>
        <button className="border-1 w-[291px] h-[40px] bg-[#5F6977] mt-[10px] ml-[33px] border-black rounded-lg"></button>
        <p className="mt-[10px] ml-[33px]">Фамилия</p>
        <button className="border-1 w-[291px] h-[40px] bg-[#5F6977] mt-[8px] ml-[33px] border-black rounded-lg"></button>
        <p className="mt-[10px] ml-[33px]">Email</p>
        <button className="border-1 w-[291px] h-[40px] bg-[#5F6977] mt-[8px] ml-[33px] border-black rounded-lg"></button>
        <p className="mt-[10px] ml-[33px]">Сообщение</p>
        <button className="border-1 w-[606px] h-[120px] bg-[#5F6977] mt-[8px] ml-[33px] border-black rounded-lg"></button>
      </div>

    </section>
  )
}
export default Form