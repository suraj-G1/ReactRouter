import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () =>{
    const navigate = useNavigate();
    function changeHandler(){
        navigate(-1);
    }
  return (
    <div>
        <div>Labs</div>
        <button onClick={changeHandler}>Go back</button>
    </div>
  )
}

export default Labs