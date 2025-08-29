import styles from './equal-images.module.scss';
import ImageComponent from './ImageComponent';

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
      <ImageComponent 
        src={src1}
        alt={alt1}
      />
      <ImageComponent 
        src={src2}
        alt={alt2}
      />
    </div>
  );
}