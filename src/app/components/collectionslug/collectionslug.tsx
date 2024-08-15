"use client"
// collection.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import profile from '@/app/components/images/profile.svg';
import { allDocs } from 'contentlayer/generated';
import './collectionslug.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles of experts in all language programming and science Understanding Java Generics: A Comprehensive Guide',
  description: 'Java, Python, Html, Css, Javascript, Typescript, Nodejs, Reactjs, Vuejs, Angular, Next.js, Nestjs, Expressjs, Spring, Spring bot, c#, c, c++, .Net, Django',
};

const POSTS_PER_PAGE = 4;

interface Post {
  href: string;
  title: string;
  description?: string;
  date: string;
  imageurl: string;
}

function CollectionSlug() {
  const [currentPage, setCurrentPage] = useState(1);

  const posts: Post[] = allDocs.map(doc => ({
    href: `./${doc.slugAsParams}`,
    title: doc.title,
    description: doc.description,
    date: doc.date,
    imageurl: doc.imageurl,
  })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const truncateDescription = (description?: string): string => {
    if (!description) return '';
    if (description.length > 50) {
      return `${description.slice(0, 50)}...`;
    }
    return description;
  };

  const renderPosts = () =>
    currentPosts.map((post, index) => (
      <Link href={post.href} className="cslug-listofcollection" key={index}>
        <div className="cslug-leftofarticle">
          <div className="cslug-cover" style={{
          background: `url(${post.imageurl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
          }}></div>
          <h1>{post.title}</h1>
          <p className="cslug-desc">{truncateDescription(post.description)}</p>
          <p className="cslug-dateandreadtime">{post.date}</p>
        </div>
      </Link>
    ));

  return (
    <>
      <div className='cslug-collection'>
        <div className="cslug-collection">{renderPosts()}</div>
      </div>
    </>
  );
}

export default CollectionSlug;