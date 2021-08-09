import Card from "../Ui/Card";
import "./BookItem.css";

export default function BookItem(props) {
  return (
    <Card className="books-item">
      <div className="books-item__description">
        <h2 className="books-item__title">{props.title}</h2>
        <h3>{props.author}</h3>
        <h3>Rating: {props.rating}/10</h3>
      </div>
      <div className="books-image">
        <img src={props.link} alt="book_image" />
      </div>
    </Card>
  );
}
