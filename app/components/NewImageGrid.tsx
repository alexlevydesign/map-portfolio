import styles from './new-image-grid.module.scss';

import EqualImages from './EqualImages';
import ThreeImages from './ThreeImages';

import Image from 'next/image';

export default function NewImageGrid() {
  // Define the props object for first three image grid
  const firstEqualImagesProps = {
    src1: './usa.png',
    src2: './yellowstone.png',
    alt1: '',
    alt2: '',
    layout: 'vertical' as const
  };

  // Define the props object for second 3 image grid
  const secondEqualImagesProps = {
    src1: './grand-canyon.png',
    src2: './light-map.jpeg',
    alt1: '',
    alt2: '',
    layout: 'vertical' as const
  };

  return (
    <div className={styles.container}>
      <EqualImages 
        src1={'./alaska.jpeg'}
        src2={'./denver.jpeg'}
        alt1={''}
        alt2={''}
        layout={'horizontal'} />

      <ThreeImages
        srcBig={'./ohio.png'}
        altBig=''
        side='left'
        equalImagesProps={firstEqualImagesProps}
      />

      <Image
        src={'/thumbnail-images/switzerland.png'}
        alt={''}
        width={1920}
        height={1080}
      />

      <ThreeImages
        srcBig={'./far-from-home.png'}
        altBig=''
        side='right'
        equalImagesProps={secondEqualImagesProps}
      />
    </div>
  );
}