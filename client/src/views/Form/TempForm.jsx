import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllTemperaments } from "../../redux/actions";
import style from "./Form.module.css";

const TempForm = () => {
    const temperaments = useSelector((state) => state.temperaments);
    const dispatch = useDispatch()
  const [selectedTemperaments, setSelectedTemperaments] = useState([]);

    const handleCheckboxChange = (event) => {
        const temperament = event.target.value;
        if (event.target.checked) {
          setSelectedTemperaments([...selectedTemperaments, temperament]);
        } else {
          setSelectedTemperaments(
            selectedTemperaments.filter((temp) => temp !== temperament)
          );
        }
      };

      useEffect(() => {
        dispatch(getAllTemperaments());
      }, [dispatch]);
      
  return (
    <div>
        <div className={style.containerTemp} >
        <label>Selecciona los temperamentos:</label>
        <div className="temperament-container">
          {temperaments.map((temperament, index) => (
            <div className="temperament-item" key={index}>
              <input
                className="temperament-checkbox"
                type="checkbox"
                id={`temperament-${index}`}
                name="temperaments"
                value={temperament}
                checked={selectedTemperaments.includes(temperament)}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={`temperament-${index}`}>{temperament}</label>
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}

export default TempForm