import React from 'react';
import { Link } from 'react-router-dom';
import s from '../styles/Card.module.css'
import {TiDelete} from 'react-icons/ti'

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className={s.container}>
        <span onClick={onClose} className={s.onClose}>
            <TiDelete fontSize='2rem' color='#06283D'/>
        </span>
        <div className={s.description}>
           <h3>{name}</h3>
           <div className={s.img}>
              <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="120" height="120" alt="" />
            </div>
          <div className={s.stats}>
            <div className={s.min}>
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className={s.max}>
              <p>Max</p>
              <p>{max}°</p>
            </div>
          </div>
          <Link className={s.link} to={`/city/${id}`}>
              Ver mas
            </Link>
        </div>
      </div>
    );
};
