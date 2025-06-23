import Icon from "@/components/ui/icon";

const ServerInfo = () => {
  const serverStats = [
    { label: "Игроков онлайн", value: "47/80", icon: "Users" },
    { label: "Время рестарта", value: "4 часа", icon: "Clock" },
    { label: "Режим", value: "1PP PVP", icon: "Eye" },
    { label: "Сложность", value: "Хардкор", icon: "Zap" },
  ];

  const modifications = [
    "Expansion Pack",
    "Trader",
    "BaseBuilding Plus",
    "Weapon Redux",
    "Medical Plus",
    "Car Cover",
    "Advanced Groups",
    "Community Online Tools",
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {serverStats.map((stat, index) => (
          <div
            key={index}
            className="bg-slate-800/50 rounded-lg p-4 border border-purple-500/20"
          >
            <div className="flex items-center space-x-2 mb-2">
              <Icon
                name={stat.icon as any}
                className="text-purple-400"
                size={20}
              />
              <span className="text-gray-300 text-sm">{stat.label}</span>
            </div>
            <div className="text-white font-bold text-lg">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="bg-slate-800/30 rounded-lg p-6 border border-purple-500/20">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Icon name="Package" className="text-purple-400 mr-2" size={24} />
          Модификации сервера
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {modifications.map((mod, index) => (
            <div
              key={index}
              className="bg-slate-700/50 rounded px-3 py-2 text-sm text-gray-300"
            >
              {mod}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServerInfo;
