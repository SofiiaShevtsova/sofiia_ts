import { useContext } from "react";
import { AppContext } from "../../App";
import InfiniteLooper from "./InfiniteLooper";

export const Skills = () => {
  const { userInfo } = useContext(AppContext);

  return (
    userInfo && (
      <section id={userInfo.navigation[1][1]}>
        <h2 className="hidden">{userInfo.navigation[1][0]}</h2>
        <InfiniteLooper speed={20} direction={"right"}>
          <div className="skills-list">
            <div>
              <img
                style={{ height: "100%" }}
                src="/wordmark_dark.svg"
                alt="Skill icon"
              />
            </div>
            <div>
              <img style={{ height: "100%" }} src="/next.svg" alt="Skill icon" />
            </div>

            <div>
              <img
                style={{ height: "100%" }}
                src="/nodejs.svg"
                alt="Skill icon"
              />
            </div>
            <div>
              <img
                style={{ height: "100%" }}
                src="/tailwind-css.svg"
                alt="Skill icon"
              />
            </div>
            <div>
              <img style={{ height: "100%" }} src="/mui.svg" alt="Skill icon" />
            </div>
            <div>
              <img
                style={{ height: "100%" }}
                src="/mongo.png"
                alt="Skill icon"
              />
            </div>
            <div>
              <img
                style={{ height: "100%" }}
                src="/PostgreSQL.png"
                alt="Skill icon"
              />
            </div>
          </div>
        </InfiniteLooper>
      </section>
    )
  );
};
