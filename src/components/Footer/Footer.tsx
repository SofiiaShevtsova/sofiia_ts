import { userEn } from "../../service/data";
import { Logo } from "../commons";

export const Footer = () => {
    return (
      <footer>
      <p >&#xA9; 2023</p>
      <p >All Rights Reserved</p>
      <p >Developed by <a href={userEn.contacts.gitHub}><Logo/></a></p>
      
  </footer>
    )
}
