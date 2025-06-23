import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/guides", label: "Гайды", icon: "BookOpen" },
    { path: "/administration", label: "Администрация", icon: "Shield" },
    { path: "/contacts", label: "Контакты", icon: "MessageCircle" },
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Sunrise" className="text-orange-400" size={28} />
            <span className="font-bold text-white text-lg">
              THE LAST SUNRISE
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-purple-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <Icon name={item.icon as any} size={16} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
