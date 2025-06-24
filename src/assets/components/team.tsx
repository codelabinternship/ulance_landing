
const team = [
  { name: "Алексей Иванов", title: "Full-stack Developer" },
  { name: "Мария Петрова", title: "UI/UX Designer" },
  { name: "Дмитрий Смирнов", title: "Mobile Developer" },
  { name: "Анна Козлова", title: "Project Manager" },
];

function Team() {
  return (
    
    <section className="py-16 px-4 text-center">

       <div className="flex justify-center">
        <h3 className="inline-block text-sm text-[#D8B4FE] bg-[#382F5D] px-4 py-2 mb-[30px] text-center rounded-full">
          Наша команда
        </h3>
      </div>
      <h2 className="text-3xl font-bold mb-12">Профессионалы своего дела</h2>
      <p className="text-[#94A3B8] font-normal text-center mb-[60px]">
        Опытные разработчики и дизайнеры, готовые воплотить ваши идеи <br /> в жизнь
      </p>
      <div className="grid md:grid-cols-4 gap-6">
        {team.map(({ name, title }, i) => (
          <div key={i} className="p-4 rounded-xl bg-[#888C96]">
            <div className="w-20 h-20 bg-[#E5D3F8] rounded-full mx-auto mb-4"></div>
            <h4 className="font-semibold">{name}</h4>
            <h5 className="text-sm text-[#60A5FA]">{title}</h5>
            <div className="text-yellow-400 mt-2">★★★★★</div>
          </div>
        ))}
      </div> 
    </section>
  );
}

export default Team;
