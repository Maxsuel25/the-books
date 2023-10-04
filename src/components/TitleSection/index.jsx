import styles from "./style.module.scss";

export const TitleSection = () => {
   return (
      <section className={styles.titleSection}>
         <div className="container">
            <h1 className="title1 white">Encontre o seu livro favorito</h1>
         </div>
      </section>
   );
};
