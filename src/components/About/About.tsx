import { useContext } from "react";
import { AppContext } from "../../App";
import { Logo } from "../commons";

export const About = () => {
  const { userInfo } = useContext(AppContext);

  if (userInfo) {
    return (
      <section id={userInfo.navigation[0][1]}>
        <h1 className="hidden">{userInfo.name}</h1>
        <div className="name">
          <p>
            {userInfo.mainText[0]}
            <span>{userInfo.mainText[1]}</span>
            {userInfo.mainText[2]}
          </p>
          <p>
            {userInfo.name}
            <span>.</span>
          </p>
        </div>
        <p className="position">{userInfo.work}</p>
        <div className="information">
          <Logo />
          <div className="about-me">
            <p>{userInfo.phrase}</p>
            <p>{userInfo.aboutMe}</p>
            <p>{userInfo.textForCV} &#128521;</p>
          </div>
          <a
            className="download"
            href="https://sunny-yeot-584d1a.netlify.app/Sofiia_Shevtsova_CV.pdf"
            download
          >
            {userInfo.downloadBtn}
          </a>
        </div>
      </section>
    );
  }
};
