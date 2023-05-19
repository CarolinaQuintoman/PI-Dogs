import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDogDetail } from '../../redux/actions'


const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const dogDetail = useSelector((state) => state.dogDetail)
  
  useEffect(() => {
    dispatch(getDogDetail(id));
  }, [id, dispatch])
  //desestructurado las propiedades "weight" y "height" del objeto "dogDetail"
  const { weight, height } = dogDetail;
  return (
    <div>
        <div>
          <h1>Name:{dogDetail?.name}</h1>
          
          <img src={`https://cdn2.thedogapi.com/images/${dogDetail.reference_image_id}.jpg` } alt="img"/>
        </div>
        <div>
          <h2>Weight: {weight && `${weight.metric} kg`}</h2>

           <h2>Height: {height && `${height.metric} cm`}</h2>
          <h2>Life Span: {dogDetail?.life_span}</h2>
          <h2>Temperaments: {dogDetail?.temperament}</h2>
        </div>
    </div>
  )
}

export default Detail;