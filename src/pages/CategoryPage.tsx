import { useParams, Link } from 'react-router-dom';
import { getArticlesByCategory, categories } from '../data/articles';
import ArticleCard from '../components/ArticleCard';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(c => c.slug === slug);
  const categoryArticles = getArticlesByCategory(slug || '');

  if (!category) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">分类不存在</h1>
        <Link to="/articles" className="text-[var(--accent-blue)] hover:underline">
          返回文章列表
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent-blue)] mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回文章列表
          </Link>

          <div className="text-4xl mb-4">{category.icon}</div>
          <h1 className="text-3xl font-bold text-white mb-2">{category.name}</h1>
          <p className="text-[var(--text-secondary)]">共 {categoryArticles.length} 篇文章</p>
        </div>

        {/* Articles Grid */}
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[var(--text-muted)]">该分类暂无文章</p>
          </div>
        )}
      </div>
    </div>
  );
}