import travelApp from "../images/travel-app.png";
import food from "../images/food.png";
import game from "../images/game.png";
import cake from "../images/cake.png";
import iceCream from "../images/ice-cream.png";
import movies from "../images/movies.png";
import promptopia from "../images/promptopia.png";
import {
  IconsLinkedin,
  IconsGithub,
  IconsGmail,
  IconsPhone,
  IconsTelegram,
} from "../components/Icon/Icons";

type Contacts = {
  value: string;
  icon: JSX.Element;
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
    ["Сool new courses", "soon"],
    ["Binary Studio Academy", "from June 2023 to August 2023"],
    ["Brainnest", "from April 2023 to May 2023"],
    ["Academy GO IT", "from August 2022 to April 2023"],
  ],
  portfolio: [
    {
      imageURL: travelApp,
      name: "Travel-app",
      link: "https://dulcet-dodol-f6ff6a.netlify.app/",
    },
    {
      imageURL: promptopia,
      name: "PrompTopia",
      link: "https://first-next-js-project-1xey.vercel.app/",
    },
    {
      imageURL: movies,
      name: "Movies",
      link: "https://sofiiashevtsova.github.io/films_list/",
    },
    {
      imageURL: game,
      name: "Little game",
      link: "https://sofiiashevtsova.github.io/brainnest_JS/pages/shipsBattle.html",
    },
    {
      imageURL: food,
      name: "Food-app",
      link: "https://loki99911.github.io/Node.JS_Project_Front/main",
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
      value: "tel:+48507755251",
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
    ["Нові круті курси", "скоро"],
    ["Binary Studio Academy", "червень 2023 - серпень 2023"],
    ["Brainnest", "квітень 2023 - травень 2023"],
    ["Academy GO IT", "серпень 2022 - квітень 2023"],
  ],
  portfolio: [
    {
      imageURL: travelApp,
      name: "Подорожі",
      link: "https://dulcet-dodol-f6ff6a.netlify.app/",
    },
    {
      imageURL: promptopia,
      name: "Некс проєкт",
      link: "https://first-next-js-project-1xey.vercel.app/",
    },
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
      imageURL: food,
      name: "Їжа",
      link: "https://loki99911.github.io/Node.JS_Project_Front/",
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
      value: "tel:+48507755251",
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
