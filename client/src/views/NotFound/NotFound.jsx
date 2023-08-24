import React from "react";
import style from "./NotFound.module.css";
import imgLou from "../../assets/WhatsApp Image 2023-05-15 at 15.53.00.jpeg";
import dogPaw from "../../assets/dog-paw-md 10.png"

const NotFound = () => {
  return (
    <div className={style.notFounded}>
      <img src={imgLou} alt={imgLou} className={style.imgLou} />

      <h1 className={style.titleLou}>Where are you going?</h1>
      <h2 className={style.titleLou2}>Page not found...404 </h2>
      <div className={style.wrap}>
        <img
          className={style.leftFoot}
          src={dogPaw}
          alt={dogPaw}
        />
        <img
          className={style.rightFoot}
          src={dogPaw}
          alt={dogPaw}
        />
        <img
          className={style.leftFootFront}
          src={dogPaw}
          alt={dogPaw}
        />
        <img
          className={style.rightFootFront}
          src={dogPaw}
          alt={dogPaw}
        />
        
      </div>
      <div className={style.wrap2}>
        <img
          className={style.leftFoot2}
          src={dogPaw}
          alt={dogPaw}
        />
        <img
          className={style.rightFoot2}
          src={dogPaw}
          alt={dogPaw}
        />
        <img
          className={style.leftFootFront2}
          src={dogPaw}
          alt={dogPaw}
        />
        <img
          className={style.rightFootFront2}
          src={dogPaw}
          alt={dogPaw}
        />
        
      </div>
    </div>
  );
};

export default NotFound;
