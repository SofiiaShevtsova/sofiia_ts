import { userEn } from "../../service/data"

export const Navigation = () => {
    return (
        <nav>
            {userEn.navigation.map(el =>(<a href="/" key={el}>{el}</a>))}
      </nav>
    )
}
