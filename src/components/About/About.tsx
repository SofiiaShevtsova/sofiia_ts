import { useContext } from "react";
import { AppContext } from "../../App";

export const About = () => {
  const { userInfo } = useContext(AppContext);
  return (
    <div id={userInfo?.navigation[0][1]}>
      <div className="name">
        <p>
          I<span>'</span>m
        </p>
        <p>
          Sofiia Shevtsova<span>.</span>
        </p>
      </div>
      <p className="position">Front-end developer</p>
    </div>
  );
};
