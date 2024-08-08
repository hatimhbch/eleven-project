"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import './navbar.css';
import logo from './images/logo.svg';
import search from './images/search.svg';
import save from './images/save.svg';
import Link from 'next/link';
import { allDocs, Doc } from 'contentlayer/generated';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Doc[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const results = allDocs
        .map(doc => {
          const lowerCaseTitle = doc.title.toLowerCase();
          const lowerCaseDescription = (doc.description || '').toLowerCase();
          const count = (lowerCaseTitle + lowerCaseDescription).split(lowerCaseSearchTerm).length - 1;
          return {
            ...doc,
            count,
          };
        })
        .filter(doc => doc.count > 0)
        .sort((a, b) => b.count - a.count)
        .slice(0, 6);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, isClient]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        setTimeout(() => {
          if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
            setIsFocused(false);
          }
        }, 200);
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [searchRef]);

  return (
    <div className="nav">
      <div className="navbar">
        <Link href='./' aria-label="elevenai">
          <Image className="logo" src={logo} alt='home elevenai' />
        </Link>
        <ul>
          <li><Link href="./">Articles</Link></li>
          <li><Link href="./help">Help</Link></li>
          <li><Link href="./about">About</Link></li>
        </ul>
      </div>
      <div className="searchsave">
        <div className="search" ref={searchRef}>
          <Image src={search} className="imgSearch" alt=''/>
          <input
            id="search"
            className="inputSearch"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
          />
          <p>Ctrl+K</p>
        </div>
        <div className="iconsbar">
          <Link href="/saved" className="icosign">
            <Image src={save} alt=''/><p>Saved</p>
          </Link>
        </div>
      </div>
      {isFocused && searchResults.length > 0 && (
        <div className="search-results">
          <ul>
            {searchResults.map((doc) => (
              <li key={doc.slugAsParams}>
                <Link href={`/${doc.slugAsParams}`}>
                  {doc.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;