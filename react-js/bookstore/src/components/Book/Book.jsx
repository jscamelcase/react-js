function Book({ img, title, author, children }) {
  return (
    <article className="book">
      <img src={img} alt="book cover" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
}

export default Book;
