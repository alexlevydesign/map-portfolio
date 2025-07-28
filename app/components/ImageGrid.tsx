import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

import styles from "./image-grid.module.scss";

const imagesArray = [
    {
        src: "grand-canyon.png",
        width: 2000,
        height: 2000,
        alt: "The grand canyon map",
        title: "Grand Canyon Map",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eius animi inventore labore exercitationem, ab laborum necessitatibus, at sapiente veniam a excepturi illo consectetur dolor reprehenderit, eaque qui aliquid autem?",
        link: "/",
    },
    {
        src: "alaska.png",
        width: 2000,
        height: 2000,
        alt: "Alaska map",
        title: "Alaska Map",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eius animi inventore labore exercitationem, ab laborum necessitatibus, at sapiente veniam a excepturi illo consectetur dolor reprehenderit, eaque qui aliquid autem?",
        link: "/"
    },
    {
        src: "light-map.jpeg",
        width: 2000,
        height: 2000,
        alt: "Light map of the USA",
        title: "What The Lights Show",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eius animi inventore labore exercitationem, ab laborum necessitatibus, at sapiente veniam a excepturi illo consectetur dolor reprehenderit, eaque qui aliquid autem?",
        link: "/"
    },
    {
        src: "switzerland.png",
        width: 2000,
        height: 2000,
        alt: "Switzerland map",
        title: "Switzerland Map",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eius animi inventore labore exercitationem, ab laborum necessitatibus, at sapiente veniam a excepturi illo consectetur dolor reprehenderit, eaque qui aliquid autem?",
        link: "/"
    },
    {
        src: "far-from-home.png",
        width: 2000,
        height: 2000,
        alt: "Map showing the travels of the Syracuse University football team in 1989",
        title: "Syracuse Football Travels Map",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eius animi inventore labore exercitationem, ab laborum necessitatibus, at sapiente veniam a excepturi illo consectetur dolor reprehenderit, eaque qui aliquid autem?",
        link: "/"
    },
    {
        src: "usa.png",
        width: 2000,
        height: 2000,
        alt: "USA map",
        title: "USA Map",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eius animi inventore labore exercitationem, ab laborum necessitatibus, at sapiente veniam a excepturi illo consectetur dolor reprehenderit, eaque qui aliquid autem?",
        link: "/"
    },
    {
        src: "ohio.png",
        width: 2000,
        height: 2000,
        alt: "Ohio map",
        title: "Ohio Voting and Education Map",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eius animi inventore labore exercitationem, ab laborum necessitatibus, at sapiente veniam a excepturi illo consectetur dolor reprehenderit, eaque qui aliquid autem?",
        link: "/"
    },
    {
        src: "denver.png",
        width: 2000,
        height: 2000,
        alt: "Denver map",
        title: "Denver Map",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eius animi inventore labore exercitationem, ab laborum necessitatibus, at sapiente veniam a excepturi illo consectetur dolor reprehenderit, eaque qui aliquid autem?",
        link: "/"
    },
    {
        src: "alaska-transport.png",
        width: 2000,
        height: 2000,
        alt: "Map of Alaskan transportation methods",
        title: "Alaska Transportation Map",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eius animi inventore labore exercitationem, ab laborum necessitatibus, at sapiente veniam a excepturi illo consectetur dolor reprehenderit, eaque qui aliquid autem?",
        link: "/"
    },
    {
        src: "yellowstone.png",
        width: 2000,
        height: 2000,
        alt: "Yellowstone map",
        title: "Yellowstone Map",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eius animi inventore labore exercitationem, ab laborum necessitatibus, at sapiente veniam a excepturi illo consectetur dolor reprehenderit, eaque qui aliquid autem?",
        link: "/"
    },
]

export default function ImageGrid() {
    return (
        <div className={styles.image_grid}>
            <div className={styles.image_col}>
                {imagesArray.map((img) => (
                    <div className={styles.thumbnail_image} key={img.src}>
                        <Image 
                            src={`/thumbnail-images/${img.src}`}
                            width={img.width}
                            height={img.height}
                            alt={img.alt}
                        />
                        <div className={styles.map_info}>
                            <h2>{img.title}</h2>
                            <p>{img.description}</p>
                            <div className={styles.button_container}>
                                <Button
                                link="/"
                                variant="primary"
                                >More info
                                </Button>
                                <Button
                                link="/"
                                variant="outline"
                                >Get in touch
                                </Button>
                            </div>
                            

                        </div>
                    </div>  
                ))}
            </div>
            {/* <div className={styles.image_col}>
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
            </div> */}
            
           
        </div>
    )
}