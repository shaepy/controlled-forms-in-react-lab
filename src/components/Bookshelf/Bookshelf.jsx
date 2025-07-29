import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  const handleInputChange = (e) => {
    console.log("Event from handleInputChange:", e.target.value);
    const updatedBook = {
      ...newBook,
      [e.target.name]: e.target.value,
    };
    setNewBook(updatedBook);
    console.log("New Book is:", updatedBook);
  };

  const handleSubmit = (e) => {
    console.log("Books before submit:", books);

    e.preventDefault();
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    console.log("Updated Books list:", updatedBooks);

    // Clear newBook
    setNewBook({ title: "", author: "" });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" value={newBook.title} onChange={handleInputChange} required />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <input type="text" name="author" value={newBook.author} onChange={handleInputChange} required />
          </div>
          <button>Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div className="bookCard" key={index}>
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
