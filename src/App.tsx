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
  const [experienceStart, setExperience]: [
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
    const setheight = 200;
    const sectionHeight = 200;

    const topHeight = e.nativeEvent.srcElement.scrollTop;
    console.dir(topHeight);
    
    if (topHeight > (setheight + sectionHeight)) {
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
            <Skills/>
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
