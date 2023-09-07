import { useContext } from "react";
import { AppContext } from "../../App";
import { Spring, animated } from "@react-spring/web";

export const Experience = ({ start }: { start: boolean }) => {
  const { userInfo } = useContext(AppContext);

  return (
    userInfo && (
      <section id={userInfo.navigation[2][1]}>
        <h2 className="hidden">{userInfo.navigation[2][0]}</h2>
        {start && (
          <Spring
            from={{ x: -500, opacity: 0 }}
            to={{ x: 0, opacity: 1 }}
            delay={500}
            config={{ tension: 170, friction: 60 }}
          >
            {(style: any) => (
              <animated.ul className="experience-list" style={style}>
                {userInfo.experience.map((el) => (
                  <li className="experience-item" key={el[0]}>
                    <p className="company">{el[0]}</p>
                    <p className="duration">{el[1]}</p>
                  </li>
                ))}
              </animated.ul>
            )}
          </Spring>
        )}
      </section>
    )
  );
};
