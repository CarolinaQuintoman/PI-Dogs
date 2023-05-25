import React from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div className={style.background}>
      <h1 className={style.title}>
        Puedes buscar tu perro favorito y ver su descripción. Tambien puedes
        crear tu propio perro. Divierte con esta información!!!
      </h1>
      <h1 className={style.title}>
        You can search for your favorite dog and see its description. You can
        also create your own dog. Have fun with this information!!!
      </h1>
      <SearchBar />
      <CardsContainer />
    </div>
  );
};

export default Home;
