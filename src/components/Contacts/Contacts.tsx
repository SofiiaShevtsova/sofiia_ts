import { useContext } from "react";
import { AppContext } from "../../App";
import { Spring, animated } from "@react-spring/web";

export const Contacts = ({ start }: { start: boolean }) => {
  const { userInfo } = useContext(AppContext);

  const contactsArray = userInfo ? Object.entries(userInfo.contacts) : [];  

  return (
    userInfo && (
      <section id={userInfo.navigation[4][1]}>
        <h2 className="hidden">{userInfo.navigation[4][0]}</h2>
                {start && (
          <Spring
            from={{
          x: -500,
          opacity: 0,
        }}
            to={{
          x: 0,
          opacity: 1,
        }}
            delay={1000}
            config={{ tension: 170, friction: 60 }}
          >
            {(style: any) => (
        <animated.ul className="contacts-list" style={style}>
          {contactsArray.map((el) => (
            <li className="experience-item" key={el[0]}>
              <a href={el[1].value} className="contacts-link">
                {el[1].icon}
              </a>
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
