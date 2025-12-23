
import React, { useState } from 'react';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

const Avatar: React.FC<Props> = ({ src, alt, className = "" }) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`bg-emerald-600 flex items-center justify-center text-white font-bold ${className}`}>
        <span className="text-xl">馬</span>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={`object-cover ${className}`}
      onError={() => setError(true)}
    />
  );
};

export default Avatar;
