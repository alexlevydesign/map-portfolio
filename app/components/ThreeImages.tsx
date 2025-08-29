import styles from './three-images.module.scss';
import ImageComponent from './ImageComponent';
import EqualImages from './EqualImages';

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
      <ImageComponent className={styles.bigImage} 
        src={srcBig}
        alt={altBig}
      />
      <EqualImages {...equalImagesProps} />
    </div>
  );
}