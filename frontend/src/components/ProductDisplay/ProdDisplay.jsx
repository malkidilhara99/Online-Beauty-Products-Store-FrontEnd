import React, { useContext, useState } from 'react'
import './ProdDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import ProdItem from '../ProdItem/ProdItem'

const ProdDisplay = ({category}) => {
    const {prod_list}=useContext(StoreContext)
  return (
    <div className='prod-display' id='prod-display'>
      <h2>Top Product Near You!</h2>
      <div className="prod-display-list">
        {prod_list.map((item,index)=>
        {
          if(category==="All"||category===item.category){
            return <ProdItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>

          }   

        })}
      </div>
    </div>
  )
}

export default ProdDisplay
