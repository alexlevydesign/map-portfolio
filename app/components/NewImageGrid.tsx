import styles from './new-image-grid.module.scss';
import EqualImages from './EqualImages';

import mapsData from './maps.json';

type MapImage = { src: string; alt: string };
type MapData = { id: string; images: MapImage[] };

const getMapById = (maps: MapData[], id: string): MapImage => {
  return maps.find(map => map.id === id)?.images[0] || { src: '', alt: '' };
};
// type EqualImagesProps = {
//   src1: string;
//   alt1: string;
//   src2: string;
//   alt2: string;
//   layout: 'horizontal' | 'vertical';
// };
export default function NewImageGrid() {
  const { maps } = mapsData;

  // First EqualImages props
  const topEqualImagesProps = {
    src1: getMapById(maps, 'denver-relief-map').src,
    alt1: getMapById(maps, 'denver-relief-map').alt,

    src2: getMapById(maps, 'switzerland-relief-map').src,
    alt2: getMapById(maps, 'switzerland-relief-map').alt,

    layout: 'horizontal' as const
  };

  // Props for first ThreeImages component
  const firstEqualImagesProps = {
    src1: getMapById(maps, 'alaska-relief-map').src,
    alt1: getMapById(maps, 'alaska-relief-map').alt,

    src2: getMapById(maps, 'usa-light-map').src,
    alt2: getMapById(maps, 'usa-light-map').alt,

    layout: 'horizontal' as const
  };

  // Props for second ThreeImages component
  const secondEqualImagesProps = {
    src1: getMapById(maps, 'yellowstone-relief-map').src,
    alt1: getMapById(maps, 'yellowstone-relief-map').alt,

    src2: getMapById(maps, 'grand-canyon-relief-map').src,
    alt2: getMapById(maps, 'grand-canyon-relief-map').alt,

    layout: 'horizontal' as const
  };

  return (
    <div className={styles.container}>
      <EqualImages {...topEqualImagesProps} />
      <EqualImages {...firstEqualImagesProps} />
      <EqualImages {...secondEqualImagesProps} />

      {/* <ThreeImages
        srcBig={getMapById(maps, 'ohio-election-education-map').src}
        altBig={getMapById(maps, 'ohio-election-education-map').alt}
        side='left'
        equalImagesProps={firstEqualImagesProps}
      /> */}

      {/* <ImageComponent
        src={getMapById(maps, 'switzerland-relief-map').src}
        alt={getMapById(maps, 'switzerland-relief-map').alt}
        width={1920}
        height={1080}
      /> */}

      {/* <ThreeImages
        srcBig={getMapById(maps, 'su-football-travels-map').src}
        altBig={getMapById(maps, 'su-football-travels-map').alt}
        side='right'
        equalImagesProps={secondEqualImagesProps}
      /> */}
    </div>
  );
}