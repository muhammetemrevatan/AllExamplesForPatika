import { createElement, useState, useEffect } from 'react';
import './App.css';
import State from './components/State';

import User from './components/User'

const array = [
  {
    id: 1,
    name: "emre"
  },
  {
    id: 2,
    name: "ali"
  },
  {
    id: 3,
    name: "furkan"
  },
];

const name = "emre"
const surname = "vatan"
const age = 16
const isTrue = true

function App() {
  return (
    <>
      {/* <User
        array={array}
        // name={name}
        surname={surname}
        age={age}
        isTrue={isTrue}
        address={{
          title: "Edirne/Kesan",
          zip: 22800
        }}
      /> */

        <State />
      }
    </>
  );
}

export default App;
