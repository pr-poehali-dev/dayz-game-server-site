import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 font-['Oswald']">
            Контакты
          </h1>
          <p className="text-xl text-gray-300">
            Связь с командой THE LAST SUNRISE
          </p>
        </div>

        {/* Main Contact - Discord */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <Icon
              name="MessageCircle"
              className="text-white mx-auto mb-4"
              size={64}
            />
            <h2 className="text-3xl font-bold text-white mb-4">
              Присоединяйся к нашему Discord!
            </h2>
            <p className="text-purple-100 mb-6">
              Основной способ связи с администрацией и сообществом сервера
            </p>
            <a
              href="https://discord.gg/up3YEjPT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Icon name="ExternalLink" className="mr-3" size={20} />
              discord.gg/up3YEjPT
            </a>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20 text-center">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Общий чат</h3>
            <p className="text-gray-300 mb-4">Обсуждение игры, поиск команды</p>
            <div className="text-green-400 font-medium">#general</div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20 text-center">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="AlertTriangle" className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Поддержка</h3>
            <p className="text-gray-300 mb-4">Технические проблемы, вопросы</p>
            <div className="text-red-400 font-medium">#support</div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20 text-center">
            <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="FileText" className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Администрация</h3>
            <p className="text-gray-300 mb-4">Жалобы, апелляции, предложения</p>
            <div className="text-yellow-400 font-medium">#admin-help</div>
          </div>
        </div>

        {/* Server Info */}
        <div className="bg-slate-800/30 rounded-lg p-8 border border-purple-500/20 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Icon name="Server" className="text-blue-400 mr-3" size={28} />
            Информация о сервере
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-slate-700">
                <span className="text-gray-300">IP адрес:</span>
                <span className="text-white font-mono">
                  109.248.148.34:2302
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-700">
                <span className="text-gray-300">Название:</span>
                <span className="text-white">THE LAST SUNRISE PVP</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-700">
                <span className="text-gray-300">Версия DayZ:</span>
                <span className="text-white">1.21</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-700">
                <span className="text-gray-300">Максимум игроков:</span>
                <span className="text-white">80</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-slate-700">
                <span className="text-gray-300">Время рестарта:</span>
                <span className="text-white">Каждые 4 часа</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-700">
                <span className="text-gray-300">Часовой пояс:</span>
                <span className="text-white">UTC+3 (МСК)</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-700">
                <span className="text-gray-300">Режим:</span>
                <span className="text-white">1PP PVP Hardcore</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-700">
                <span className="text-gray-300">Карта:</span>
                <span className="text-white">Chernarus</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Form */}
        <div className="bg-slate-800/30 rounded-lg p-8 border border-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Icon name="Send" className="text-purple-400 mr-3" size={28} />
            Быстрая связь
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Email (необязательно)"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
              />
              <select className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white">
                <option>Выберите тип обращения</option>
                <option>Техническая поддержка</option>
                <option>Жалоба на игрока</option>
                <option>Предложение</option>
                <option>Другое</option>
              </select>
            </div>
            <div className="space-y-4">
              <textarea
                placeholder="Ваше сообщение"
                rows={6}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
              ></textarea>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg transition-colors">
                Отправить сообщение
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
