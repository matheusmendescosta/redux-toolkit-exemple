import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    addPeople,
    removePeople
} from './NewPeopleSlice'

export function NewPeople() {
  const dispatch = useDispatch();

  const [peopleName, setPeopleName] = useState("");

  console.log("pessoas", peopleName)
  return (
    <div>
        <div>
          <label>Nome da Pessoa </label>
          <input 
            onChange={(event) => setPeopleName(event.target.value)} 
            value={peopleName}
          />
            <button 
                type="submit"
                onClick={()=>dispatch(addPeople())}
            >
              Adicionar Pessoa
            </button>
        </div>

        <p>{peopleName}</p>
    </div>
  );
}
