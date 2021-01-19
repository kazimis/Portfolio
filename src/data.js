import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaCss3 } from "react-icons/fa";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiReact,
  SiCsharp,
  SiAngular,
  SiJquery,
  SiTypescript,
} from "react-icons/si";

import { DiNodejsSmall } from "react-icons/di";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
  {
    id: 5,
    url: "/profile",
    text: "profile",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/sarajuddin-kazimi/",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.github.com/kazimis",
    icon: <AiFillGithub />,
  },
];

export const slidersData = [
  {
    id: 1,
    image:
      "https://back2lobby.com/wp-content/uploads/2020/06/sale_25561_primary_image_wide-100827989-large-1024x512.jpg",
    name: "C++",
    title: "Huffman Encoding",
    info:
      "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
  },
  {
    id: 2,
    image:
      "https://image.downhdwalls.com/photos/1024x768/c-screengrab-1024x768.jpeg",
    name: "Python",
    title: "Regular Code",
    info:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
  },
];

export const projectsData = [
  {
    id: 1,
    name: "Tetris Game",
    image:
      "https://i.pinimg.com/originals/3f/a9/fe/3fa9fe249f516ff87909b587f7fefc8e.jpg",
    info: "Tetris game using WebGl and Javascript",
  },
  {
    id: 2,
    name: "C++",
    image:
      "https://image.downhdwalls.com/photos/1024x768/c-screengrab-1024x768.jpeg",
    info: "Function call using [Napi] to add [C++] addon in [Nodejs]. ",
  },
  {
    id: 3,
    name: "C++",
    image:
      "https://image.downhdwalls.com/photos/1024x768/c-screengrab-1024x768.jpeg",
    info: "Function call using [Napi] to add [C++] addon in [Nodejs]. ",
  },
  {
    id: 4,
    name: "C++",
    image:
      "https://image.downhdwalls.com/photos/1024x768/c-screengrab-1024x768.jpeg",
    info: "Function call using [Napi] to add [C++] addon in [Nodejs]. ",
  },
  {
    id: 5,
    name: "C++",
    image:
      "https://image.downhdwalls.com/photos/1024x768/c-screengrab-1024x768.jpeg",
    info: "Function call using [Napi] to add [C++] addon in [Nodejs]. ",
  },
  {
    id: 6,
    name: "C++",
    image:
      "https://image.downhdwalls.com/photos/1024x768/c-screengrab-1024x768.jpeg",
    info: "Function call using [Napi] to add [C++] addon in [Nodejs]. ",
  },
];

export const jobsData = [
  {
    id: "1",
    order: 1,
    title: "IT Technician",
    dates: "June 2018 - Current",
    duties: [
      "Provide technical supports to store’s computers and POS system",
      "Perform preventive and scheduled maintenance to POS systems",
      "Handle critical situations with high standards and efficient approach to avoid sales delay",
      "Achieved exemplary punctuality score from company and achieved YVR Star award",
    ],
    company: "LS Travel",
  },
  {
    id: "2",
    order: 2,
    title: "Customer Service",
    dates: "July 2017 - April 2018",
    duties: [
      "Responded promptly and professionally to customer inquiries and complaints",
      "Provided excellent customer service whilst running a till",
      "Ensured the customers satisfaction through efficient and productive service during busy hours",
    ],
    company: "Safeway",
  },
];

export const skills = [
  {
    id: 1,
    name: "HTML",
    icon: <AiFillHtml5 />,
    text: "Used latest version of HTML5",
  },
  {
    id: 2,
    name: "CSS",
    icon: <FaCss3 />,
    text: "Used latest version of CSS",
  },
  {
    id: 3,
    name: "C++",
    icon: <SiCplusplus />,
    text: "Used latest version of HTML5",
  },

  {
    id: 4,
    name: "C#",
    icon: <SiCsharp />,
  },
  {
    id: 5,
    name: "Javascript",
    icon: <SiJavascript />,
    text: "Used latest version of HTML5",
  },

  {
    id: 6,
    name: "Python",
    icon: <SiPython />,
    text: "Used latest version of Python",
  },
  { id: 7, name: "ReactJs", icon: <SiReact />, text: "React Library" },
  { id: 8, name: "NodeJs", icon: <DiNodejsSmall />, text: "test" },
  { id: 9, name: "AngularJs", icon: <SiAngular />, text: "test" },
  { id: 10, name: "jQuery", icon: <SiJquery />, text: "test" },
  { id: 11, name: "TypeScript", icon: <SiTypescript />, text: "test" },
];
