import React, { useState } from "react";

function BooksPage() {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState("");

  const addBook = () => {
    if (bookName.trim() === "") return;
    setBooks([...books, { id: Date.now(), name: bookName }]);
    setBookName("");
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Add Your Books</h2>

      <input
        type="text"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
        placeholder="Enter book name"
      />
      <button onClick={addBook}>Add Book</button>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.name}
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksPage;