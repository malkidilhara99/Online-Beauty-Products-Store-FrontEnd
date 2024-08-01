import React, { useContext } from 'react'
import './Cart.css'
import {StoreContext} from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {cartItems,prod_list,removeFromCart,getTotalCartAmount}=useContext(StoreContext)
const  navigate=useNavigate();


  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-titles">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
          

         {prod_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              <div className='cart-items-titles cart-items-item'>
               <img src={item.image} alt="" />
               <p>{item.name}</p>
               <p>{item.price}/=</p>
               <p>{cartItems[item._id]}</p>
               <p>{item.price*cartItems[item._id]}/=</p>
               <p className='cross' onClick={()=>removeFromCart(item._id)}>x</p>

                 </div>
                 
            )
          }
        })}
      </div>
 <div className="cart-bottom">
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
        <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
   </div>
    <div className="card-promocode">
      <div>
      <p>If You Have a Promo Code.Enter It Here</p>
      <div className="cart-promocode-input">
               <input type="text" className='inpu' placeholder='promo code' />
               <button className='butta'>Submit</button>
        </div>
      </div>
     </div>
  </div>
</div>
  )
}

export default Cart
