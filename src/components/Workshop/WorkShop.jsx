import React, { useEffect, useState } from 'react';
import './WorkShop.css';
import workshop from '../Assets/workshop_banner.webp'

const WorkShop = () => { 
  const [work , setworkshop] = useState(false)

  useEffect(()=>{
  setInterval(() => {
      setworkshop(true)   
  }, 200);
  },[])
  return (
     <div className="container-fluid p-0">
      <div className="row">
        <div className="col-12 workshop_banner ">
           <div className={` banner ${work?"show":""}`}>
                <img src={workshop}  className='w-100 h-100' alt="" />
           </div>
        </div>
        .
      </div>
     </div>
  )
}

export default WorkShop