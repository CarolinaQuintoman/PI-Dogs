import React, { useState, useEffect } from "react";
import axios from "axios";
import validate from "./validate";
import { useDispatch } from "react-redux";
import { getAllTemperaments } from "../../redux/actions";
import style from "./Form.module.css";
import TempForm from "./TempForm";

const Form = () => {
  const dispatch = useDispatch();
  // const temperaments = useSelector((state) => state.temperaments);
  // const [selectedTemperaments, setSelectedTemperaments] = useState([]);

  const [form, setForm] = useState({
    name: "",
    image: "",
    heightMax: "",
    heightMin: "",
    weightMin: "",
    weightMax: "",
    life_span: "",
    temperaments: [],
  });
  const [errors, setErrors] = useState({
    name: "",
    image: "",
    heightMax: "",
    heightMin: "",
    weightMin: "",
    weightMax: "",
    life_span: "",
    temperaments: [],
  });
  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setErrors(
      validate({
        ...form,
        [property]: value,
      })
    );
    setForm({
      ...form,
      [property]: value,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/dogs", form)
      .then((response) => {
        console.log(response.data);
        alert("Dog successfully added");
        setForm({
          name: "",
          image: "",
          heightMax: "",
          heightMin: "",
          weightMin: "",
          weightMax: "",
          life_span: "",
          temperaments: [],
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Error adding dog");
      });
  };
  
  // const handleCheckboxChange = (event) => {
  //   const temperament = event.target.value;
  //   if (event.target.checked) {
  //     setSelectedTemperaments([...selectedTemperaments, temperament]);
  //   } else {
  //     setSelectedTemperaments(
  //       selectedTemperaments.filter((temp) => temp !== temperament)
  //     );
  //   }
  // };

  const deleteHandler = (temp) => {
    // esta f(n) me permite borrar un temp que no quiera antes de crear el perro
    setForm({
      temperaments: form.temperaments.filter((inst) => inst !== temp),
    });
  };

  useEffect(() => {
    dispatch(getAllTemperaments());
  }, [dispatch]);

  return (
    <form onSubmit={submitHandler} className={style.formContainer}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={form.name}
          onChange={ changeHandler}
          name="name"
          placeholder="example: Paco Pisoni"
        />
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div>
        <label>Image</label>
        <input
          type="text"
          value={form.image}
          onChange={ changeHandler}
          name="image"
          placeholder="example: https://ibb.co/6sdkMdf.jpg"
        />
        {errors.image && <span>{errors.image}</span>}
      </div>

      <div>
        <label>Height Min</label>
        <input
          type="text"
          value={form.heightMin}
          onChange={ changeHandler}
          name="heightMin"
          placeholder="example: 35 cm"
        />
        {errors.heightMin && <span>{errors.heightMin}</span>}
      </div>

      <div>
        <label>Height Max</label>
        <input
          type="text"
          value={form.heightMax}
          onChange={ changeHandler}
          name="heightMax"
          placeholder="example: 35 cm"
        />
        {errors.heightMax && <span>{errors.heightMax}</span>}
      </div>

      <div>
        <label>Weight Min Kg</label>
        <input
          type="text"
          value={form.weightMin}
          onChange={changeHandler}
          name="weightMin"
          placeholder="example: 8 kg"
        />
        {errors.weightMin && <span>{errors.weightMin}</span>}
      </div>

      <div>
        <label>Weight Max Kg</label>
        <input
          type="text"
          value={form.weightMax}
          onChange={ changeHandler}
          name="weightMax"
          placeholder="example: 5 kg"
        />
        {errors.weightMax && <span>{errors.weightMax}</span>}
      </div>

      <div>
        <label>Life expectancy</label>
        <input
          type="text"
          value={form.life_span}
          onChange={ changeHandler}
          name="life_span"
          placeholder="example: 10 - 15 years"
        />
      </div>
      <TempForm />

      {/* <div className={style.containerTemp} >
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
        </div> */}
      {/* </div> */}
      <div>
        <button
          type="submit"
          // disabled={errors.name || errors.image || errors.weightMin || errors.weightMin || errors.height || errors.life_span || !form.temperaments.length || !form.name}
        >
          Create my dog
        </button>
        {errors.temperaments && <strong>{errors.temperaments}</strong>}
      </div>

      <div>
        {form.temperaments.map((temp) => (
          <div>
            <p>{temp}</p>
            <button onClick={() => deleteHandler(temp)}>delete</button>
          </div>
        ))}
      </div>
    </form>
  );
};

export default Form;
