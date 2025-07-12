import Image from "next/image";

import styles from "./image-grid.module.scss";

export default function ImageGrid() {
    return (
        <div className={styles.image_grid}>
            <div className={styles.image_col}>
                <div className={styles.thumbnail_image}>
                    <Image
                        src="/thumbnail-images/grand-canyon.png"
                        width={2000}
                        height={2000}
                        alt="Image"
                    ></Image>
                </div>
                <div className={styles.thumbnail_image}>
                    <Image
                        src="/thumbnail-images/alaska.png"
                        width={2000}
                        height={2000}
                        alt="Image"
                    ></Image>
                </div>
                <div className={styles.thumbnail_image}>
                    <Image
                        src="/thumbnail-images/light-map.jpeg"
                        width={2000}
                        height={2000}
                        alt="Image"
                    ></Image>
                </div>
                <div className={styles.thumbnail_image}>
                    <Image
                        src="/thumbnail-images/switzerland.png"
                        width={2000}
                        height={2000}
                        alt="Image"
                    ></Image>
                </div>
                <div className={styles.thumbnail_image}>
                    <Image
                        src="/thumbnail-images/far-from-home.png"
                        width={2000}
                        height={2000}
                        alt="Image"
                    ></Image>
                </div>
            </div>
            <div className={styles.image_col}>
                <div className={styles.thumbnail_image}>
                    <Image
                        src="/thumbnail-images/usa.png"
                        width={2000}
                        height={2000}
                        alt="Image"
                    ></Image>
                </div>
                <div className={styles.thumbnail_image}>
                    <Image
                        src="/thumbnail-images/ohio.png"
                        width={2000}
                        height={2000}
                        alt="Image"
                    ></Image>
                </div>
                <div className={styles.thumbnail_image}>
                    <Image
                        src="/thumbnail-images/denver.png"
                        width={2000}
                        height={2000}
                        alt="Image"
                    ></Image>
                </div>
                <div className={styles.thumbnail_image}>
                    <Image
                        src="/thumbnail-images/alaska-transport.png"
                        width={2000}
                        height={2000}
                        alt="Image"
                    ></Image>
                </div>
                <div className={styles.thumbnail_image}>
                    <Image
                        src="/thumbnail-images/yellowstone.png"
                        width={2000}
                        height={2000}
                        alt="Image"
                    ></Image>
                </div>
            </div>
            
           
        </div>
    )
}