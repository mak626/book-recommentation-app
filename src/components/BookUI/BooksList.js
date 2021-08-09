import "./BooksList.css";
import BookItem from "./BookItem";
import Card from "../Ui/Card";
import BooksFilter from "./BooksFilter";

import { useState } from "react";

export default function Books(props) {
  const [FilteredData, setFilteredData] = useState(props.items[0].genre);
  const onSelectFilter = (select) => setFilteredData(select);

  const filteredData = props.items.filter((e) => e.genre === FilteredData);

  return (
    <Card className="books">
      <div>
        <BooksFilter items={props.items} onSelectFilter={onSelectFilter} />
        {filteredData.map((e) => (
          <BookItem
            key={e.id}
            title={e.title}
            author={e.author}
            rating={e.rating}
            genre={e.genre}
            link={e.link}
          />
        ))}
      </div>
    </Card>
  );
}
