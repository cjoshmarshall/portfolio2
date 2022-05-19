import vm_img1 from './assets/vintagemotors1.jpg'
import vm_img2 from './assets/vintagemotors2.jpg'
import vm_img3 from './assets/vintagemotors3.jpg'
import tgc_img1 from './assets/theguitarcenter1.jpg'
import tgc_img2 from './assets/theguitarcenter2.jpg'
import tgc_img3 from './assets/theguitarcenter3.jpg'
import blogera1 from './assets/blogera1.jpg'
import blogera2 from './assets/blogera2.jpg'
import blogera3 from './assets/blogera3.jpg'
import sg_img1 from './assets/snakegame1.jpg'
import sg_img2 from './assets/snakegame2.jpg'
import sg_img3 from './assets/snakegame3.jpg'



export const projects=[
    {
        id:1,
        image1:vm_img1,
        image2:vm_img2,
        image3:vm_img3,
        title:"Vintage Motors Rentals",
        type:"Personal Project",
        tech:["ReactJS","NodeJS","MongoDB","AWS"],
        description:"A completely responsive e-commerce site for renting Bikes implemented using the MERN stack.",
        link:"https://vintagemotorsrentals.netlify.app",
        githubclient:"https://github.com/cjoshmarshall/vintagemotors_client",
        githubserver:"https://github.com/cjoshmarshall/vintagemotors_server"
    },
    {
        id:2,
        image1:tgc_img1,
        image2:tgc_img2,
        image3:tgc_img3,
        title:"The Guitar Center",
        tech:["ReactJS","NodeJS","MongoDB","AWS"],
        type:"Personal Project",
        description:"A completely responsive e-commerce site for where you can get any kinds of guitars. Developed using the MERN stack.",
        link:"https://theguitarcenter.netlify.app",
        githubclient:"https://github.com/cjoshmarshall/theguitarcenter_client",
        githubserver:"https://github.com/cjoshmarshall/theguitarcenter_server"
    },
    {
        id:3,
        image1:blogera1,
        image2:blogera2,
        image3:blogera3,
        title:"Blogera",
        tech:["ReactJS","NodeJS","MongoDB","AWS"],
        type:"Personal Project",
        description:"A completely responsive blog site developed using the MERN stack and AWS.",
        link:"https://blogera.netlify.app",
        githubclient:"https://github.com/cjoshmarshall/blogera_client",
        githubserver:"https://github.com/cjoshmarshall/blogera_server"
    },
    {
        id:4,
        image1:sg_img1,
        image2:sg_img2,
        image3:sg_img3,
        title:"Snake Game",
        type:"Personal Project",
        tech:["ReactJS","NodeJS","MongoDB"],
        description:"A responsive game made developed with the MERN stack. Press the UP,DOWN,LEFT,RIGHT keys to control the snake and swallow all the mice to score points.",
        link:"https://joshssnakegame.netlify.app",
        githubclient:"https://github.com/cjoshmarshall/snakegame_client",
        githubserver:"https://github.com/cjoshmarshall/snakegame_server"
    }
]