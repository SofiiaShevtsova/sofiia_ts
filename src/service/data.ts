export type User = {
  name: string;
  work: string;
  mainText: string;
  downloadBtn: string;
  phrase: string;
  aboutMe: string;
  textForCV: string;
  skills: string[][];
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
  skills:[['MongoBD', 'SQL', 'NodeJS'], ['SASS', 'TypeScript', 'React', 'Redux'], ['HTML', 'CSS', 'JavaScript']],
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
  skills:[['MongoBD', 'SQL', 'NodeJS'], ['SASS', 'TypeScript', 'React', 'Redux'], ['HTML', 'CSS', 'JavaScript']],
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
