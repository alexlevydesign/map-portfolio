import styles from './new-image-grid.module.scss';
import EqualImages from './EqualImages';
import Button from './Button';

import mapsData from './maps.json';

type MapImage = { src: string; alt: string };
type MapPricing = { digital: string; printed: string };
type MapData = { 
  id: string; 
  images: MapImage[];
  title: string;
  pricing?: MapPricing;
};

const getMapById = (maps: MapData[], id: string): MapData | null => {
  return maps.find(map => map.id === id) || null;
};

const getMapImage = (maps: MapData[], id: string): MapImage => {
  const map = getMapById(maps, id);
  return map?.images[0] || { src: '', alt: '' };
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
    src1: getMapImage(maps, 'denver-relief-map').src,
    alt1: getMapImage(maps, 'denver-relief-map').alt,

    src2: getMapImage(maps, 'switzerland-relief-map').src,
    alt2: getMapImage(maps, 'switzerland-relief-map').alt,

    layout: 'horizontal' as const
  };

  // Props for first ThreeImages component
  const firstEqualImagesProps = {
    src1: getMapImage(maps, 'alaska-relief-map').src,
    alt1: getMapImage(maps, 'alaska-relief-map').alt,

    src2: getMapImage(maps, 'usa-light-map').src,
    alt2: getMapImage(maps, 'usa-light-map').alt,

    layout: 'horizontal' as const
  };

  // Props for second ThreeImages component
  const secondEqualImagesProps = {
    src1: getMapImage(maps, 'yellowstone-relief-map').src,
    alt1: getMapImage(maps, 'yellowstone-relief-map').alt,

    src2: getMapImage(maps, 'grand-canyon-relief-map').src,
    alt2: getMapImage(maps, 'grand-canyon-relief-map').alt,

    layout: 'horizontal' as const
  };

  // Get pricing for buttons
  const denverMap = getMapById(maps, 'denver-relief-map');
  const switzerlandMap = getMapById(maps, 'switzerland-relief-map');
  const alaskaMap = getMapById(maps, 'alaska-relief-map');
  const usaLightMap = getMapById(maps, 'usa-light-map');
  const yellowstoneMap = getMapById(maps, 'yellowstone-relief-map');
  const grandCanyonMap = getMapById(maps, 'grand-canyon-relief-map');

  return (
    <div className={styles.container}>
      <EqualImages 
        {...topEqualImagesProps} 
        pricing1={denverMap?.pricing}
        pricing2={switzerlandMap?.pricing}
      />
      {/* <div className={styles.buttonRow}>
        <Button variant="primary" price="$30">
          Digital
        </Button>
        <Button variant="outline" price="$75">
          Printed
        </Button>
      </div> */}

      <EqualImages 
        {...firstEqualImagesProps}
        pricing1={alaskaMap?.pricing}
        pricing2={usaLightMap?.pricing}
      />
      {/* <div className={styles.buttonRow}>
        <Button variant="primary" price="$25">
          Digital
        </Button>
        <Button variant="outline" price="$65">
          Printed
        </Button>
      </div> */}

      <EqualImages 
        {...secondEqualImagesProps}
        pricing1={yellowstoneMap?.pricing}
        pricing2={grandCanyonMap?.pricing}
      />
      {/* <div className={styles.buttonRow}>
        <Button variant="primary" price="$32">
          Digital
        </Button>
        <Button variant="outline" price="$78">
          Printed
        </Button>
      </div> */}

      {/* <ThreeImages
        srcBig={getMapImage(maps, 'ohio-election-education-map').src}
        altBig={getMapImage(maps, 'ohio-election-education-map').alt}
        side='left'
        equalImagesProps={firstEqualImagesProps}
      /> */}

      {/* <ImageComponent
        src={getMapImage(maps, 'switzerland-relief-map').src}
        alt={getMapImage(maps, 'switzerland-relief-map').alt}
        width={1920}
        height={1080}
      /> */}

      {/* <ThreeImages
        srcBig={getMapImage(maps, 'su-football-travels-map').src}
        altBig={getMapImage(maps, 'su-football-travels-map').alt}
        side='right'
        equalImagesProps={secondEqualImagesProps}
      /> */}
    </div>
  );
}