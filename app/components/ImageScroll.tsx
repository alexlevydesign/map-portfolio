"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./image-scroll.module.scss";

export default function ImageScroll() {
  const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const images = container.querySelectorAll(`.${styles.thumbnail_image}`);
//     let currentVisible = null;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         let maxRatio = 0;
//         let mostVisible = null;

//         // Find the entry with the largest visibility
//         entries.forEach((entry) => {
//           if (entry.intersectionRatio > maxRatio) {
//             maxRatio = entry.intersectionRatio;
//             mostVisible = entry.target;
//           }
//         });

//         if (mostVisible && currentVisible !== mostVisible) {
//           // Remove .current from all
//           images.forEach((img) => img.classList.remove(styles.current));
//           // Add .current only to the most visible one
//           mostVisible.classList.add(styles.current);
//           currentVisible = mostVisible;
//         }
//       },
//       {
//         threshold: buildThresholdList(),
//       }
//     );

//     images.forEach((img) => observer.observe(img));
//     return () => observer.disconnect();
//   }, []);

  return (
    <div ref={containerRef} className={styles.image_grid}>
      <div className={styles.image_col}>
        {[
          "grand-canyon.png",
          "alaska.png",
          "light-map.jpeg",
          "switzerland.png",
          "far-from-home.png",
        ].map((src) => (
          <div key={src} className={styles.thumbnail_image}>
            <Image
              src={`/thumbnail-images/${src}`}
              width={600}
              height={400}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className={styles.image_col}>
        {[
          "usa.png",
          "ohio.png",
          "denver.png",
          "alaska-transport.png",
          "yellowstone.png",
        ].map((src) => (
          <div key={src} className={styles.thumbnail_image}>
            <Image
              src={`/thumbnail-images/${src}`}
              width={600}
              height={400}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function buildThresholdList() {
  const thresholds = [];
  for (let i = 0; i <= 1.0; i += 0.01) {
    thresholds.push(i);
  }
  return thresholds;
}
