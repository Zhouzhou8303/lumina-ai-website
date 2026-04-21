import { useState } from 'react';
import { articles, categories, searchArticles, getArticlesByCategory } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import SearchBar from '../components/SearchBar';

export default function Articles() {
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredArticles(selectedCategory ? getArticlesByCategory(selectedCategory) : articles);
    } else {
      const results = searchArticles(query);
      setFilteredArticles(selectedCategory ? results.filter(a => a.categorySlug === selectedCategory) : results);
    }
  };

  const handleCategorySelect = (slug: string | null) => {
    setSelectedCategory(slug);
    if (!slug) {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(getArticlesByCategory(slug));
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">实战文章</h1>
          <p className="text-[var(--text-secondary)]">跨境电商 AI Agent 全系列指南</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-8 items-center justify-between">
          <SearchBar onSearch={handleSearch} placeholder="搜索文章标题、内容或标签..." />

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => handleCategorySelect(null)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                !selectedCategory
                  ? 'bg-[var(--accent-blue)] text-white'
                  : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--accent-blue)]'
              }`}
            >
              全部
            </button>
            {categories.map(category => (
              <button
                key={category.slug}
                onClick={() => handleCategorySelect(category.slug)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  selectedCategory === category.slug
                    ? 'bg-[var(--accent-blue)] text-white'
                    : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--accent-blue)]'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-sm text-[var(--text-muted)] mb-6">
          共 {filteredArticles.length} 篇文章
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[var(--text-muted)]">没有找到相关文章</p>
            <button
              onClick={() => {
                handleCategorySelect(null);
                handleSearch('');
              }}
              className="text-[var(--accent-blue)] mt-4 hover:underline"
            >
              查看全部文章
            </button>
          </div>
        )}
      </div>
    </div>
  );
}