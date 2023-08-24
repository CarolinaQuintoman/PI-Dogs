import React from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions";
import Order from "../../components/Order/Order";

import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  //cuando se monta mi componente que me haga un dispach de esa action getDogs
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <>
      <Order />
      <CardsContainer />
    </>
  );
};

export default Home;
