'use client';

import Image from "next/image";

import Button from "./Button";

import { gsap } from "gsap";

import { GSDevTools } from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools) 

import styles from "./gsap-test.module.scss";


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
        src: "alaska.jpeg",
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
        src: "denver.jpeg",
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


// GSDevTools.create();
export default function GsapTest() {
  const handleClick = () => {
    // GSDevTools.create();
    gsap.to(`.${styles.image_col}`, {
      delay: 1,
      duration: 1,
      y: "+=200",
    //   repeat: 49,
    //   repeatDelay: 1,
      repeatRefresh: true
    });
};

  return (
    <div className={styles.container}>
      {/* {/* <div className={styles.box} /> */}
      {/* <button onClick={handleClick}>Animate Box</button> */}

        <div className={styles.image_grid} onClick={handleClick}>
      <div className={styles.image_col}>
        {imagesArray.map((img, index) => {
          return (
            <div key={index}>
              <Image
                src={`/thumbnail-images/${img.src}`}
                width={img.width}
                height={img.height}
                alt={img.alt}
              />
              {/* <div>
                <h2>{img.title}</h2>
                <p>{img.description}</p>
                <div className={styles.button_container}>
                  <Button link="/" variant="primary">More info</Button>
                  <Button link="/" variant="outline">Get in touch</Button>
                </div>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>

    </div>
  );
}