import React, { useState, useEffect } from 'react'
import axios from 'axios';
import validate from './validate';
import { useDispatch, useSelector} from "react-redux";
import { getAllTemperaments } from '../../redux/actions';


const Form = () => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments) // estado global 


  const[ form, setForm ]= useState({ //estado local 
    name: "",
    image: "",
    heightMax: "",
    heightMin: "",
    weightMin: "0",
    weightMax: "0",
    life_span: "",
    temperaments: []
  });
  const [ errors, setErrors] = useState({
    name: "",
    image: "",
    heightMax: "",
    heightMin: "",
    weightMin: "0",
    weightMax: "0",
    life_span: "",
    temperaments: []

  });
  const changeHandler = (event) =>{
    const property = event.target.name;
    const value = event.target.value;
    setErrors(validate({
      ...form,
      [property] : value
    }));
    setForm({
      ...form,
      [property] : value
    });
  }
   const submitHandler = (event) =>{
    event.preventDefault();

    axios.post("http://localhost:3001/dogs", form)
    .then(response => {
      console.log(response.data);
      alert("Dog successfully added");
    setForm({
      name: "",
      image: "",
      heightMax: "",
      heightMin: "",
      weightMin: "0",
      weightMax: "0",
      life_span: "",
      temperaments: []
    });
  })
    .catch(error => {
      console.log(error);
      alert("Error adding dog")
    })
  }

  // const submitHandler = (event) =>{
  //      event.preventDefault();
  //      axios.post("http://localhost:3001/dogs", form)//form es mi body
  //      .then(response => alert(response))
  //      .catch(error => alert(error))
  //     }

  const choiceTemperamentHandler = (event) =>{
    const propertyTemp = event.target.name;
    const valueTemp = event.target.value;
    let { value } = event.target;
    if(form.temperaments.includes(value)){
      return alert("Temperaments can not be repeated")
    }
    if(value === "all"){
      return
    }
    setErrors(validate({
      ...form,
      [propertyTemp] : valueTemp
    }));
    setForm({
      ...form,
      [propertyTemp] : valueTemp
    });
  }

  const deleteHandler = (temp) =>{// esta f(n) me permite borrar un temp que no quiera antes de crear el perro
    setForm({
      temperaments: form.temperaments.filter( inst => inst !== temp)
    })
  }

  useEffect(() =>{
    dispatch(getAllTemperaments())
  }, [dispatch])

  return (
    
    <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
            <input 
              type="text" 
              value={form.name} 
              onChange={(event) =>changeHandler(event)} 
              name='name' placeholder='example: Paco Pisoni'/>
            {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
          <label>Image</label>
            <input 
              type="text" 
              value={form.image} 
              onChange={(event) =>changeHandler(event)} 
              name='image' 
              placeholder='example: https://ibb.co/6sdkMdf.jpg'/>
              {errors.image && <span>{errors.image}</span>}
        </div>

        <div>
          <label>Height Min</label>
            <input
              type="text" 
              value={form.heightMin} 
              onChange={(event) =>changeHandler(event)}
              name='heightMin'
              placeholder='example: 35 cm'/>
              {errors.heightMin && <span>{errors.heightMin}</span>}
        </div>

        <div>
          <label>Height Max</label>
            <input
              type="text" 
              value={form.heightMax} 
              onChange={(event) =>changeHandler(event)}
              name='heightMax'
              placeholder='example: 35 cm'/>
              {errors.heightMax && <span>{errors.heightMax}</span>}
        </div>

        <div>
          <label>Weight Min Kg</label>
            <input 
              type="text" 
              value={form.weightMin} 
              onChange={changeHandler} 
              name='weightMin'
              placeholder='example: 8 kg'/>
              {errors.weightMin && <span>{errors.weightMin}</span>}
        </div>

        <div>
          <label>Weight Max Kg</label>
            <input 
            type="text" 
            value={form.weightMax} 
            onChange={(event) =>changeHandler(event)} 
            name='weightMax'
            placeholder='example: 5 kg'/>
            {errors.weightMax && <span>{errors.weightMax}</span>}
        </div>
        
        <div>
          <label>Life expectancy</label>
            <input 
              type="text" 
              value={form.life_span} 
              onChange={(event) =>changeHandler(event)} 
              name='life_span'
              placeholder='example: 10 - 15 years'/>
        </div>

        <div>
          <label>Temperaments</label>
          <select onChange={(event) => choiceTemperamentHandler(event)}>
            <option value="all"></option>
            {
              temperaments.map((temp) =>{
                return(
                  <option value={temp} key={temp}>{temp}</option>
                )
              })
            }
          </select>
          <h3>My dog is ...</h3>
          <ul>
            <div>{form.temperaments.map(temp => temp + ", ")}</div>
          </ul>
            
        </div>
        <div>
          <button
            type='submit'
            // disabled={errors.name || errors.image || errors.weightMin || errors.weightMin || errors.height || errors.life_span || !form.temperaments.length || !form.name}
            >Create my dog</button>
            {errors.temperaments && <strong>{errors.temperaments}</strong>}
        </div>
        

        <div>
        {form.temperaments.map(temp => 
          <div>
            <p>{temp}</p>
            <button onClick={() => deleteHandler(temp)}>delete</button>
          </div>
          )}
        </div>      
    </form>


     
  )
}

export default Form;