import { useState, createContext } from "react";
import {
  About,
  ButtonText,
  Contacts,
  Container,
  Experience,
  Footer,
  Header,
  Portfolio,
  Skills,
} from "./components/commons";
import { User, userEn, userUa } from "./service/data";

export const AppContext: React.Context<{
  userInfo?: User;
}> = createContext({});

function App() {
  const [lang, setLang]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState("ua");
  const [skillsStart, setSkills]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false);
  const [experienceStart, setExperience]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false);
    const [contactsStart, setContacts]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
    ] = useState(false);
  
  const screenWidth = window.screen.width
  console.log(screenWidth);
  


  const changeLang = () => {
    const langToSet = lang === "en" ? "ua" : "en";
    setLang(langToSet);
  };

  const scrollHandler = (e: any) => {
    const setheight = screenWidth < 700 ? 300 : 600;
    const sectionHeight = screenWidth < 700 ? 400 : 800;
    const lastSection = screenWidth < 700 ? 100 : 600;

    const topHeight = e.nativeEvent.srcElement.scrollTop;
    console.dir(topHeight);
    

    if (topHeight > setheight) {
      !skillsStart && setSkills(true);
    }
    if (topHeight > (setheight + sectionHeight)) {
      !experienceStart && setExperience(true);
    }
    if (topHeight > (setheight + sectionHeight + lastSection)) {
      !contactsStart && setContacts(true);
    }
  };

  return (
    <AppContext.Provider
      value={lang === "ua" ? { userInfo: userEn } : { userInfo: userUa }}
    >
      <div className="wrapper" onScroll={scrollHandler}>
        <Header />
        <Container>
          <>
            <About />
            <Skills start={skillsStart} />
            <Experience start={experienceStart} />
            <Portfolio />
            <Contacts start={contactsStart} />
          </>
        </Container>
        <Footer />
        <ButtonText
          text={lang}
          type={"button"}
          className={"toggle-language_btn"}
          onClick={changeLang}
        />
      </div>
    </AppContext.Provider>
  );
}

export default App;
