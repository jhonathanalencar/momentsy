import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  function getMatches(query: string) {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }

    return false;
  }

  const [matches, setMatches] = useState(() => getMatches(query));

  function handleMediaChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    matchMedia.addEventListener('change', handleMediaChange);

    return () => {
      matchMedia.removeEventListener('change', handleMediaChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
}
