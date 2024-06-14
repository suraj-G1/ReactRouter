import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {
    const navigate = useNavigate();
    function changeHandler(){
        navigate("/labs");
    }
  return (
    <div>
        <div>Support</div>
        <button onClick={changeHandler}>Go to labs</button>
    </div>
  )
}

export default Support