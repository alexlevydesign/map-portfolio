import Image from 'next/image';
import styles from './image-component.module.scss';

interface ImageComponentProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function ImageComponent({
  src,
  alt = '',
  className,
  width = 1920,
  height = 1080
}: ImageComponentProps) {
  return (
    <div className={`${styles.imageWrapper} ${className || ''}`}>
      <Image
        src={`/thumbnail-images/${src}`}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
}
