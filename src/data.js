import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
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
    quote:
      "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
  },
  {
    id: 2,
    image: "https://d1y2qj23ol72q6.cloudfront.net/2019/06/python-blog-1.jpg",
    name: "Python",
    title: "regular guy",
    quote:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
  },
  {
    id: 3,
    image: "https://cdn.wallpapersafari.com/87/57/VKE8r0.jpg",
    name: "Huffman Compression App",
    title: "regular guy",
    quote: "Function call using [Napi] to add [C++] addon in [Nodejs]. ",
  },
];
