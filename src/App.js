import Books from "./components/BookUI/BooksList";
import Header from "./components/Ui/Header";

import "./App.css";

function App() {
  const dummyData = [
    {
      id: "1",
      title: "The Curious Case of Benjamin Button",
      author: "F. Scott Fitzgerald",
      rating: 8,
      genre: "Short Story",
      link: "https://images-na.ssl-images-amazon.com/images/I/51zu56hIyIL._SX325_BO1,204,203,200_.jpg",
    },
    {
      id: "2",
      title: "Wings of Fire",
      author: "A. P. J. Abdul Kalam",
      rating: 7,
      genre: "Autobiography",
      link: "https://images-na.ssl-images-amazon.com/images/I/51wbVQTpTgL._SX339_BO1,204,203,200_.jpg",
    },
    {
      id: "3",
      title: "Stride toward freedom",
      author: "Martin Luther King Jr.",
      rating: 3,
      genre: "Autobiography",
      link: "https://images-na.ssl-images-amazon.com/images/I/41y+j93fmRL._BO1,204,203,200_.jpg",
    },
    {
      id: "4",
      title: "The Fault in Our Stars",
      author: "John Green",
      rating: 3,
      genre: "Fiction",
      link: "https://upload.wikimedia.org/wikipedia/en/a/a9/The_Fault_in_Our_Stars.jpg",
    },
    {
      id: "5",
      title: "BattleBorn",
      author: "Claire Vaye Watkins",
      rating: 3,
      genre: "Short Story",
      link: "https://s26162.pcdn.co/wp-content/uploads/2019/09/81mSNDsTCpL-677x1024.jpg",
    },
  ];

  return (
    <div class="App">
      <Header />
      <Books items={dummyData} />
    </div>
  );
}

export default App;
