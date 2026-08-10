import React, { useEffect, useRef, useState } from 'react';

interface FadingVideoProps extends Omit<React.VideoHTMLAttributes<HTMLVideoElement>, 'src'> {
  src: string | string[];
}

export function FadingVideo({ src, className, style, ...props }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sources = Array.isArray(src) ? src : [src];
  const currentSrc = sources[currentIndex];
  
  // Ref to hold the animation frame to cancel it if needed
  const rafRef = useRef<number | null>(null);

  const fade = (start: number, end: number, duration: number) => {
    const startTime = performance.now();
    
    const animate = (time: number) => {
      let progress = (time - startTime) / duration;
      if (progress > 1) progress = 1;
      if (progress < 0) progress = 0;
      
      const currentOpacity = start + (end - start) * progress;
      setOpacity(currentOpacity);
      
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  };

  const handleLoadedData = () => {
    fade(0, 1, 500);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    
    // When remaining time <= 0.55s, fade out over 550ms
    if (duration - currentTime <= 0.55 && opacity === 1) {
      fade(1, 0, 550);
    }
  };

  const handleEnded = () => {
    if (!videoRef.current) return;
    
    if (sources.length === 1) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      fade(0, 1, 500);
    } else {
      setCurrentIndex((prev) => (prev + 1) % sources.length);
    }
  };

  useEffect(() => {
    // If sources change, start from beginning
    setCurrentIndex(0);
  }, [src]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={currentSrc}
      className={className}
      style={{ ...style, opacity }}
      onLoadedData={handleLoadedData}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
      autoPlay
      muted
      playsInline
      preload="auto"
      {...props}
    />
  );
}
