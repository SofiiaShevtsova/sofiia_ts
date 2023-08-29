import { useContext } from "react";
import { AppContext } from "../../App";

export const Navigation = () => {
     const { userInfo } = useContext(AppContext);
    return (
        <nav className="navigation">
            {userInfo?.navigation.map(el =>(<a href={"#"+el[1]} key={el[0]}>{el[0]}</a>))}
      </nav>
    )
}
