"use client";

import { FC, Key } from "react";
import Link from "next/link";
import useSavedPosts from "@/hooks/useSavedPosts";
import Image from "next/image";
import profile from "@/app/components/images/profile.svg";
import './saved.css';

const truncateDescription = (description?: string): string => {
  if (!description) return '';
  if (description.length > 10) {
    return `${description.slice(0, 45)}...`;
  }
  return description;
};

const SavedPage: FC = () => {
  const [savedPosts] = useSavedPosts();

  return (
    <div>
      <h1>Saved Posts</h1>
      <div className='hp-collection'>
        {savedPosts.map((post: { slugAsParams: any; title: string; description?: string; date: string }, index: Key) => (
          <Link href={`/${post.slugAsParams}`} key={index} className='hp-listofcollection'>
            <div className="hp-leftofarticle">
              <div className="hp-profile">
                <Image src={profile} alt="Profile" />
                <p>Hatim Habchaoui</p>
              </div>
              <h1>{post.title}</h1>
              <p className="hp-desc">{truncateDescription(post.description)}</p>
              <p className="hp-dateandreadtime">{post.date}</p>
            </div>
            <h6 className="hp-cover"></h6>
          </Link>
        ))}
      </div>
      <a href="/">Go to Home</a>
    </div>
  );
};

export default SavedPage;
