import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Guides = () => {
  const guides = [
    {
      title: "Начало игры",
      description: "Первые шаги на сервере, спавн и базовые принципы выживания",
      icon: "Play",
      difficulty: "Новичок",
    },
    {
      title: "Правила сервера",
      description: "Обязательные правила поведения на THE LAST SUNRISE",
      icon: "Shield",
      difficulty: "Важно",
    },
    {
      title: "Строительство базы",
      description: "Гайд по постройке надежного укрытия и защиты",
      icon: "Home",
      difficulty: "Средний",
    },
    {
      title: "PVP тактики",
      description: "Эффективные стратегии боя и выживания в конфликтах",
      icon: "Target",
      difficulty: "Продвинутый",
    },
    {
      title: "Торговля",
      description: "Использование торговцев и экономической системы сервера",
      icon: "ShoppingCart",
      difficulty: "Средний",
    },
    {
      title: "Медицина",
      description: "Лечение, болезни и система здоровья с модификациями",
      icon: "Heart",
      difficulty: "Средний",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 font-['Oswald']">
            Гайды и руководства
          </h1>
          <p className="text-xl text-gray-300">
            Изучи все аспекты игры на THE LAST SUNRISE
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20 hover:border-purple-400/40 transition-colors cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon
                    name={guide.icon as any}
                    className="text-white"
                    size={24}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">
                      {guide.title}
                    </h3>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        guide.difficulty === "Новичок"
                          ? "bg-green-600 text-white"
                          : guide.difficulty === "Средний"
                            ? "bg-yellow-600 text-white"
                            : guide.difficulty === "Продвинутый"
                              ? "bg-red-600 text-white"
                              : "bg-purple-600 text-white"
                      }`}
                    >
                      {guide.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{guide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-800/30 rounded-lg p-8 border border-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Icon
              name="AlertTriangle"
              className="text-orange-400 mr-3"
              size={28}
            />
            Важная информация
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              • Сервер работает в режиме 1PP (First Person только),
              использование 3PP запрещено
            </p>
            <p>
              • Максимальное время постройки временного лагеря - 7 дней без
              активности
            </p>
            <p>• За нарушение правил выдается бан без предупреждения</p>
            <p>• Читы, эксплойты и дюпы караются перманентным баном</p>
            <p>
              • Для решения спорных вопросов обращайтесь к администрации в
              Discord
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Guides;
