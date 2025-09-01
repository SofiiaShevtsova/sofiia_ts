import { ReactNode } from "react";
import kvazar from "../images/kvazar.png";
import game from "../images/game.png";
import cake from "../images/cake.png";
import iceCream from "../images/ice-cream.png";
import movies from "../images/movies.png";
import factory from "../images/factory-wise.png";

import {
  IconsLinkedin,
  IconsGithub,
  IconsGmail,
  IconsPhone,
  IconsTelegram,
} from "../components/Icon/Icons";

type Contacts = {
  value: string;
  icon: ReactNode;
};
export type User = {
  name: string;
  work: string;
  mainText: string;
  downloadBtn: string;
  phrase: string;
  aboutMe: string;
  textForCV: string;
  skills: string[][];
  experience: string[][];
  portfolio: {
    imageURL: string;
    name: string;
    link: string;
  }[];
  contacts: {
    mobilePhone: Contacts;
    telegram: Contacts;
    linkedin: Contacts;
    gitHub: Contacts;
    email: Contacts;
  };
  navigation: string[][];
};

export const userEn: User = {
  name: "Sofiia Shevtsova",
  work: "Front-end developer",
  mainText: "I'm",
  downloadBtn: "Download CV",
  phrase: "'Self-development is the way to self-knowledge'",
  aboutMe:
    "I like to develop something new, to see how everything changes during the development process. " +
    "I always want to improve something and make it better. " +
    "I want to become a professional in the field of creating applications. ",
  textForCV: "You can find more information about me in my CV",
  skills: [
    ["Styled-component"],
    ["Formik", "Chakra UI"],
    ["MongoBD", "SQL", "NodeJS"],
    ["SASS", "TypeScript", "React", "Redux"],
    ["HTML", "CSS", "JavaScript"],
  ],
  experience: [
    ["Factory Wise", "from July 2024"],
    ["Big Orange Cat", "from March 2024 to July 2024"],
    ["BAZA TRAINEE UKRAINE", "from September 2023 to March 2024"],
    ["Binary Studio Academy", "from June 2023 to August 2023"],
    ["Brainnest", "from April 2023 to May 2023"],
    ["Academy GO IT", "from August 2022 to April 2023"],
  ],
  portfolio: [
    {
      imageURL: movies,
      name: "Movies",
      link: "https://sofiiashevtsova.github.io/films_list/",
    },
    {
      imageURL: kvazar,
      name: "Kvazar",
      link: "https://www.kvazar-xmastree.com.ua/uk",
    },
    {
      imageURL: factory,
      name: "Factory Wise",
      link: "https://factorywise.com.ua",
    },
    {
      imageURL: game,
      name: "Little game",
      link: "https://sofiiashevtsova.github.io/brainnest_JS/pages/shipsBattle.html",
    },
    {
      imageURL: cake,
      name: "Bobrus-cake",
      link: "https://sofiiashevtsova.github.io/Bobrus-cake/",
    },
    {
      imageURL: iceCream,
      name: "Ice-cream",
      link: "https://sofiiashevtsova.github.io/project4/",
    },
  ],
  contacts: {
    mobilePhone: {
      value: "tel:+48796460283",
      icon: IconsPhone(),
    },
    telegram: {
      value: "https://t.me/ShevtsovaSofiia",
      icon: IconsTelegram(),
    },

    linkedin: {
      value: "https://www.linkedin.com/in/sofiiashevtsova",
      icon: IconsLinkedin(),
    },

    gitHub: {
      value: "https://github.com/SofiiaShevtsova",
      icon: IconsGithub(),
    },

    email: {
      value: "mailto:sofika2404@gmail.com",
      icon: IconsGmail(),
    },
  },
  navigation: [
    ["About me", "about"],
    ["Skills", "skills"],
    ["Experience", "experience"],
    ["My works", "portfolio"],
    ["Contacts", "contacts"],
  ],
};

export const userUa: User = {
  name: "Софія Шевцова",
  work: "Фронт-енд розробник",
  mainText: "Я-",
  downloadBtn: "Завантажити резюме",
  phrase: "'Саморозвиток - шлях до самопізнання!'",
  aboutMe:
    "Люблю розробляти щось нове, бачити як все змінюється в процесі розробки. " +
    "Завжди хочеться щось вдосконалити і зробити краще. Хочу стати професіоналом в сфері створення додатків. ",
  textForCV: "Більше інформації про мене знайдете в моєму резюме",
  skills: [
    ["Styled-component"],
    ["Formik", "Chakra UI"],
    ["MongoBD", "SQL", "NodeJS"],
    ["SASS", "TypeScript", "React", "Redux"],
    ["HTML", "CSS", "JavaScript"],
  ],
  experience: [
    ["Factory Wise", "від липень 2024"],
    ["Big Orange Cat", "березень 2024 - липень 2024"],
    ["BAZA TRAINEE UKRAINE", "вересень 2023 - березень 2024"],
    ["Binary Studio Academy", "червень 2023 - серпень 2023"],
    ["Brainnest", "квітень 2023 - травень 2023"],
    ["Academy GO IT", "серпень 2022 - квітень 2023"],
  ],
  portfolio: [
    {
      imageURL: movies,
      name: "Фільми",
      link: "https://sofiiashevtsova.github.io/films_list/",
    },

    {
      imageURL: game,
      name: "Ігри",
      link: "https://sofiiashevtsova.github.io/brainnest_JS/pages/shipsBattle.html",
    },
    {
      imageURL: kvazar,
      name: "Kvazar",
      link: "https://www.kvazar-xmastree.com.ua/uk",
    },
    {
      imageURL: factory,
      name: "Factory Wise",
      link: "https://factorywise.com.ua",
    },
    {
      imageURL: cake,
      name: "Тортики",
      link: "https://sofiiashevtsova.github.io/Bobrus-cake/",
    },
    {
      imageURL: iceCream,
      name: "Морозивко",
      link: "https://sofiiashevtsova.github.io/project4/",
    },
  ],
  contacts: {
    mobilePhone: {
      value: "tel:+48796460283",
      icon: IconsPhone(),
    },
    telegram: {
      value: "https://t.me/ShevtsovaSofiia",
      icon: IconsTelegram(),
    },

    linkedin: {
      value: "https://www.linkedin.com/in/sofiiashevtsova",
      icon: IconsLinkedin(),
    },

    gitHub: {
      value: "https://github.com/SofiiaShevtsova",
      icon: IconsGithub(),
    },

    email: {
      value: "mailto:sofika2404@gmail.com",
      icon: IconsGmail(),
    },
  },
  navigation: [
    ["Це я!", "about"],
    ["Навички", "skills"],
    ["Досвід", "experience"],
    ["Мої роботи", "portfolio"],
    ["Зв'язатися зі мною", "contacts"],
  ],
};
