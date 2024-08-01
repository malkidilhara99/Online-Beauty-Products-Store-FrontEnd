import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const{getTotalCartAmount}= useContext(StoreContext);
  return (
    <form className='place-order'>
<div className="place-order-left">
  <p className="title">Delevery Information</p>
  <div className="multi-fields">
    <input type="text"  placeholder='First Name'/>
    <input type="text" placeholder='Last Name' /> 
     </div>
    <div className="multi-fields">
      <input type="text" placeholder='city' />
      <input type="text" placeholder='State' />
    </div>


</div>
<div className="plce-order-right"></div>
 <div className="cart-total">
          <h2>Cart Totals</h2>
        <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>{getTotalCartAmount()}/=</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>{350}/=</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>{getTotalCartAmount()+350}/=</b>
        </div>
      
        </div>
        <button onClick={()=>navigate('')}>PROCEED TO PAYMENT</button>
   </div>
    </form>
  )
}

export default PlaceOrder
