import { useContext } from "react";
import { AppContext } from "../../App";

export const Experience = () => {
  const { userInfo } = useContext(AppContext);

  return (
    userInfo && (
      <section id={userInfo.navigation[2][1]}>
        <h2 className="hidden">Experience</h2>
        <ul className="experience-list">
          {userInfo.experience.map((el) => (
            <li className="experience-item">
              <p className="company">{el[0]}</p>
              <p className="duration">{el[1]}</p>
            </li>
          ))}
        </ul>
      </section>
    )
  );
};
