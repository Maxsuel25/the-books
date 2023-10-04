import styles from "./style.module.scss";

export const BookCard = ({ book }) => {
   return (
      <li className={styles.bookCard}>
         <div>
            <h3 className="title2">{book.name}</h3>
            <p className="paragraph">{book.category}</p>
         </div>
         <span className="paragraph bold">
            {book.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
         </span>
      </li>
   );
};
