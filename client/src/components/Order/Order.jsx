import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderDogs, orderByWeight, filterByTemperament, getAllTemperaments, filterByOrigin } from '../../redux/actions';


const Order = () => {
    const allDogsOrder = useSelector(state => state.allDogsOrder)
    const dispatch = useDispatch();

    
    const [ order, setOrder ] = useState('A-Z')
    

    const orderHandler = (event) =>{
        const selectedOrder = event.target.value;
        setOrder(selectedOrder);
        dispatch(orderDogs(selectedOrder));
        
    }

    const [filter, setFilter ] = useState({
        origin: "All",
        weight: "weight",
        temperament: "All"
    })
    const handleOrder2 = (event) =>{
        dispatch(orderByWeight(event.target.value))
        setFilter({...filter,
          weight: event.target.value,
        });
      }
    const [ temperament , setTemperament ] = useState('All')
    const temperaments = useSelector(state => [...state.temperaments].sort(
        function(a,b){
            if(a<b) return -1;
            else return 1;
        }
    ))
    const filterByTemperHandler = (event) =>{
        dispatch(filterByTemperament(event.target.value))
        setFilter({...filter, temperament: event.target.value})

        //setTemperament(event.target.value)
    }
    useEffect(()=> {
        dispatch(getAllTemperaments())
      }, [dispatch]);
    
    const handlerFilterByOrigin = (event) => {
        const selectedOrigin = event.target.value;
        dispatch(filterByOrigin(selectedOrigin));
        setFilter({
            origin: selectedOrigin,
        });
    }  

  return (
    <div>
        <div>
        Order
        <select onChange={orderHandler} value={order}>
            <option value="A-Z">from A to Z</option>
            <option value="Z-A">from Z to A</option>
        </select>
        </div>
        <div >
          <div>Weigh Ordering
            <select value = {filter.weight} onChange={event =>{handleOrder2(event)}}>
              <option value="weight" disabled selected></option>
              <option value="min">From lighter to heavier</option>
              <option value="max">From heavier to lighter</option>
            </select>
            </div>
          <p>-</p>
        </div>
        <div>
        By temperament
        <select onChange={event => {filterByTemperHandler(event)}} value={filter.temperament}>
            <option value="All">All temperaments</option>
            {
                temperaments.map((temp) => {
                    return (
                        <option value={temp} key={temp}>
                            {temp}
                        </option>
                    )
                })
            }
        </select>
        </div>
        {/* <div>
        Order by Origin 
        <select value={filter.origin} onChange={ handlerFilterByOrigin}>
            <option value="All">ALL DOGS</option>
            <option value="api">Api Dogs</option>
            <option value="bdd">My Dogs </option>
        </select>
        </div>
        <div></div> */}
        
    </div>
  )
}

export default Order