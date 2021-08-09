import React from "react";
import "./BooksFilter.css";

export default function BooksFilter(props) {
  const filterHandler = (event) => props.onSelectFilter(event.target.value);

  let x = props.items.map((e) => e.genre);
  x = [...new Set(x)];
  console.log(x);

  return (
    <div className="genre">
      <h2>Genre</h2>
      <select name="genre" id="genre" onChange={filterHandler}>
        {x.map((e) => (
          <option value={e}>{e}</option>
        ))}
      </select>
    </div>
  );
}
