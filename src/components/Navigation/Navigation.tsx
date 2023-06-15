import { userEn } from "../../service/data"

const Navigation = () => {
    return (
        <nav>
            {userEn.navigation.map(el =>(<a href="/" key={el}>{el}</a>))}
      </nav>
    )
}

export default Navigation