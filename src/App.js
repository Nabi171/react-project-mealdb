import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import { useState, useEffect } from 'react';
import Mealdb from './Mealdb/Mealdb';
import NavVar from './NavVar/NavVar';
import Slider from './Slider/Slider';

function App() {
  return (
    <div className="App">
      <NavVar></NavVar>
      <Slider></Slider>
      <Loadmeals></Loadmeals>

    </div>
  );
}


function Loadmeals() {
  const [meals, setmeals] = useState([]);
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s').then(res => res.json()).then(data => setmeals(data.meals));
  }, [])
  return (
    <div>
      {

        meals.map(meal => <Mealdb meal={meal}></Mealdb>
        )
      }
    </div>
  )


}

export default App;
