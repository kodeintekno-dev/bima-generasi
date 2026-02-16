/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Article } from "../article/data/articles";

interface ArticleCardProps {
  article: Article;
  onReadMore: (article: Article) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onReadMore }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#024A71] text-[#F0F9FF] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#024A71] mb-3 line-clamp-2 leading-snug">
          {article.title}
        </h3>
        <p className="text-[#024A71]/75 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
          {article.excerpt}
        </p>

        <div className="border-t border-[#024A71]/10 pt-4 mt-auto">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-4 text-xs text-[#024A71]/70">
              <div className="flex items-center gap-1.5">
                <User size={14} className="text-[#024A71]/60" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#024A71]/60" />
                <span>{article.date}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onReadMore(article)}
            className="mt-4 inline-flex items-center gap-2 text-[#024A71] font-semibold text-sm hover:gap-3 transition-all duration-300"
          >
            Baca Selengkapnya
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
