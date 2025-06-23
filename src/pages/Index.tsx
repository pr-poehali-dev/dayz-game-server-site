import Navigation from "@/components/Navigation";
import ServerInfo from "@/components/ServerInfo";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Navigation />

      <main className="relative">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-purple-900/20 to-orange-900/20 py-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Oswald']">
              THE LAST SUNRISE
            </h1>
            <p className="text-xl md:text-2xl text-purple-300 mb-4">
              PVP • Your last day • 1PP
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Добро пожаловать на самый атмосферный сервер DayZ в России.
              Выживай в мире, где каждый день может стать последним.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/up3YEjPT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Присоединиться к Discord
              </a>
              <button className="inline-flex items-center px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors">
                <Icon name="Download" className="mr-2" size={20} />
                Скачать моды
              </button>
            </div>
          </div>
        </div>

        {/* Server Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ServerInfo />
        </div>

        {/* Features Section */}
        <div className="bg-slate-800/30 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Особенности сервера
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sword" className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Хардкорный PVP
                </h3>
                <p className="text-gray-300">
                  Настоящие сражения без компромиссов
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Eye" className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Только 1PP
                </h3>
                <p className="text-gray-300">
                  Максимальное погружение в атмосферу
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Активное сообщество
                </h3>
                <p className="text-gray-300">Более 1000 игроков в Discord</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
