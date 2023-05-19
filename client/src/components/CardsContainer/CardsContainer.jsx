import React, { useState } from 'react';
import Card from '../Card/Card';
import style from './CardsContainer.module.css';
import { useSelector } from 'react-redux';
import { Pagination } from '../Pagination/Pagination';

const CardsContainer = () => {
  const dogs = useSelector(state => state.dogs) //mira al estado global

  const [ page, setPage ] = useState(1)
   const [ perPage, setPerPage ] = useState(8)

   const maximo = dogs?dogs.length / perPage:0;
   if (!dogs){
    return <div>LOADING...</div>
   }

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
                image={dog.image.url}
                weight={dog.weight}
                height={dog.height}
                life_span={dog.life_span}
                created={dog.created}
                temperament={dog.temperament}
                />
            })
        }
        <div>
        
        
      </div>
      <Pagination page={page} setPage={setPage} maximo={maximo}/>
      
    </div>
  )
}

export default CardsContainer