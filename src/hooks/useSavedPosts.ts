'use client'
import { useState, useEffect } from 'react';

const useSavedPosts = () => {
  const [savedPosts, setSavedPosts] = useState<any[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('savedPosts');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('savedPosts', JSON.stringify(savedPosts));
  }, [savedPosts]);

  const addPostToSaved = (post: any) => {
    setSavedPosts((prevPosts) => [...prevPosts, post]);
  };

  const removePostFromSaved = (slug: string) => {
    setSavedPosts((prevPosts) => prevPosts.filter(post => post.slugAsParams !== slug));
  };

  const isPostSaved = (slug: string) => {
    return savedPosts.some(post => post.slugAsParams === slug);
  };

  return [savedPosts, addPostToSaved, removePostFromSaved, isPostSaved] as const;
};

export default useSavedPosts;
