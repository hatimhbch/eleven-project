"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import profile from '@/app/components/images/profile.svg';
import { allDocs } from 'contentlayer/generated';
import './collection.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles of experts in all language programming and science Understanding Java Generics: A Comprehensive Guide',
  description: 'Java, Python, Html, Css, Javascript, Typescript, Nodejs, Reactjs, Vuejs, Angular, Next.js, Nestjs, Expressjs, Spring, Spring bot, c#, c, c++, .Net, Django',
};

const POSTS_PER_PAGE = 5;

interface Post {
  href: string;
  title: string;
  description?: string;
  date: string;
  imageurl: string;
}

function Collection() {
  const [currentPage, setCurrentPage] = useState(1);

  const posts: Post[] = allDocs.map(doc => ({
    href: `./${doc.slugAsParams}`,
    title: doc.title,
    description: doc.description,
    date: doc.date,
    imageurl: doc.imageurl,
  })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // فرز المنشورات حسب التاريخ بترتيب تنازلي

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const truncateDescription = (description?: string): string => {
    if (!description) return '';
    if (description.length > 10) {
      return `${description.slice(0, 45)}...`;
    }
    return description;
  };

  const renderPosts = () =>
    currentPosts.map((post, index) => (
      <Link href={post.href} className="hp-listofcollection" key={index}>
        <div className="hp-leftofarticle">
          <div className="hp-profile">
            <Image src={profile} alt="Profile" />
            <p>Hatim Habchaoui</p>
          </div>
          <h1>{post.title}</h1>
          <p className="hp-desc">{truncateDescription(post.description)}</p>
          <p className="hp-dateandreadtime">{post.date}</p>
        </div>
        <h6 className="hp-cover" style={{
        background: `url(${post.imageurl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
        }}></h6>
      </Link>
    ));

  const renderPagination = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={i === currentPage ? 'active' : ''}
        >
          {i}
        </button>
      );
    }

    return <div className="pagination">{pages}</div>;
  };

  return (
    <div className='collection'>
      <div className="hp-collection">{renderPosts()}</div>
      {renderPagination()}
    </div>
  );
}

export default Collection;