import './main.css'

export const Main: React.FC = () => {
  return (
    <main>
      <div className="container">
        <div className="form">
          <input 
            className="form__input" 
            type="text" 
            placeholder="first line" />
          <input
            className="form__input"
            type="text"
            placeholder="second line"
          />
          <button className="form__button"> Get a new meme image</button>
        </div>
      </div>
    </main>
  );
};
