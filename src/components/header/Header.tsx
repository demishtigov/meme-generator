import './header.css'
import titleImg from '../../img/title.png';

export const Header: React.FC = () => {
  return (
    
    <header className="header">
      <img className="header__img" src={titleImg} alt="troll face" />
      <h1 className="header__title"> Meme generator </h1>
    </header>
  );
};
