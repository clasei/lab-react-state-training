import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import Carousel from "./components/Carousel";

function App() {

  const imagesArr = [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg"
  ];

  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice />
      <Carousel imagesArr={imagesArr}/>

    </div>
  );
}

export default App;
