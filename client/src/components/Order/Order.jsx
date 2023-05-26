import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  orderDogs,
  orderByWeight,
  filterByTemperament,
  getAllTemperaments,
} from "../../redux/actions";
import style from "./Order.module.css";

const Order = () => {
  const dispatch = useDispatch();

  const [order, setOrder] = useState("A-Z");

  const orderHandler = (event) => {
    const selectedOrder = event.target.value;
    setOrder(selectedOrder);
    dispatch(orderDogs(selectedOrder));
  };

  const [filter, setFilter] = useState({
    weight: "weight",
    temperament: "All",
  });
  const handleOrderWeight = (event) => {
    dispatch(orderByWeight(event.target.value));
    setFilter({ ...filter, weight: event.target.value });
  };

  const temperaments = useSelector((state) => state.temperaments);

  const filterByTemperHandler = (event) => {
    console.log(event.target.value);
    dispatch(filterByTemperament(event.target.value));
    setFilter({ ...filter, temperament: event.target.value });
  };
  useEffect(() => {
    dispatch(getAllTemperaments());
  }, [dispatch]);

  return (
    <div className={style.orderContainer}>
      <div className={style.orderTitle}>
        Order
        <select
          className={style.orderSelect}
          onChange={orderHandler}
          defaultValue={order}
        >
          <option value="DEFAULT">All Dogs</option>
          <option value="A-Z">from A to Z</option>
          <option value="Z-A">from Z to A</option>
        </select>
      </div>
      <div>
        <div className={style.orderTitle}>
          Weight Ordering
          <select className={style.orderSelect} onChange={handleOrderWeight}>
            <option value="weight" disabled selected>
              All Weight
            </option>
            <option value="Descendente">From heavier to lighter</option>
            <option value="Ascendente">From lighter to heavier</option>
          </select>
        </div>
      </div>
      <div className={style.orderTitle}>
        By temperament
        <select className={style.orderSelect} onChange={filterByTemperHandler}>
          <option value="All">All temperaments</option>
          {temperaments?.map((temp) => {
            return (
              <option value={temp} key={temp}>
                {temp}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Order;
