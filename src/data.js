import vm_img1 from "./assets/vintagemotors1.jpg";
import vm_img2 from "./assets/vintagemotors2.jpg";
import vm_img3 from "./assets/vintagemotors3.jpg";
import tgc_img1 from "./assets/theguitarcenter1.jpg";
import tgc_img2 from "./assets/theguitarcenter2.jpg";
import tgc_img3 from "./assets/theguitarcenter3.jpg";
import blogera1 from "./assets/blogera1.jpg";
import blogera2 from "./assets/blogera2.jpg";
import blogera3 from "./assets/blogera3.jpg";
// import sg_img1 from './assets/snakegame1.jpg'
// import sg_img2 from './assets/snakegame2.jpg'
// import sg_img3 from './assets/snakegame3.jpg'
import spacex1 from "./assets/spacex1.jpg";
import spacex2 from "./assets/spacex2.jpg";
import spacex3 from "./assets/spacex3.jpg";

export const projects = [
  {
    id: 1,
    image1: vm_img1,
    image2: vm_img2,
    image3: vm_img3,
    title: "Vintage Motors Rentals",
    type: "Personal Project",
    tech: ["React", "NodeJS", "MongoDB", "AWS"],
    description:
      "A completely responsive e-commerce site for renting Bikes implemented using the MERN stack. Place a booking on your appropriate time and the bike gets delivered to you in no time.",
    site: [
      {
        id: 1,
        link: "https://vintagemotorsrentals.netlify.app",
        button: "VISIT WEBSITE",
      },
      {
        id: 2,
        link: "https://github.com/cjoshmarshall/vintagemotors_client",
        button: "FRONT-END",
      },
      {
        id: 3,
        link: "https://github.com/cjoshmarshall/vintagemotors_server",
        button: "BACK-END",
      },
    ],
  },
  {
    id: 2,
    image1: tgc_img1,
    image2: tgc_img2,
    image3: tgc_img3,
    title: "The Guitar Center",
    tech: ["React", "NodeJS", "MongoDB", "AWS"],
    type: "Personal Project",
    description:
      "A completely responsive e-commerce site for where you can get guitars and guitar accessories. Developed using the MERN stack. Best for retailers who place orders in huge quantites.",
    site: [
      {
        id: 1,
        link: "https://theguitarcenter.netlify.app",
        button: "VISIT WEBSITE",
      },
      {
        id: 2,
        link: "https://github.com/cjoshmarshall/theguitarcenter_client",
        button: "FRONT-END",
      },
      {
        id: 3,
        link: "https://github.com/cjoshmarshall/theguitarcenter_server",
        button: "BACK-END",
      },
    ],
  },
  {
    id: 3,
    image1: blogera1,
    image2: blogera2,
    image3: blogera3,
    title: "Blogera",
    tech: ["React", "NodeJS", "MongoDB", "AWS"],
    type: "Personal Project",
    description:
      "A completely responsive site for blogging and social networking developed using the MERN stack and AWS.",
    site: [
      {
        id: 1,
        link: "https://blogera.netlify.app",
        button: "VISIT WEBSITE",
      },
      {
        id: 2,
        link: "https://github.com/cjoshmarshall/blogera_client",
        button: "FRONT-END",
      },
      {
        id: 3,
        link: "https://github.com/cjoshmarshall/blogera_server",
        button: "BACK-END",
      },
    ],
  },
  {
    id: 4,
    image1: spacex1,
    image2: spacex2,
    image3: spacex3,
    title: "Spacex",
    type: "Personal Project",
    tech: ["React"],
    description: "A completely responsive clone website of SpaceX.",
    site: [
      {
        id: 1,
        link: "https://joshsspacex.netlify.app",
        button: "VISIT WEBSITE",
      },
      {
        id: 2,
        link: "https://github.com/cjoshmarshall/spacex_client",
        button: "FRONT-END",
      },
    ],
  },
  // {
  //     id:4,
  //     image1:sg_img1,
  //     image2:sg_img2,
  //     image3:sg_img3,
  //     title:"Snake Game",
  //     type:"Personal Project",
  //     tech:["React","NodeJS","MongoDB"],
  //     description:"A responsive game made developed with the MERN stack. Press the UP,DOWN,LEFT,RIGHT keys to control the snake and swallow all the mice to score points.",
  //     site:[
  //         {
  //             id:1,
  //             link:"https://joshssnakegame.netlify.app",
  //             button:"VISIT WEBSITE"
  //         },{
  //             id:2,
  //             link:"https://github.com/cjoshmarshall/snakegame_client",
  //             button:"FRONT-END"
  //         },{
  //             id:3,
  //             link:"https://github.com/cjoshmarshall/snakegame_server",
  //             button:"BACK-END"
  //         }
  //     ]
  // },
];
