/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { X, Calendar, User } from "lucide-react";
import { Article } from "../article/data/articles";

interface ArticleModalProps {
  article: Article;
  onClose: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [MDXContent, setMDXContent] = useState<React.ComponentType | null>(
    null,
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    setLoading(true);
    setMDXContent(null);

    import(`../article/content/${article.slug}.mdx`)
      .then((mod) => {
        setMDXContent(() => mod.default);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [article.slug]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-72 md:h-96 overflow-hidden rounded-t-2xl">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6">
            <span className="bg-[#024A71] text-[#F0F9FF] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-lg">
              {article.category}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Tutup modal"
            >
              <X size={24} className="text-[#024A71]" />
            </button>
          </div>
        </div>

        <div className="p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#024A71] mb-4 leading-tight">
            {article.title}
          </h2>

          <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b border-[#024A71]/10">
            <div className="flex items-center gap-2 text-[#024A71]/70">
              <User size={18} className="text-[#024A71]/60" />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center gap-2 text-[#024A71]/70">
              <Calendar size={18} className="text-[#024A71]/60" />
              <span>{article.date}</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {loading && (
              <div className="flex items-center gap-3 text-[#024A71]/50">
                <div className="w-5 h-5 border-2 border-[#024A71]/30 border-t-[#024A71] rounded-full animate-spin" />
                <span>Memuat artikel...</span>
              </div>
            )}

            {!loading && MDXContent && <MDXContent />}

            {!loading && !MDXContent && (
              <p className="text-[#024A71]/80 text-lg leading-relaxed">
                {article.excerpt}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;
