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
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      >
        <p>Hello world</p>
      </Book>
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
    </section>
  );
};

export default BookList;
