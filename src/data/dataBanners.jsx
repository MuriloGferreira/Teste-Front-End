import imageDesktop1 from "../assets/images/desk1.png";
import imageDesktop2 from "../assets/images/desk2.png";
import imageDesktop3 from "../assets/images/desk3.png";

import imageMobile1 from "../assets/images/mob1.png";
import imageMobile2 from "../assets/images/mob2.png";
import imageMobile3 from "../assets/images/mob3.png";

export const banners = [
  {
    id: 1,
    alt: "Banner 1",
    image: imageDesktop1,
    srcSet: `
      ${imageMobile1} 768w, 
      ${imageDesktop1} 1920w
    `,
  },
  {
    id: 2,
    alt: "Banner 2",
    image: imageDesktop2,
    srcSet: `
      ${imageMobile2} 768w, 
      ${imageDesktop2} 1920w
    `,
  },
  {
    id: 3,
    alt: "Banner 3",
    image: imageDesktop3,
    srcSet: `
      ${imageMobile3} 768w, 
      ${imageDesktop3} 1920w
    `,
  },
  {
    id: 4,
    alt: "Banner 4",
    image: imageDesktop1,
    srcSet: `
      ${imageMobile1} 768w, 
      ${imageDesktop1} 1920w
    `,
  },
];
