// src/components/SavedArticlesContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface Article {
  href: string;
  title: string;
  desc: string;
}

interface SavedArticlesContextProps {
  savedArticles: Article[];
  addArticle: (article: Article) => void;
}

const SavedArticlesContext = createContext<SavedArticlesContextProps | undefined>(undefined);

export const SavedArticlesProvider = ({ children }: { children: ReactNode }) => {
  const [savedArticles, setSavedArticles] = useState<Article[]>([]);

  const addArticle = (article: Article) => {
    setSavedArticles((prevArticles) => [...prevArticles, article]);
  };

  return (
    <SavedArticlesContext.Provider value={{ savedArticles, addArticle }}>
      {children}
    </SavedArticlesContext.Provider>
  );
};

export const useSavedArticles = () => {
  const context = useContext(SavedArticlesContext);
  if (!context) {
    throw new Error("useSavedArticles must be used within a SavedArticlesProvider");
  }
  return context;
};