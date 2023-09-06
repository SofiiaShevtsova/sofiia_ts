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

  const changeLang = () => {
    const langToSet = lang === "en" ? "ua" : "en";
    setLang(langToSet);
  };

  const scrollHandler = (e: any) => {
    const topHeight = e.nativeEvent.srcElement.scrollTop;
    if (topHeight > 800 && topHeight < 1200) {
      !skillsStart && setSkills(true);
    }
    if (topHeight > 1300 && topHeight < 1700) {
      !experienceStart && setExperience(true);
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
            <Contacts />
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
