import { useState, useEffect } from 'react';

export const useAnimationOnce = (sectionKey) => {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const hasAnimated = sessionStorage.getItem(sectionKey);
    
    if (hasAnimated) {
      setShouldAnimate(false);
    } else {
      setShouldAnimate(true);
      sessionStorage.setItem(sectionKey, 'true');
    }
  }, [sectionKey]);

  return shouldAnimate;
};
