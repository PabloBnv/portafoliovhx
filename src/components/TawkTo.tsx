'use client';
import { useEffect, useState } from 'react';

const TawkTo = () => {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldLoad(true), 3000);

    const handleInteraction = () => {
      setShouldLoad(true);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
    };

    window.addEventListener('scroll', handleInteraction, { once: true });
    window.addEventListener('click', handleInteraction, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
    };
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = 'https://embed.tawk.to/69e58bd63ca1cc1c339ffb72/1jmkakg6r';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    document.head.appendChild(s1);
  }, [shouldLoad]);

  return null;
};

export default TawkTo;