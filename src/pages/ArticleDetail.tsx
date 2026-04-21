import { useParams, Link } from 'react-router-dom';
import { getArticleById, articles } from '../data/articles';

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = getArticleById(id || '');

  if (!article) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">文章不存在</h1>
        <Link to="/articles" className="text-[var(--accent-blue)] hover:underline">
          返回文章列表
        </Link>
      </div>
    );
  }

  const relatedArticles = articles
    .filter(a => a.categorySlug === article.categorySlug && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Link */}
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent-blue)] mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回文章列表
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Link
              to={`/articles/category/${article.categorySlug}`}
              className="tag-tech"
            >
              {article.category}
            </Link>
            <span className="text-sm text-[var(--text-muted)]">{article.date}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {article.title}
          </h1>

          <p className="text-lg text-[var(--text-secondary)]">
            {article.summary}
          </p>

          <div className="flex items-center gap-2 mt-4">
            {article.tags.map(tag => (
              <span
                key={tag}
                className="px-2 py-1 rounded bg-[var(--bg-secondary)] text-xs text-[var(--text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <article className="card-tech article-content">
          <div className="prose prose-invert max-w-none">
            {article.content.split('\n').map((line, index) => {
              if (line.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-xl font-bold text-[var(--accent-blue)] mt-6 mb-3">
                    {line.replace('## ', '')}
                  </h2>
                );
              }
              if (line.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-lg font-semibold text-white mt-4 mb-2">
                    {line.replace('### ', '')}
                  </h3>
                );
              }
              if (line.startsWith('```')) {
                return null; // Skip code block markers for simplicity
              }
              if (line.startsWith('- **') || line.startsWith('- ')) {
                return (
                  <p key={index} className="text-[var(--text-secondary)] my-2 pl-4">
                    {line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '$1')}
                  </p>
                );
              }
              if (line.trim()) {
                return (
                  <p key={index} className="text-[var(--text-secondary)] my-3">
                    {line.replace(/\*\*(.*?)\*\*/g, '$1')}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-bold text-white mb-6">相关文章</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedArticles.map(related => (
                <Link
                  key={related.id}
                  to={`/articles/${related.id}`}
                  className="card-tech"
                >
                  <span className="text-xs text-[var(--accent-blue)] mb-2">{related.category}</span>
                  <h3 className="text-sm font-medium text-white">{related.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}