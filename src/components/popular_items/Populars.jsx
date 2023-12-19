import React from 'react'
import data_product from '../../../public/Assets/data'
import Item from '../item/Item'
const Popo = () => {
  return (
   <section>
    <div className="container">
        <div className="row">
            
                <h1>Popular in Women</h1>
                {data_product.map((item,index)=>{
                    return(
                        <Item key ={index} id ={item.id} img={item.image} name ={item.name} new_price ={item.new_price} old_price={item.old_price}></Item>
                    )
                })}
           
        </div>
    </div>
   </section>
  )
}

export default Popo
