import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../App.css'
import Loader from './Loader'
function Flatsurface() {
  console.log("flatsurface")
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      }
    }, 20);
  }, [percentage]);
  return (
    // <div >
   <div className='surfacedloader'>
     <div  className='container flating d-flex justify-content-center align-items-center'>
     <img className='grp' src='/images/group.png'/>
      <CircularProgressbar  className='loading ' value={percentage} 
     />
  </div>
    </div>
  //  </div>
  )
}

export default Flatsurface