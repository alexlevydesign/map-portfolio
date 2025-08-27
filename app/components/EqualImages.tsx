import styles from './equal-images.module.scss';
import Image from 'next/image';

interface EqualImagesProps {
  src1: string;
  src2: string;
  alt1?: string;
  alt2?: string;
  layout?: 'horizontal' | 'vertical';
}

export default function EqualImages({ 
  src1, 
  src2, 
  alt1 = '', 
  alt2 = '', 
  layout = 'horizontal'
}: EqualImagesProps) {
  return (
    <div className={`${styles.container} ${styles[layout]}`}>
      <div className={styles.imageWrapper}>
        <Image 
          src={`/thumbnail-images/${src1}`}
          alt={alt1}
          width={1920}
          height={1080}
        />
      </div>

      <div className={styles.imageWrapper}>
        <Image 
          src={`/thumbnail-images/${src2}`}
          alt={alt2}
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
}