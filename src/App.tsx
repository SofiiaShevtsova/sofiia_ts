import { useState, createContext } from "react";
import { About, ButtonText, Container, Footer, Header } from "./components/commons";
import { User, userEn, userUa } from "./service/data";

export const AppContext: React.Context<{
  userInfo?: User;
}> = createContext({});

function App() {
  const [lang, setLang] = useState('ua')
  
  const changeLang = () => {
    const langToSet = lang === 'en' ? 'ua' : 'en';
    setLang(langToSet)
  }

  return (
    <AppContext.Provider value={lang === 'ua'? {userInfo: userEn}: {userInfo: userUa}}>
      <Header />
      <Container>
        <About/>
      </Container>
      <Footer/>
      <ButtonText text={lang} type={"button"} className={"toggle-language_btn"} onClick={changeLang}/>
    </AppContext.Provider>
  );
}

export default App;
