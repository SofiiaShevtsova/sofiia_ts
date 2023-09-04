import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { useSpring, animated } from "@react-spring/web";

export const Portfolio = () => {
  const { userInfo } = useContext(AppContext);
  const [start, setStart] = useState(false);
  const [springs, api] = useSpring(() => ({ from: { x: -500, opacity: 0 } }));

  const handleShow = () => {
    if (!start) {
      api.start({
        from: {
          x: -500,
          opacity: 0,
        },
        to: {
          x: 0,
          opacity: 1,
        },
      });
    }
    setStart(true);
  };

  return (
    userInfo && (
      <section id={userInfo.navigation[3][1]} onMouseEnter={handleShow}>
        <h2 className="hidden">Experience</h2>
        <animated.ul className="experience-list" style={{ ...springs }}>
          {userInfo.experience.map((el) => (
            <li className="experience-item" key={el[0]}>
              <p className="company">{el[0]}</p>
              <p className="duration">{el[1]}</p>
            </li>
          ))}
        </animated.ul>
      </section>
    )
  );
};
