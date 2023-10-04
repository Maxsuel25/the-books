import Logo from "../../assets/LogoWhite.svg";
import styles from "./style.module.scss";

export const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className="container">
            <div className={styles.flexBox}>
               <img src={Logo} alt="Logo Books" />
               <p className="paragraph white">
                  Todos os direitos reservados - Kenzie Academy Brasil
               </p>
            </div>
         </div>
      </footer>
   );
};
