import { useContext } from "react";
import { AppContext } from "../../App";

export const Skills = () => {
  const { userInfo } = useContext(AppContext);

  return (
    userInfo && (
      <section id={userInfo.navigation[1][1]}>
        <h2 className="hidden">Skills</h2>
        <ul className="skills-list">
          {userInfo.skills.map((el) => (
              <li className="skills-row" key={el[0]+'1'}>
                  {el.map(skill=><p className="skills-box" key={skill}>{skill}</p>)}
              
            </li>
          ))}
        </ul>
      </section>
    )
  );
};
