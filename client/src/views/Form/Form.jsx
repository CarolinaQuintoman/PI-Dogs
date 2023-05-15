import React, { useState } from 'react'


const Form = () => {
  const[ form, setForm ]= useState({
    name: "",
    image: "",
    height: "",
    weightMin: "0",
    weightMax: "0",
    life_span: "",
    temperaments: []
  });
  const [ error, setError] = useState({
    name: "",
    image: "",
    height: "",
    weightMin: "0",
    weightMax: "0",
    life_span: "",
    temperaments: []

  });
  const changeHandler = (event) =>{
    const property = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [property] : value
    })
  }

  const validate = (form) =>{

  }

  return (
    <form>
        <div>
          <label>Name</label>
            <input type="text" value={form.name} onChange={changeHandler} name='name' placeholder='for example: Paco Pisoni'/>
        </div>
        <div>
          <label>image</label>
            <input type="text" value={form.image} onChange={changeHandler} name='image'/>
        </div>
        <div>
          <label>Height Min</label>
            <input type="text" value={form.heightMin} onChange={changeHandler} name='heightMin'/>
        </div>
        <div>
          <label>Height Max</label>
            <input type="text" value={form.heightMax} onChange={changeHandler} name='heightMax'/>
        </div>
        <div>
          <label>Weight Min</label>
            <input type="text" value={form.weightMin} onChange={changeHandler} name='weightMin'/>
        </div>
        <div>
          <label>Weight Max</label>
            <input type="text" value={form.weightMax} onChange={changeHandler} name='weightMax'/>
        </div>
        <div>
          <label>Life Span</label>
            <input type="text" value={form.life_span} onChange={changeHandler} name='life_span'/>
        </div>

    </form>
  )
}

export default Form;