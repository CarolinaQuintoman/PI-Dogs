import React from 'react'
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDogs } from '../../redux/actions';
import SearchBar from '../../components/SearchBar/SearchBar';




const Home = () => {
   const dispatch = useDispatch();
   //const dogs = useSelector(state => state.dogs) //mira al estado global


    useEffect(() => {
     dispatch(getDogs())
   }, [dispatch])

   
  return (
    <div>
      <h1> ESTA ES LA VISTA HOME</h1>
        <SearchBar />
        <CardsContainer />
      
      
    </div>
  )
}

export default Home;