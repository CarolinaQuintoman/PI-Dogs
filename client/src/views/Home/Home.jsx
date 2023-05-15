import React from 'react'
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDogs } from '../../redux/actions';

const Home = () => {
   const dispatch = useDispatch();

    useEffect(() => {
     dispatch(getDogs())
   }, [dispatch])

  return (
    <div>
      <h1> ESTA ES LA VISTA HOME</h1>
      <CardsContainer/>
    </div>
  )
}

export default Home;