import React, { useState } from 'react';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import {Route} from "react-router-dom";
import About from '../components/About';
import City from '../components/City';
import Swal from 'sweetalert2'

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min - 273.1),
            max: Math.round(recurso.main.temp_max - 273.1),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Lugar no encontrado',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div>
      {/* <Nav onSearch={onSearch}/>
      <div>
        <Cards
          cities={cities}
          onClose={onClose}
        />
      </div>
      <hr /> */}
      <Route path={'/'} render={()=> <Nav onSearch={onSearch}/>}/>
      <Route exact path={'/'} render={()=> <Cards cities={cities} onClose={onClose}/>}/>
      <Route exact path={'/about'} render={()=> <About/>}/>
      <Route exact path={'/city/:cityId'} render={({match})=> <City city={onFilter(match.params.cityId)}/>}/>

    </div>
  );
}

export default App;
