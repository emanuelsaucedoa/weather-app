import React, { useState } from "react";
import s from '../styles/SearchBar.module.css'
import {BsSearch} from 'react-icons/bs'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <div className={s.container}>
      <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input
        type="text"
        placeholder="Buscar..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <BsSearch fontSize='1.5rem' color="white"/>
    </form>
    </div>
    
  );
}
