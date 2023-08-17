import React from "react";
import { useParams } from "react-router-dom";
import s from '../styles/City.module.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {BiArrowBack} from 'react-icons/bi'

export default function City({city}){
    return(
         <div className={s.container}>
                <div className={s.card}>
                    
                    
                    <Link className={s.back} to={'/'}>
                        <BiArrowBack size={'1.5rem'} color="#06283D"/>
                    </Link>
                    <h2>{city.name}</h2>
                    
                    <div>
                        <div>Temperatura: {Math.round(city.temp - 273.1)} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
        //let params = useParams();

    
}