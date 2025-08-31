'use client'

import Image from 'next/image';
import styles from './image-component.module.scss';
import MapActionBar from './MapActionBar';
import Modal from './Modal';
import { useState } from 'react';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExpand = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsHovered(false);
  };

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
        priority
      />
      <div className={`${styles.MapActionBarContainer} ${isHovered ? styles.visible : ''}`}>
        <MapActionBar onExpand={handleExpand} />
      </div>
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleModalClose}
      >
        <Image
          src={`/thumbnail-images/${src}`}
          alt={alt}
          width={width}
          height={height}
          priority
        />
      </Modal>
    </div>
  );
}
