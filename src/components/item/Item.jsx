import React from 'react'
import './item.css'
const Item = (props) => {
  return (
 
                <div className="col-lg-3">
                    <div className="img">
                        <img src={props.img} alt="" className='img-fluid'/>
                    </div>
                    <p>{props.name}</p>
                    <p>{props.new_price} <span className='ms-4'>{props.old_price}</span></p>
                  
                </div>
       
  
  )
}

export default Item
