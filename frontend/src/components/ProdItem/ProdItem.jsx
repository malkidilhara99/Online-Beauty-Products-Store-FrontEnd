import React, { useContext } from 'react'
import './ProdItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'


const ProdItem = ({id,name,price,description,image}) => {

const {cartItems,addToCart,removeFromCart}=useContext(StoreContext);
  

  return (
<div className='prod-item'>
    <div className="prod-item-img-container">
        <img  className='prod-item-image'src={image} alt="" />
        {!cartItems[id]
        ?<img src={assets.add_icon_white} alt="" className="add" onClick={()=>addToCart(id)} />
        :<div className="prod-item-counter">
             <img src={assets.remove_icon_red}   onClick={()=>removeFromCart(id)} alt="" />
             <p>{cartItems[id]}</p>
             <img src={assets.add_icon_green}  onClick={()=>addToCart(id)} alt="" />
          </div>
        }
      </div>
      <div className="prod-item-info">
        <div className="prod-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="prod-item-desc">
            {description}
        </p>
        <p className="prod-item-price">
            LRK{price}
        </p>
      </div>
    </div>
  )
}

export default ProdItem
