import { Link } from 'react-router-dom';
import type { Article } from '../data/articles';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <Link
      to={`/articles/${article.id}`}
      className={`card-tech block group ${featured ? 'md:col-span-2' : ''}`}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <span className="tag-tech">{article.category}</span>
        <span className="text-xs text-[var(--text-muted)]">{article.date}</span>
      </div>

      <h3 className="text-lg font-semibold text-white group-hover:text-[var(--accent-blue)] transition-colors mb-2">
        {article.title}
      </h3>

      <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-4">
        {article.summary}
      </p>

      <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
        {article.tags.slice(0, 3).map(tag => (
          <span key={tag} className="px-2 py-1 rounded bg-[var(--bg-secondary)]">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 text-[var(--accent-blue)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        <span>阅读全文</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}