import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Administration = () => {
  const admins = [
    {
      name: "SunriseOwner",
      role: "Владелец сервера",
      discord: "SunriseOwner#1234",
      status: "online",
    },
    {
      name: "LastAdmin",
      role: "Главный администратор",
      discord: "LastAdmin#5678",
      status: "online",
    },
    {
      name: "DayZModer",
      role: "Модератор",
      discord: "DayZModer#9012",
      status: "away",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 font-['Oswald']">
            Администрация
          </h1>
          <p className="text-xl text-gray-300">
            Команда управления THE LAST SUNRISE
          </p>
        </div>

        {/* Admin Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Icon name="Crown" className="text-yellow-400 mr-3" size={28} />
            Команда администраторов
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admins.map((admin, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {admin.name}
                    </h3>
                    <p className="text-sm text-purple-300">{admin.role}</p>
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      admin.status === "online"
                        ? "bg-green-400"
                        : "bg-yellow-400"
                    }`}
                  ></div>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Icon name="MessageCircle" size={16} />
                  <span className="text-sm">{admin.discord}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Forms */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-800/30 rounded-lg p-8 border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Icon
                name="AlertCircle"
                className="text-red-400 mr-3"
                size={24}
              />
              Подать жалобу
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Ваш игровой ник"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="Ник нарушителя"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
              />
              <textarea
                placeholder="Описание нарушения"
                rows={4}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
              ></textarea>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition-colors">
                Отправить жалобу
              </button>
            </div>
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Icon name="FileText" className="text-blue-400 mr-3" size={24} />
              Подать апелляцию
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Ваш игровой ник"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="Номер бана/причина"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
              />
              <textarea
                placeholder="Объяснение ситуации"
                rows={4}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
              ></textarea>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors">
                Отправить апелляцию
              </button>
            </div>
          </div>
        </div>

        {/* Rules */}
        <div className="bg-slate-800/30 rounded-lg p-8 border border-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Icon
              name="ScrollText"
              className="text-purple-400 mr-3"
              size={28}
            />
            Административные правила
          </h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <p>
                Использование читов, эксплойтов или багов = перманентный бан
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <p>Токсичное поведение в чате или голосовой связи = мут/бан</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <p>Гриферство, разрушение чужих построек без RP причины = бан</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">4</span>
              </div>
              <p>
                Нарушение игровой атмосферы (мета-игра) = предупреждение/кик
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Administration;
