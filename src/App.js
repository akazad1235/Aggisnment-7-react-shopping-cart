import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import courseInfo from './fakeData/CourseInfo';
import Shop from './Component/Shop/Shop';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
    
    //console.log(courseInfo);
    const [cart, setCart] = useState(courseInfo)
    

  return (
    <div>
      <h1 className='text-center bg-success text-white p-3'>Learn with Programming Hero</h1>
    <Shop></Shop>
    </div>
  );
}

export default App;
