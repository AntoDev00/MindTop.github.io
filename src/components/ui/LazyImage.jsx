import { useState, useEffect } from 'react';
import './LazyImage.css';

const LazyImage = ({ 
  src, 
  webpSrc, // Source per immagine webp (opzionale)
  alt, 
  className = '', 
  width, 
  height, 
  sizes = '100vw', 
  loading = 'lazy',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Resetta lo stato quando cambia il src
    setIsLoaded(false);
    
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    
    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <div 
      className={`lazy-image-container ${className} ${isLoaded ? 'loaded' : 'loading'}`} 
      style={{ width, height }}
      {...props}
    >
      {!isLoaded && <div className="lazy-image-placeholder"></div>}
      {imageSrc && (
        webpSrc ? (
          <picture>
            <source srcSet={webpSrc} type="image/webp" />
            <source srcSet={imageSrc} type="image/jpeg" />
            <img
              src={imageSrc}
              alt={alt}
              className="lazy-image"
              width={width}
              height={height}
              sizes={sizes}
              loading={loading}
              onLoad={() => setIsLoaded(true)}
            />
          </picture>
        ) : (
          <img
            src={imageSrc}
            alt={alt}
            className="lazy-image"
            width={width}
            height={height}
            sizes={sizes}
            loading={loading}
            onLoad={() => setIsLoaded(true)}
          />
        )
      )}
    </div>
  );
};

export default LazyImage;
