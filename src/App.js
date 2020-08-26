import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import courseInfo from './fakeData/CourseInfo';
import Shop from './Component/Shop/Shop';


function App() {
    
    //console.log(courseInfo);
    const [cart, setCart] = useState(courseInfo)
    

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Learn with Programming Here</h1>
    <Shop></Shop>
    </div>
  );
}

export default App;
