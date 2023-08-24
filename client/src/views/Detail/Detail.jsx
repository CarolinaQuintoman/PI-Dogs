import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDogDetail } from '../../redux/actions'
import style from './Detail.module.css'

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
    <div className={style.detailContainer}>
        <div className={style.imageContainer}>
          <img src={`https://cdn2.thedogapi.com/images/${dogDetail.reference_image_id}.jpg` } alt="img"/>
        </div>
        <div className={style.infoContainer} >
          <h1 className={style.title}>{dogDetail?.name}</h1>
          <h2>WEIGHT: {weight && `${weight.metric} kg`}</h2>
          <h2>HEIGHT: {height && `${height.metric} cm`}</h2>
          <h2>LIFE SPAN: {dogDetail?.life_span}</h2>
          <h2>TEMPERAMENTS: {dogDetail?.temperament}</h2>
          <h2>DESCRIPTION: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deleniti quas harum, nam at, ex officia, nobis odio earum commodi eius? Consequuntur, accusantium? Debitis, magnam. Dignissimos laudantium aspernatur beatae autem!</h2>
        </div>
    </div>
  )
}

export default Detail;