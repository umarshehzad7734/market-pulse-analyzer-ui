
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, Home, FileText, Info, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/logs', label: 'Logs', icon: FileText },
    { path: '/about', label: 'About', icon: Info }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <BarChart3 className="text-blue-400" size={24} />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Stock Analyzer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className={`flex items-center gap-2 ${
                    isActive(item.path)
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    className={`w-full justify-start gap-2 ${
                      isActive(item.path)
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    <item.icon size={18} />
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
