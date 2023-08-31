import { useContext } from "react";
import { AppContext } from "../../App";

export const Skills = () => {
      const { userInfo } = useContext(AppContext);

    return userInfo && (
        <section id={userInfo.navigation[1][1]}>
            <h2 className="hidden">Skills</h2>
            <ul className="skills-list">
                {userInfo.skills.map(el => (<li className="skills-box"><p className="skills-text">{el}</p></li>))}
            </ul>
        </section>
    )
}