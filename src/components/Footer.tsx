import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border)] py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-cyan)] flex items-center justify-center">
              <span className="text-white font-bold">L</span>
            </div>
            <span className="text-sm text-[var(--text-secondary)]">
              灵慧光智 Lumina AI © 2026
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-[var(--text-muted)]">
            <Link to="/articles" className="hover:text-[var(--accent-blue)]">文章</Link>
            <Link to="/about" className="hover:text-[var(--accent-blue)]">关于</Link>
            <Link to="/contact" className="hover:text-[var(--accent-blue)]">联系</Link>
          </div>

          <div className="text-xs text-[var(--text-muted)]">
            跨境电商 AI Agent 实战指南
          </div>
        </div>
      </div>
    </footer>
  );
}