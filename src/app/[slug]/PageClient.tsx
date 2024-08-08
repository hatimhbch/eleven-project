'use client'

import { FC, useState } from "react";
import { Mdx } from "./Mdx"; // Adjust the import path as necessary
import Image from "next/image";
import '@/app/[slug]/styles/page.css';
import profile from '@/app/components/images/profile.svg';
import copy from '@/app/[slug]/images/copy.svg';
import check from '@/app/[slug]/images/check.svg';
import useSavedPosts from '@/hooks/useSavedPosts'; // Adjust the import path as necessary
import Head from "next/head";

interface Doc {
  body: { code: string };
  readtime?: string;
  date: string;
  title: string;
  description?: string;
  imageurl: string;
  slugAsParams: string;
}

interface PageClientProps {
  doc: Doc;
}

const PageClient: FC<PageClientProps> = ({ doc }) => {
  const [copied, setCopied] = useState(false);
  const [savedPosts, addPostToSaved, removePostFromSaved, isPostSaved] = useSavedPosts();
  const isSaved = isPostSaved(doc.slugAsParams);

  const copyToClipboard = () => {
    const link = window.location.href; // Get the current URL
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset state after 2 seconds
    });
  };

  const handleSave = () => {
    if (isSaved) {
      removePostFromSaved(doc.slugAsParams);
    } else {
      addPostToSaved({
        title: doc.title,
        description: doc.description,
        date: doc.date,
        imageurl: doc.imageurl,
        slugAsParams: doc.slugAsParams,
      });
    }
  };

  return (
    <>
            {/* <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={doc.slugAsParams} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": metadata.title,
            "description": metadata.description,
            "image": metadata.image,
            "datePublished": doc.date,
            "author": {
              "@type": "Person",
              "name": "Author Name"
            }
          })}
        </script>
      </Head> */}
      <div className="articlepage">
        <h1 className="h1pageclient">{doc.title}</h1>
        <div className="listoficonsreact">
          <div className="artinfo-user-art">
            <Image src={profile} alt="Profile" />
            <div className="aua-date-time">
              <p>Hatim Habchaoui</p>
              <h6><span>Reading time: {doc.readtime} min, </span>{doc.date}</h6>
            </div>
          </div>
          <div className="discopysave">
            <div className="copieddis">
              <button type="button" onClick={copyToClipboard}>
                {copied ? (
                  <Image className="check" src={check} alt="Check" />
                ) : (
                  <Image src={copy} alt="Copy" />
                )}
              </button>
            </div>
            <button 
              className="savedis" 
              type="button" 
              onClick={handleSave}
              style={{ backgroundColor: 'transparent' }} // Transparent button background
            >
            <svg 
               width="20.6px" 
               height="20.6px" 
               viewBox="0 0 24 24" 
               fill={isSaved ? '#222' : 'none'} 
               stroke={isSaved ? '#222' : '#888'} 
               strokeWidth="1" 
               xmlns="http://www.w3.org/2000/svg"
             >
             <path d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1z"/>
             </svg>
            </button>
          </div>
        </div>
        <div className="mdx-content">
        <div style={{ 
        width: '98%',
        height: '440px', 
        overflow: 'hidden', 
        position: 'relative',
        margin: '40px auto 0 auto',
        }}>
          <Image 
          src={doc.imageurl}
          style={{paddingBottom: '25px'}}
          objectFit="cover"
          layout="fill"
          alt="programming" />
        </div>  
          <Mdx code={doc.body.code} />
        </div>
      </div>
    </>
  );
};

export default PageClient;