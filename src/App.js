import { Routes, Route, useNavigate, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


import { 
  UserBar, 
  NavBar,
  Footer,
} from "./components";

import { 
  HomeView,
  DetailView,
  FavoritesView,
  LoginView,
  AboutView,
  DiscoverView,
} from "./views";

import { getRandomValidNumber } from "./utils";

import './App.css';

function App() {
  const navigate = useNavigate();

  /* ACCESS -------------------- */
  const [access, setAccess] = useState(false);
  const EMAIL = "prueba@mail.com";
  const PASSWORD = "1234567";

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const loginAttempt = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
      return true;
    } else {
      return false;
    }
  };

  const onLogOut = () => {
    console.log('loginOut...')
    setAccess(false);
    navigate('/');
  }
  /* ACCESS -------------------- */


  /* CHARACTERS -------------------- */
  const [characters, setCharacters] = useState([]);
  const onSearchRandom = () => {
    const randomId = getRandomValidNumber(characters);
    if (randomId != null) {
      onSearch(randomId);
    } else {
      console.log("No hay mas Personajs por descubrir.");
    }
  };
  const onSearch = (id) => {
    if (characters.find((item) => item.id === Number(id))) return;

    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldCharacters) => [...oldCharacters, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };
  const onClose = (id) => {
    setCharacters(characters.filter((item) => item.id !== id));
  };
  /* CHARACTERS -------------------- */

  const hasCharacterById = (id) => {
    for ( let i = 0; i < characters.length; i++) {
      if ( characters[i].id === id ) return true;
    }
    return false;
  }


  return (
    <div className="App">
      {useLocation().pathname !== "/" && (
        <UserBar email={EMAIL} onLogOut={onLogOut} />
      )}
      
      <div className="container">
        {useLocation().pathname !== "/" && (
          <NavBar onSearch={onSearch} onSearchRandom={onSearchRandom} />
        )}
        <Routes>
          <Route path="/" element={<LoginView loginAttempt={loginAttempt} />} />
          <Route path="/home" element={<HomeView characters={characters} onClose={onClose} />}/>
          <Route path="/detail/:id" element={<DetailView />} />
          <Route path="/favorites" element={<FavoritesView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/discover" element={<DiscoverView onSearch={onSearch} onClose={onClose} hasCharacterById={hasCharacterById} />} />
        </Routes>
        
      </div>
      {useLocation().pathname !== "/" && (
          <Footer />
        )}
    </div>
  );
}

export default App;
