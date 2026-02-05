/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from "react";
import { X, Calendar, User, Clock } from "lucide-react";
import { Article } from "../article/data/articles";

interface ArticleModalProps {
  article: Article;
  onClose: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-96 overflow-hidden rounded-t-2xl">
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
          <div className="absolute top-1 right-2">
            <button
              onClick={onClose}
              className="sticky top-4 float-right mr-4 mt-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={24} className="text-[#024A71]" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#024A71] mb-4 leading-tight">
            {article.title}
          </h2>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 mb-6 pb-6 border-b border-[#024A71]/10">
            <div className="flex items-center gap-2 text-[#024A71]/70">
              <User size={18} className="text-[#024A71]/60" />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center gap-2 text-[#024A71]/70">
              <Calendar size={18} className="text-[#024A71]/60" />
              <span>{article.date}</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-[#024A71]/80 text-lg leading-relaxed mb-6">
              {article.excerpt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;
