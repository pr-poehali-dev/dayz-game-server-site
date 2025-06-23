import Icon from "@/components/ui/icon";

const ServerInfo = () => {
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
