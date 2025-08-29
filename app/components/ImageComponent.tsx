'use client'

import Image from 'next/image';
import styles from './image-component.module.scss';
import MapActionBar from './MapActionBar';
import { useState } from 'react';
// import { div } from 'motion/react-client';

interface ImageComponentProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}





// const mapHover = document.querySelectorAll(img);

// mapHover.forEach(map => {
//     map.addEventListener('click', () => {
//         alert('MAP!');
//     });
// });


export default function ImageComponent({
  src,
  alt = '',
  className,
  width = 1920,
  height = 1080
}: ImageComponentProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`${styles.imageWrapper} ${className || ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={`/thumbnail-images/${src}`}
        alt={alt}
        width={width}
        height={height}
        style={{
          width: '100%',
          height: 'auto',
        }}
        priority
      />
      <div className={`${styles.MapActionBarContainer} ${isHovered ? styles.visible : ''}`}>
        <MapActionBar />
      </div>
    </div>
  );
}
