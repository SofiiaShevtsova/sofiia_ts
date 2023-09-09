import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { useSpring, animated } from "@react-spring/web";

export const Contacts = () => {
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
        delay: 1000,
      });
    }
    setStart(true);
  };

  const contactsArray = userInfo ? Object.entries(userInfo.contacts) : [];  

  return (
    userInfo && (
      <section id={userInfo.navigation[4][1]} onMouseEnter={handleShow}>
        <h2 className="hidden">{userInfo.navigation[4][0]}</h2>
        <animated.ul className="contacts-list" style={{ ...springs }}>
          {contactsArray.map((el) => (
            <li className="experience-item" key={el[0]}>
              <a href={el[1].value} className="contacts-link">
                {el[1].icon}
              </a>
            </li>
          ))}
        </animated.ul>
      </section>
    )
  );
};
