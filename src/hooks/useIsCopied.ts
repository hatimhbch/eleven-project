'use client'

import { useState } from 'react';

const useIsCopied = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.error('Failed to copy to clipboard:', error);
      });
  };

  return [ copied, copyToClipboard ] ;
};

export default useIsCopied;