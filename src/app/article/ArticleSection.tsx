'use client';

import React, { useState } from 'react';
import { BookOpen, ArrowRight, ArrowLeft } from 'lucide-react';
import ArticleCard from './ArticleCard';
import ArticleModal from './ArticleModal';
import { articlesData, Article } from '../article/data/articles';

const ArticleSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Responsive limits
  const getArticleLimit = () => {
    if (typeof window === 'undefined') return 6;
    
    const width = window.innerWidth;
    if (width < 768) return 3; // Mobile
    if (width < 1024) return 4; // Tablet
    return 6; // Desktop
  };

  const [limit] = useState(getArticleLimit);
  const displayedArticles = showAll ? articlesData : articlesData.slice(0, limit);

  const handleReadMore = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <>
      <section className="bg-[#F0F9FF] py-20 px-5 md:px-0 pt-32">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#024A71] rounded-full mb-6">
              <BookOpen size={32} className="text-[#F0F9FF]" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#024A71] mb-4">
              Artikel Terbaru
            </h2>
            
            <p className="text-lg text-[#024A71]/80 max-w-2xl mx-auto leading-relaxed">
              Temukan berbagai informasi dan tips menarik seputar pendidikan, parenting, dan perkembangan anak dari PKBM Bina Generasi
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedArticles.map((article) => (
              <ArticleCard 
                key={article.id} 
                article={article}
                onReadMore={handleReadMore}
              />
            ))}
          </div>

          {/* Toggle Button */}
          {articlesData.length > limit && (
            <div className="text-center">
              <button 
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-3 bg-[#024A71] text-[#F0F9FF] px-10 py-4 rounded-full font-semibold text-base shadow-lg hover:shadow-xl hover:bg-[#035d8a] hover:-translate-y-1 transition-all duration-300 group"
              >
                {showAll ? (
                  <>
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Lihat Lebih Sedikit
                  </>
                ) : (
                  <>
                    Lihat Semua Artikel
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <ArticleModal article={selectedArticle} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default ArticleSection;