import { useContext } from "react";
import { AppContext } from "../../App";

export const Experience = () => {
  const { userInfo } = useContext(AppContext);

  return (
    userInfo && (
      <section id={userInfo.navigation[2][1]}>
        <h2 className="hidden">Experience</h2>
        <ul className="experience-list">
        </ul>
      </section>
    )
  );
};
