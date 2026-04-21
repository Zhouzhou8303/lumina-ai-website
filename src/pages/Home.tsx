import { Link } from 'react-router-dom';
import { articles, categories } from '../data/articles';
import ArticleCard from '../components/ArticleCard';

export default function Home() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--accent-blue)] opacity-5 blur-[100px]" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--accent-cyan)] opacity-5 blur-[80px]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            {/* Logo */}
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-cyan)] flex items-center justify-center shadow-lg shadow-[var(--accent-blue)]/20">
                <span className="text-white font-bold text-2xl">L</span>
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white glow-text">
                  Lumina AI
                </h1>
                <p className="text-sm text-[var(--accent-cyan)]">灵慧光智</p>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              跨境电商 AI Agent 实战指南
              <br />
              <span className="text-[var(--accent-blue)]">从0到1，打造智能运营系统</span>
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/articles"
                className="glow-button px-6 py-3 rounded-lg text-white font-medium"
              >
                开始阅读
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg border border-[var(--accent-blue)] text-[var(--accent-blue)] font-medium hover:bg-[var(--accent-blue)]/10 transition-colors"
              >
                联系咨询
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-16">
            <div className="card-tech text-center py-6">
              <div className="text-3xl font-bold text-[var(--accent-blue)] mb-1">15+</div>
              <div className="text-sm text-[var(--text-muted)]">实战文章</div>
            </div>
            <div className="card-tech text-center py-6">
              <div className="text-3xl font-bold text-[var(--accent-cyan)] mb-1">6</div>
              <div className="text-sm text-[var(--text-muted)]">系列专题</div>
            </div>
            <div className="card-tech text-center py-6">
              <div className="text-3xl font-bold text-[var(--accent-blue)] mb-1">100%</div>
              <div className="text-sm text-[var(--text-muted)]">实战导向</div>
            </div>
            <div className="card-tech text-center py-6">
              <div className="text-3xl font-bold text-[var(--accent-cyan)] mb-1">AI</div>
              <div className="text-sm text-[var(--text-muted)]">驱动效率</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8">专题系列</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map(category => (
              <Link
                key={category.slug}
                to={`/articles/category/${category.slug}`}
                className="card-tech text-center py-6 group"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="text-sm font-medium text-white group-hover:text-[var(--accent-blue)] transition-colors">
                  {category.name}
                </div>
                <div className="text-xs text-[var(--text-muted)] mt-1">
                  {category.count} 篇
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">精选文章</h2>
            <Link
              to="/articles"
              className="text-[var(--accent-blue)] text-sm font-medium hover:underline"
            >
              查看全部
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">关于作者</h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-6">
            灵慧开明兽，专注跨境电商AI Agent开发。
            帮助卖家从手动运营转向智能自动化，提升效率，降低成本。
          </p>
          <Link
            to="/about"
            className="text-[var(--accent-blue)] font-medium hover:underline"
          >
            了解更多
          </Link>
        </div>
      </section>
    </div>
  );
}