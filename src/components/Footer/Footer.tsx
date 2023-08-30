import { userEn } from "../../service/data";
import { Logo } from "../commons";

export const Footer = () => {
  return (
    <footer>
      <p>
        <span>&#xA9;</span> 2023
      </p>
      <p>All Rights Reserved</p>
      <p>Developed by</p>
      <a href={userEn.contacts.gitHub}>
        <Logo />
      </a>
    </footer>
  );
};
