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
            {userInfo.about[0]}
            <span>{userInfo.about[1]}</span>
            {userInfo.about[2]}
          </p>
          <p>
            {userInfo.name}
            <span>.</span>
          </p>
        </div>
        <p className="position">{userInfo.work}</p>
        <div className="information">
          <Logo />
          <p></p>
          <a href="../../images/Sofiia_Shevtsova_CV.pdf" download>
            {userInfo.downloadBtn}
          </a>
        </div>
      </section>
    );
  }
};
