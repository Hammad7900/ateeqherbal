import React, { useState } from "react";

function InfoListPage({ title }) {
  const [list, setList] = useState([]);

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>{title}</h2>

      {list.length === 0 && (
        <p>{title} Add Your Books</p>
      )}

      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InfoListPage;