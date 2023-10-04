import { BookCard } from "./BookCard";
import styles from "./style.module.scss"

export const BooksList = ({ search, bookList }) => {
   return (
      <div className={styles.booksListBox}>
         <span className="paragraph bold">Livros listados: {bookList.length}</span>
         {search ? <p className="paragraph">Resultados de busca para: <strong>{search}</strong></p> : null}

         {bookList.length > 0 ? (
            <ul className={styles.booksList}>
               {bookList.map((book) => (
                  <BookCard key={book.id} book={book} />
               ))}
            </ul>
         ) : (
            <p className="paragraph">Nenhum resultado encontrado</p>
         )}
      </div>
   );
};
