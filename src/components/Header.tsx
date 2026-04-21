import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/articles', label: '文章' },
    { path: '/about', label: '关于' },
    { path: '/contact', label: '联系' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-cyan)] flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <div>
            <span className="text-xl font-bold text-white group-hover:text-[var(--accent-blue)] transition-colors">
              Lumina AI
            </span>
            <span className="text-xs text-[var(--text-muted)] block">跨境电商AI实战</span>
          </div>
        </Link>

        <nav className="flex items-center gap-6">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? 'text-[var(--accent-blue)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--accent-blue)]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}