import React, { useState } from 'react';
import Card from '../Card/Card';
import style from './CardsContainer.module.css';
import { useSelector } from 'react-redux';
import { Pagination } from '../Pagination/Pagination';
import Loader from '../Loader/Loader';

const CardsContainer = () => {
  const dogs = useSelector(state => state.dogs) //mira al estado global

  const [ page, setPage ] = useState(1)
   const [ perPage, setPerPage ] = useState(8)

   const maximo = dogs?Math.ceil(dogs.length / perPage) : 1;
   if (!dogs){
    return (
    <div>
      <Loader className={style.loader}/>
    </div>
    )
   }
  //  const handlePerPageChange = (event) => {
  //   const newPerPage = parseInt(event.target.value);
  //   setPerPage(newPerPage);
  // };

   return (
    <div className={style.container}>
        {
            dogs.slice(
              (page - 1) * perPage,
              (page - 1) * perPage + perPage
            ).map(dog => {
                return <Card key = {dog.id}
                id={dog.id}
                name={dog.name}
                image={dog.image}
                weight={dog.weight}
                height={dog.height}
                life_span={dog.life_span}
                created={dog.created}
                temperament={dog.temperament}
                />
            })
        }
        
      <Pagination page={page} setPage={setPage} maximo={maximo}/>
      
    </div>
  )
}

export default CardsContainer