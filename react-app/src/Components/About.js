import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    function clickHandler(){
        navigate ("/support");
    }
  return (
    <div>
        <div>About</div>
        <button onClick={clickHandler}>Go to Support page</button>
    </div>
  )
}

export default About;
