type User = {
  name: string;
  work: string;
  phrase: string;
  contacts: {
    mobilePhone: string;
    telegram: string;
    linkedin: string;
    gitHub: string;
    email: string;
  };
  navigation: string[];
};

export const userEn: User = {
  name: "Sofiia Shevtsova",
  work: "Front-end developer",
  phrase: "Self-development is the way to self-knowledge",
  contacts: {
    mobilePhone: "+48 507-755-251",
    telegram: "https://t.me/ShevtsovaSofiia",
    linkedin: "https://www.linkedin.com/in/sofiiashevtsova",
    gitHub: "https://github.com/SofiiaShevtsova",
    email: "sofika2404@gmail.com",
  },
  navigation: ["About me", "My projects", "Contacts"],
};

export const userUa: User = {
  name: "Софія Шевцова",
  work: "Розробник",
  phrase: "Саморозвиток - шлях до самопізнання!",
  contacts: {
    mobilePhone: "+48 507-755-251",
    telegram: "https://t.me/ShevtsovaSofiia",
    linkedin: "https://www.linkedin.com/in/sofiiashevtsova",
    gitHub: "https://github.com/SofiiaShevtsova",
    email: "sofika2404@gmail.com",
  },
  navigation: ["Про мене", "Мої проекти", "Контакти"],
};
