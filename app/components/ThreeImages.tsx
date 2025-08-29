import styles from './three-images.module.scss';
import Image from 'next/image';
import EqualImages from './EqualImages';
import ImageComponent from './ImageComponent';

interface ThreeImagesProps {
  srcBig: string;
  altBig?: string;
  side?: 'left' | 'right';
  equalImagesProps: {
    src1: string;
    src2: string;
    alt1?: string;
    alt2?: string;
    layout?: 'horizontal' | 'vertical';
  }
}

export default function ThreeImages({ 
  srcBig, 
  altBig = '', 
  side = 'left',
  equalImagesProps
}: ThreeImagesProps) {
  return (
    <div className={`${styles.container} ${styles[side]}`}>
      <div className={styles.imageWrapper}>
        <ImageComponent 
          src={`${srcBig}`}
          alt={altBig}
          width={1920}
          height={1080}
        />
      </div>

      <EqualImages {...equalImagesProps} />
    </div>
  );
}