import "./main.css";
import { useState, useEffect } from "react";

export const Main: React.FC = () => {
  const [memeItem, setItemMeme] = useState({
    firstLine: "",
    secondLine: "",
    randomMemeImg: "https://i.imgflip.com/1bhf.jpg",
  });

  const [allMemes, setAllMemes] = useState<
    {
      id: number;
      name: string;
      url: string;
      width?: number;
      height?: number;
      box_count?: number;
    }[]
  >([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    let randomNum = Math.floor(Math.random() * allMemes.length);
    let url = allMemes[randomNum].url;
    setItemMeme((prev) => ({
      ...prev,
      randomMemeImg: url,
      firstLine: "",
      secondLine: "",
    }));
  }

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setItemMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main>
      <div className="container">
        <div className="form">
          <input
            className="form__input"
            type="text"
            placeholder="first line"
            name="firstLine"
            value={memeItem.firstLine}
            onChange={handleChange}
          />
          <input
            className="form__input"
            type="text"
            placeholder="second line"
            name="secondLine"
            onChange={handleChange}
            value={memeItem.secondLine}
          />
          <button className="form__button" onClick={getMemeImage}>
            {" "}
            Get a new meme image
          </button>
        </div>
        <div className="meme">
          <img
            className="meme__image"
            src={memeItem.randomMemeImg}
            alt="random meme"
          />
          <h3 className="meme__title meme__title-onTop">
            {memeItem.firstLine}
          </h3>
          <h3 className="meme__title meme__title-onBottom">
            {memeItem.secondLine}
          </h3>
        </div>
      </div>
    </main>
  );
};
