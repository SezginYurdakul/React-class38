import { createContext, useState } from "react";
export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const changeFavorite = (id) => {
    favorites.includes(id)
      ? setFavorites(favorites.filter((value) => value !== id))
      : setFavorites([...favorites, id]);
  };

  return (
    <FavoriteContext.Provider value={[favorites, changeFavorite]}>
      {children}
    </FavoriteContext.Provider>
  );
};