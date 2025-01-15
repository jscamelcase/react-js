import Book from "./../Book/Book.jsx";

const BookList = () => {
  const books = [
    {
      author: "Jordan Moore",
      title: "Interesting Facts For Curious Minds",
      img: "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg",
    },
    {
      author: "James Clear",
      title: "Atomic Habits",
      img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    },
  ];

  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} />;
      })}
    </section>
  );
};

export default BookList;
