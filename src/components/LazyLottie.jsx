import React, { useRef, useState, useEffect } from 'react';
import Lottie from 'lottie-react';

export default function LazyLottie({ animationData, loop = true, style, className }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={style}>
      {inView && (
        <Lottie
          animationData={animationData}
          loop={loop}
          autoplay={true}
          style={{ width: '100%', height: 'auto' }}
        />
      )}
    </div>
  );
}
