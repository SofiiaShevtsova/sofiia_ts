import { useContext } from "react";
import { AppContext } from "../../App";

export const Contacts = () => {
  const { userInfo } = useContext(AppContext);

  const contactsArray = userInfo ? Object.entries(userInfo.contacts) : [];  

  return (
    userInfo && (
      <section id={userInfo.navigation[4][1]}>
        <h2 className="hidden">{userInfo.navigation[4][0]}</h2>
          {contactsArray.map((el) => (
            <div key={el[0]}>
              <a href={el[1].value} className="contacts-link">
                {el[1].icon}
              </a>
            </div>
          ))}
      </section>
    )
  );
};
