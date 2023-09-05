import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { animated, Spring } from "@react-spring/web";

export const Skills = () => {
  const { userInfo } = useContext(AppContext);
  const [start, setStart] = useState(false);

  const startAnimation = () => {
    setStart(true);
  };

  return (
    userInfo && (
      <section id={userInfo.navigation[1][1]} onMouseEnter={startAnimation}>
        <h2 className="hidden">Skills</h2>
        {start && (
          <ul className="skills-list">
            {userInfo.skills.map((el: string[], ind: number) => (
              <li className="skills-row" key={el[0] + "1"}>
                {el.map((skill: string, i: number) => (
                  <Spring
                    key={skill}
                    from={{ y: -500, opacity: 0 }}
                    to={{ y: 0, opacity: 1 }}
                    delay={250 * (i + ind)}
                    config={{ tension: 170, friction: 60 }}
                  >
                    {(style: any) => (
                      <animated.p
                        className="skills-box"
                        style={style}
                      >
                        {skill}
                      </animated.p>
                    )}
                  </Spring>
                ))}
              </li>
            ))}
          </ul>
        )}
      </section>
    )
  );
};
