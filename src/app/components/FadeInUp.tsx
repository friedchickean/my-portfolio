import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInUpProps {
  duration: number;
  children: React.ReactNode;
}

const FadeInUp: React.FC<FadeInUpProps> = ({ duration = 500, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-${duration} transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInUp;
