import { userEn } from "../../service/data"

export const Footer = () => {
    return (
      <div>
      <p >&#xA9; 2023</p>
      <p >All Rights Reserved</p>
      <p >Developed by <a href={userEn.contacts.gitHub}>{userEn.name}</a></p>
      
  </div>
    )
}
