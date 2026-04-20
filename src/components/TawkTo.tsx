'use client';
import { useEffect } from 'react';

const TawkTo = () => {
  useEffect(() => {
    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = 'https://embed.tawk.to/69e58bd63ca1cc1c339ffb72/1jmkakg6r';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    document.head.appendChild(s1);
  }, []);

  return null;
};

export default TawkTo;