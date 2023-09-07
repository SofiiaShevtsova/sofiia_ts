import travelApp from '../images/travel-app.png';

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
    mobilePhone: string;
    telegram: string;
    linkedin: string;
    gitHub: string;
    email: string;
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
      imageURL: travelApp,
      name: "Travel-app",
      link: "https://dulcet-dodol-f6ff6a.netlify.app/",
    },
    {
      imageURL: travelApp,
      name: "Travel-app",
      link: "https://dulcet-dodol-f6ff6a.netlify.app/",
    },
  ],
  contacts: {
    mobilePhone: "+48 507-755-251",
    telegram: "https://t.me/ShevtsovaSofiia",
    linkedin: "https://www.linkedin.com/in/sofiiashevtsova",
    gitHub: "https://github.com/SofiiaShevtsova",
    email: "sofika2404@gmail.com",
  },
  navigation: [
    ["About me", "about"],
    ["Skills", "skills"],
    ["Experience", "experience"],
    ["Portfolio", "portfolio"],
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
      imageURL: "../../images/travel-app.png",
      name: "Бронювання подорожей",
      link: "https://dulcet-dodol-f6ff6a.netlify.app/",
    },
  ],

  contacts: {
    mobilePhone: "+48 507-755-251",
    telegram: "https://t.me/ShevtsovaSofiia",
    linkedin: "https://www.linkedin.com/in/sofiiashevtsova",
    gitHub: "https://github.com/SofiiaShevtsova",
    email: "sofika2404@gmail.com",
  },
  navigation: [
    ["Це я!", "about"],
    ["Навички", "skills"],
    ["Досвід", "experience"],
    ["Мої роботи", "portfolio"],
    ["Зв'язатися зі мною", "contacts"],
  ],
};
