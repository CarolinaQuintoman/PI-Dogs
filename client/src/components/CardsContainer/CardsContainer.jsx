import React from 'react';
import Card from '../Card/Card';
import style from './CardsContainer.module.css';
import { useSelector } from 'react-redux';


const CardsContainer = () => {
  const dogs = useSelector(state => state.dogs) //mira al estado global

  return (
    <div className={style.container}>
        {
            dogs.map(dog => {
                return <Card key = {dog.id}
                id={dog.id}
                name={dog.name}
                image={dog.image.url}
                weight={dog.weight}
                height={dog.height}
                life_span={dog.life_span}
                created={dog.created}
                />
            })
        }
    </div>
  )
}

export default CardsContainer